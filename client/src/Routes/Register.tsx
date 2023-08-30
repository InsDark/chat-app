import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './../../utils/firebase'
const Register = () => {
    const provider = new GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    return (
        <main className="max-h-screen h-screen bg-secondary flex items-center justify-center">
            <div className='bg-background flex w-[45rem] p-4 rounded'>
                <img src="undraw_connecting_teams_re_hno7.svg" alt="" className='w-[50%] h-auto' />
                <div className='text-text w-full flex flex-col items-center justify-center gap-2 p-3'>
                    <h1 className='text-2xl'>SignUp</h1>
                    <button onClick={async () => {
                        try {
                            const res = await signInWithPopup(auth, provider)
                            if (!res) return alert('We could sign up you try again!')
                            
                        } catch (e) {
                            alert(e)
                        }
                    }} className="outline-none flex items-center gap-2 bg-primary p-2">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fgoogle-logo-png-open-2000.png&f=1&nofb=1&ipt=d26da3415f6d26c612a87a92aafba970bb9a5cc41ba71d891f97af821bf04c85&ipo=images" className="w-[2rem] h-auto" alt="" />
                        Sign in with Google
                    </button>
                </div>
            </div>

        </main>
    )
}

export default Register