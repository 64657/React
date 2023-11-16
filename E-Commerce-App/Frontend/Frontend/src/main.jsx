import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import IndexProvider from "./UseContext/IndexProvider";


ReactDOM.createRoot(document.getElementById('root')).render(
  <IndexProvider>
    <App />
  </IndexProvider>,
)
