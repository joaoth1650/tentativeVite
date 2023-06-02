import React from 'react'
import ReactDOM from 'react-dom/client'


import './styles/global.css'
import Discord from './pages/discord'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Discord />
  </React.StrictMode>,
)
