import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MouseContextProvider from './context/mouseContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </React.StrictMode>,
)
