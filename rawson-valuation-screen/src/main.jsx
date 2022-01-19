import React from 'react'
import ReactDOM from 'react-dom'
import "regenerator-runtime/runtime.js"; //needed for Globalsearch to work on table
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
