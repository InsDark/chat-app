import {create} from 'zustand'
import {Socket} from 'socket.io-client'


interface SocketStore {
    socket: null | Socket  ,
    setSocket: (newSocket : Socket) => void
}

export const socketStore =  create<SocketStore>((set) => ({
    socket: null,
    setSocket: (newSocket) => set({socket: newSocket})
}))