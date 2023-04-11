import { app, BrowserWindow } from 'electron';
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

let mainWindow: BrowserWindow;

const createWindows = async () => {
  mainWindow = new BrowserWindow({
    title: 'Pixelino',
    icon: path.resolve(DIST, 'favicon.svg'),
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload')
    }
  });

  mainWindow.removeMenu();

  if (isDev) {
    mainWindow.loadURL(url);
    mainWindow.webContents.openDevTools({ mode: 'detach' });
    return;
  }

  mainWindow.loadFile(path.join(DIST, 'index.html'));
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
