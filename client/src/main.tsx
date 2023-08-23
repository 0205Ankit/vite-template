import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeBuilder } from './themeProvider.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeBuilder>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeBuilder>
    </Provider>
  </React.StrictMode>
);
