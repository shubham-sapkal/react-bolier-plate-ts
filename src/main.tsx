import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalContextProvider } from './context/GlobalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContextProvider >
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
)
