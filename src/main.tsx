import * as ReactDOM from 'react-dom/client';
import App from './App';

const appElement = document.getElementById('app') as HTMLDivElement;
ReactDOM.createRoot(appElement).render(<App />);
