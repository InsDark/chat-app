import React, { useContext, useEffect, useRef, useState } from 'react'
import { chat } from '../components/ChatContext'
import Header from '../components/Header'
import { onSnapshot, doc, addDoc, collection, getDocs, getDoc, query, orderBy } from 'firebase/firestore'
import { db } from '../config/firebase'
import ChatContainer from '../components/ChatContainer'
const Chat = () => {
  const [message, setMessage] = useState('')
  const { auth } = useContext(chat)

  const listenNewMessages = async () => {

    onSnapshot(query(collection(db, 'chat'), orderBy('time')), (doc) => {
      const filterMsg = doc.docs.map(msg => {
        const data = msg.data()
        return data
      })
      setMessages(filterMsg)
    })
  }
  const chatContainer = useRef(null)
  useEffect(() => listenNewMessages, [])
  const sendMessage = (e) => {
    e.preventDefault()
    const date = new Date()
    const chatRef = collection(db, 'chat')  
    addDoc(chatRef, {
      message,
      user: auth.user.displayName,
      picture: auth.user.photoURL,
      time: date.getTime()
    })
    setMessage('')
  }
  const { messages, setMessages } = useContext(chat)

  return (
    <main className='bg-slate-800 text-white flex flex-col h-screen'>
      <Header /> 
        <ChatContainer/>
        <form onSubmit={sendMessage} className='flex gap-2  bg-slate-900 p-2' >
          <input onChange={(e) => setMessage(e.target.value)} className='outline-none w-full p-2 text-white bg-slate-700' type="text" placeholder='Type a message' value={message} />
          <input type="submit" className='cursor-pointer' value='Send Message' />
        </form>
    </main>
  )
}

export default Chat