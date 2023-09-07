import HeaderChat from './HeaderChat'
import useCurrentFriend from '../../../hooks/useCurrentFriend'
import Messages from './Messages'
import Input from './Input'

const ChatComponent = () => {
  const { currentFriend } = useCurrentFriend()

  return (
    <div className='bg-background w-full'>
      {currentFriend ?
      <main className='flex flex-col h-screen'>
        <HeaderChat /> 
        <Messages/>
        <Input/>
      </main> :
        <div className='flex flex-col h-screen gap-2 items-center justify-center'>
          <img className='w-[20%] h-auto' src='./../../../public/undraw_people_search_re_5rre.svg' />
          <h3 className='text-accent text-xl'>Find New Friend to talk with!!!</h3>
        </div>}

    </div>
  )
}

export default ChatComponent