import LoginBtn from '../components/buttons/LoginBtn'

const Login = () => {
  document.title = 'Chat - Signin'
    return (
        <main className="max-h-screen h-screen bg-background flex items-center justify-center">
            <div className='bg-secondary flex w-[45rem] p-4 rounded'>
                <img src="undraw_connecting_teams_re_hno7.svg" alt="" className='w-[50%] h-auto' />
                <div className='text-text w-full flex flex-col items-center justify-center gap-2 p-3'>
                    <h1 className='text-2xl'>Sign In</h1>
                    <LoginBtn/>
                </div>
            </div>

        </main>
    )
}

export default Login