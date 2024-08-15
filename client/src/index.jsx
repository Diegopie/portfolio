import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalProvider from './utils/GlobalContext';
import './index.css';
import App from './App';

const loadTest = false;
const container = document.getElementById('app');
const root = createRoot(container);

if (loadTest) {
  setTimeout(() => {
    root.render(
      <React.StrictMode>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </React.StrictMode>
    );
  }, 1600)
} else {
  root.render(
    <React.StrictMode>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </React.StrictMode>
  );
}
