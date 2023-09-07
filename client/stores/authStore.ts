import {create} from 'zustand'


interface AuthStore {
    auth: {
        email: string , 
        uid: string,
        token: string
    },
    setAuth: (newAuth : {email: string , uid: string, token: string}) => void
}

export const authStore =  create<AuthStore>((set) => ({
    auth: {
        uid: '',
        email: '',
        token: '',
    },
    setAuth: (newAuth  ) => set({auth: newAuth} )
}))