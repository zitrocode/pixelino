import { DefaultTheme } from 'styled-components';

const defautlTheme: DefaultTheme = {
  borderRadius: '5px'
};

export const light: DefaultTheme = {
  ...defautlTheme,
  colors: {
    background: {
      primary: '#F0F0F0',
      secundary: '#FFFFFF'
    },
    foreground: {
      primary: '#333333',
      secundary: '#666666'
    },
    action: '#007AFF',
    divider: '#CCCCCC',
    alerts: {
      success: '#34C759',
      warning: '#FF9500',
      error: '#FF3B30'
    }
  }
};

export const dark: DefaultTheme = {
  ...defautlTheme,
  colors: {
    background: {
      primary: '#1C1C1E',
      secundary: '#2C2C2E'
    },
    foreground: {
      primary: '#FFFFFF',
      secundary: '#8E8E93'
    },
    action: '#0A84FF',
    divider: '#3A3A3C',
    alerts: {
      success: '#32D74B',
      warning: '#FF9F0A',
      error: '#FF453A'
    }
  }
};
