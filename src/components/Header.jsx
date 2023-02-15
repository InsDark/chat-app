import React, { useContext } from 'react'
import { NavLink, } from 'react-router-dom'
import { chat } from './ChatContext'
const Header = () => {
  const {auth} = useContext(chat)
  return (
    <header className='bg-slate-900 p-2 flex justify-around items-center text-white'>
      <h1 className='text-3xl'>ChatApp</h1>
      <nav className='flex gap-2 text-xl'>
        {auth ? (
          <>
            <button className='hover:text-neutral-900 hover:bg-slate-100 p-2 rounded'>Close Session</button>
            <NavLink className='hover:text-neutral-900 hover:bg-slate-100 p-2 rounded' to='/chat'>Chat</NavLink>
          </>
        ) : (
          <>
            <NavLink className='hover:text-neutral-900 hover:bg-slate-100 p-2 rounded' to='/'>Home</NavLink>
            <NavLink className='hover:text-neutral-900 hover:bg-slate-100 p-2 rounded' to='/login'>Login</NavLink>
          </>
        )}

      </nav>

    </header>
  )
}

export default Header