import { authStore } from './../stores/authStore'
const useAuth = () => {
    const { auth, setAuth: saveAuth } = authStore(state => state)

    const setAuth = ({ email , uid, token } : {email: string, uid: string, token: string}) => {
        sessionStorage.setItem('auth' , JSON.stringify({email, uid, token}))
        saveAuth({email, uid, token})
        
    }
    return {
        setAuth,
        auth
    }
}

export default useAuth