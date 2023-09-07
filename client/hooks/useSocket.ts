import { io } from "socket.io-client"
import { socketStore } from "../stores/socketStore"

const useSocket = () => {
    const {setSocket, socket} = socketStore()
    const connect = () => {
        const socket = io('ws://localhost:3000')
        setSocket(socket)
    }
    return {
        connect, socket
    }
}

export default useSocket