import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import { ResultContextProvider }  from './contexts/ResultContextProvider'
import './global.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);
