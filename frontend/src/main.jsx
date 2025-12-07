import '../src/tailwind.css';
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from "sonner";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster richColors position="top-right" />
    </BrowserRouter>
  </StrictMode>,
)
