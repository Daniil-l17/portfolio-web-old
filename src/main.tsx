import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterMain } from './Router/RouterMain.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterMain/>
  </React.StrictMode>,
)
