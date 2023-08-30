import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Routes/Home'
import Register from './Routes/Register'
const Router = () => {
    return (
            <BrowserRouter >
                <Routes>
                    <Route   path='/' element={<Home/>}/>
                    <Route   path='/login' element={<Home/>}/>
                    <Route   path='/register' element={<Register/>}/>


                </Routes>
            </BrowserRouter>
    )
}

export default Router