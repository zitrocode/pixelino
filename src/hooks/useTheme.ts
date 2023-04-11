import * as React from 'react';
import { light, dark } from '../styles/theme';

const api = window.electron;

export const useTheme = () => {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    api.send('themeChange', { theme });
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      return;
    }

    setTheme('light');
  };

  const config = theme === 'light' ? light : dark;

  return { config, theme, toggleTheme };
};
