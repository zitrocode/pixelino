import React, { createRoot } from 'react-dom/client';
import App from './App';

const appContainer = document.getElementById('app') as HTMLDivElement;
createRoot(appContainer).render(<App />);
