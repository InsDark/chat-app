import { ChangeEvent, FormEvent, useState } from "react"
import { trpc } from "../../trpc"
import { authStore } from "../../../stores/authStore"

const Searcher = () => {
  const {email}=  authStore(state => state.auth)
  const addFriend = trpc.user.addFriend.useMutation()
  const [value, setValue] = useState<string>('')
  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      addFriend.mutate({friendEmail: value, userEmail : email}, ({
        onSuccess: (data) => {
          alert( data)
        }
      }))
      
  }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" className='bg-background p-2 w-full outline-none text-text' placeholder='Search for someone... ' onChange={(e : ChangeEvent<HTMLInputElement> ) => {
            setValue(e.target.value)
        }} />
    </form>
  )
}

export default Searcher