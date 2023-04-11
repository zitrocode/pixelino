import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import { GlobalStyle } from './styles/globalStyles';
import { Navbar } from './components/Navbar/Navbar';
import { Button } from './components/Button/Button.style';

const App: React.FC = () => {
  const { config, toggleTheme } = useTheme();
  const [activeTool, setActiveTool] = React.useState('select');

  return (
    <ThemeProvider theme={config}>
      <GlobalStyle />
      <Navbar changeTool={setActiveTool} currentTool={activeTool} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 40px)'
        }}
      >
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
