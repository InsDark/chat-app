import { useEffect } from "react"
import Contacts from "../components/contacts/Contacts"
import Searcher from "../components/chat/Searcher"
import ChatComponent from "../components/chat/ChatComponent"
import useAuth from "../../hooks/useAuth"
import useSocket from "../../hooks/useSocket"
const Chat = () => {
    const {auth} = useAuth()
    const {uid, email} = auth
    const { socket, connect} = useSocket()
    useEffect(() => {
        connect()
        socket?.emit('new', { socketId: socket?.id, userId: uid, userEmail: email})

    }, [])
    document.title = 'Re:Chat'
    return (
        <main className="bg-background flex max-h-screen h-screen text-text">
            <div className="bg-primary flex flex-col gap-3">
                <Searcher />
                <Contacts />
            </div>
            <ChatComponent />
        </main>
    )
}

export default Chat