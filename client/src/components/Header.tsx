import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='flex justify-around items-center'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2020%2F10%2FDiscord-logo.png&f=1&nofb=1&ipt=ba234b942dfc6a865ebae1f9d09c18c081308ce51dc56210a2c4705c550dccf6&ipo=images" className="w-[10rem] h-auto" alt="" />
            <div className='flex text-text gap-4'>
                <Link className='text-xl hover:text-accent' to={'/login'}>Login</Link>
                <Link className='text-xl hover:text-accent' to={'/register'}>Register</Link>
            </div>
        </div>
    )
}

export default Header