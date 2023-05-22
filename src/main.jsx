import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import Reset from './css/Reset.js'
import './css/reset.css';
import './css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Reset /> */}
    <App />
  </React.StrictMode>,
)
