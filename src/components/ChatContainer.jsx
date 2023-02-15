import React, { useContext, useEffect, useRef } from 'react'
import {chat} from './ChatContext'
const ChatContainer = ({}) => {
    const {messages, auth} = useContext(chat)
    const chatDiv = useRef(null)
    useEffect(() => {
        if(!messages) return
        const messagesDiv = chatDiv.current.querySelectorAll('div')
        messagesDiv[messagesDiv.length - 1].scrollIntoView({
            behavior: 'smooth'
        })
    }, [messages])
  return (
    <div className=' p-2 overflow-y-auto h-full gap-2 bg-slate-600 flex flex-col' ref={chatDiv}>
          {messages ? messages.map((msg, index) =>
          (
            <div key={index} className={ msg.picture == auth.user.photoURL ? 'bg-slate-800 w-fit  self-end p-2 rounded' : 'bg-slate-800 w-fit p-2 rounded '}>
              <div className='flex'>
                <img className='w-12 h-12' src={msg.picture} alt={msg.picture} />
                <h2>{msg.user}</h2>
              </div>
              <p>{msg.message}</p>
            </div>
          )
          ) : <h3>no messages</h3>}
        </div>
  )
}

export default ChatContainer