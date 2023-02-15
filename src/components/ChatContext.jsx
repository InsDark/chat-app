import React, { createContext , useState} from 'react'
import App from '../App'
export const  chat = createContext()
const ChatContext = () => {
  const [messages, setMessages] = useState(false)
  const [auth, setAuth] = useState(null)
  return (
    <chat.Provider value={{messages, setMessages, auth ,setAuth}}>
        <App/>
    </chat.Provider>
  )
}

export default ChatContext