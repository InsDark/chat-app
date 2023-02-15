import React from 'react'
import Header from '../components/Header'
import {NavLink} from 'react-router-dom'
const Home = () => {
  return (
    <main className='bg-slate-800 text-white h-screen flex flex-col '>
      <Header />
      <section className=' h-full justify-center items-center flex flex-col gap-2'>
        <h2 className='text-bold text-3xl text-'>Hey welcome to this global chat, let's login ang start chating!!</h2>
        <NavLink to='/login' className='bg-slate-900 p-2 rounded text-2xl'>Login</NavLink>
      </section>
    </main>
  )
}

export default Home