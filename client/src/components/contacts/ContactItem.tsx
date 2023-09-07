import { trpc } from "../../trpc"
import useCurrentFriend from '../../../hooks/useCurrentFriend'
const ContactItem = ({ email }: { email: string }) => {
    const { data } = trpc.user.get.useQuery({ email })
    const {setcurrentFriend}= useCurrentFriend()
    const handleClick = () => {
        setcurrentFriend({name: data?.name, picture: data?.picture})
    }
    return (
        <div className="flex items-center gap-2 cursor-pointer hover:bg-background p-2" onClick={handleClick}>

            <img className="w-12 h-auto rounded-full" src={`${data?.picture}`} alt={data?.name} />
            <h1>{data?.name}</h1>
        </div>
    )
}

export default ContactItem