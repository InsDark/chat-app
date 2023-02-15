import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Chat from './Routes/Chat'
import Home from './Routes/Home'
import Login from './Routes/Login'
import {chat} from './components/ChatContext'
import { useContext } from 'react'
const ProtectRoute = ({element}) => {
  const {auth } = useContext(chat)
  if(!auth) return <Navigate to='/login'/>
  return element
}
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/chat" element={<ProtectRoute element={<Chat/>}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
