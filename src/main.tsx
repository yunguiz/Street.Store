import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Gracefully handle harmless environment-specific WebSocket closures and SDK telemetry warnings
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const reasonStr = String(event.reason?.message || event.reason || '').toLowerCase();
    if (
      reasonStr.includes('websocket') ||
      reasonStr.includes('api_integration') ||
      reasonStr.includes('progressevent')
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });

  window.addEventListener('error', (event) => {
    const errorStr = String(event.message || event.error || '').toLowerCase();
    if (
      errorStr.includes('websocket') ||
      errorStr.includes('api_integration') ||
      errorStr.includes('progressevent')
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });
}

createRoot(document.getElementById('root')!).render(<App />);
