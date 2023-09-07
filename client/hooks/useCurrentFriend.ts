import { currentFriendStore } from '../stores/currentFriendStore'
const useCurrentFriend = () => {
  const { currentFriend, setcurrentFriend } = currentFriendStore()
  return {
    currentFriend, setcurrentFriend
  }
}

export default useCurrentFriend