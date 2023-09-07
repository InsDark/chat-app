import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../../utils/firebase"
import { useNavigate } from "react-router-dom"
import useAuth from './../../../hooks/useAuth'
import { trpc } from "../../trpc"
const LoginBtn = () => {
    const { setAuth } = useAuth()
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const loginUser = trpc.user.login.useMutation()
    const handleLogin = async () => {
        try {
            const res = await signInWithPopup(auth, provider)
            if (!res) return alert('We could sign up you try again!')
            const { user: { email, uid } } = res
            loginUser.mutate({email, uid}, {
                onSuccess: (data) => {
                    const {token} = data
                    setAuth({email: email || "", uid, token})
                    navigate('/chat')
                }, 
                onError: (error) => {
                    alert(error)
                }
            })


        } catch (e) {
            alert(e)
        }
    }
    return (
        <button onClick={handleLogin} className="outline-none flex items-center gap-2 bg-background  p-2">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fgoogle-logo-png-open-2000.png&f=1&nofb=1&ipt=d26da3415f6d26c612a87a92aafba970bb9a5cc41ba71d891f97af821bf04c85&ipo=images" className="w-[2rem] h-auto" alt="" />
            Sign in with Google
        </button>
    )
}

export default LoginBtn