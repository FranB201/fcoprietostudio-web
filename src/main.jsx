import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'
import { FcoprietostudioApp } from './fcoprietostudioApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FcoprietostudioApp />
    </BrowserRouter>
  </React.StrictMode>
)
