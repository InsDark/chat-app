import { ReactElement, useEffect, } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
const ProtectRoute = ({ element }: { element: ReactElement }) => {
  const navigate = useNavigate()
  const { setAuth } = useAuth()

  useEffect(() => {
    const session =  JSON.parse(sessionStorage.getItem('auth') || "{}" )
    if(!Object.entries(session).length) return navigate('/login')
    const {token, email, uid} = session
    setAuth({email, token, uid})
  }, [])
  return (
    element
  )
}

export default ProtectRoute