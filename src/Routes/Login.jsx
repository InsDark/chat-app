import React, {useContext} from 'react'
import Header from '../components/Header'
import {auth} from './../config/firebase'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {chat} from './../components/ChatContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {   
    const {setAuth} = useContext(chat)
    const navigate = useNavigate()
    const logIn = async() => {
        try{
            const provider = new GoogleAuthProvider()

            const res = await signInWithPopup(auth, provider)
            if(!res) return 
            setAuth(res)
            navigate('/chat')

        } catch(err){
            console.error(err)
        }
        
    }
  return (
    <main className='bg-slate-800 text-white h-screen flex flex-col '>
    <Header/>
    <section className=' flex flex-col gap-2 h-full justify-center items-center '>
        <h2 className='text-3xl'>Log in and start chating</h2>
        <button onClick={logIn} className='bg-slate-900 rounded p-2 '>Access with google</button>
    </section>
    </main>
  )
}

export default Login