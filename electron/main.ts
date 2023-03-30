import { app, BrowserWindow, ipcMain } from 'electron';
import os from 'os';
import path from 'path';

const url = process.env.VITE_DEV_SERVER_URL ?? '';
const DIST = path.join(__dirname, '..', 'dist');
const isDev = process.env.NODE_ENV !== 'production';

// Disable GPU Acceleration for Windows 7
if (os.release().startsWith('6.1')) app.disableHardwareAcceleration();

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

const createWindows = async () => {
  const win = new BrowserWindow({
    title: 'Pixelino',
    icon: path.resolve(DIST, 'favicon.svg'),
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload')
    }
  });

  if (isDev) {
    win.loadURL(url);
    win.webContents.openDevTools({ mode: 'detach' });
    return;
  }

  win.removeMenu();
  win.loadFile(path.join(DIST, 'index.html'));
};

app.whenReady().then(createWindows);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
    return;
  }

  createWindows();
});

ipcMain.on('counter', (event, data) => {
  console.log(data.message);
});
