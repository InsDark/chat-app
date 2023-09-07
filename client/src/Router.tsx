import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Routes/Home'
import Chat from './Routes/Chat'
import Login from './Routes/Login'
import Register from './Routes/Register'
import ProtectRoute from './middlewares/ProtectRoute'


const Router = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/chat' element={<ProtectRoute element={<Chat/>}/>} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router