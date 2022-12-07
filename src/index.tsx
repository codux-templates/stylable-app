import React from 'react';
import { createRoot } from 'react-dom/client';
import './globals.st.css';
import { App } from './components/app';

createRoot(document.body.appendChild(document.createElement('div'))).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
