import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeBuilder } from './themeProvider.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeBuilder>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeBuilder>
  </React.StrictMode>
);
