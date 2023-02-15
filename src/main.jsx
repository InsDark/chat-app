import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatContext from './components/ChatContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatContext />
  </React.StrictMode>,
)
