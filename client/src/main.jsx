import React from 'react';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@mui/material/styles'; 
import theme from './utils/Theme.js'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}> 
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

