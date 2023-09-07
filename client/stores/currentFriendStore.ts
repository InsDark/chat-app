import {create} from 'zustand'
type FriendData = {
    name: string,
    picture: string
}

interface AuthStore {
    currentFriend: FriendData | null ,

    setcurrentFriend: (friendInfo : FriendData) => void
}

export const currentFriendStore =  create<AuthStore>((set) => ({
    currentFriend: null,
    setcurrentFriend: (friendInfo) => set({currentFriend: friendInfo})
}))