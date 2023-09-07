import React from 'react'
import useCurrentFriend from '../../../hooks/useCurrentFriend'

const HeaderChat = () => {
    const { currentFriend } = useCurrentFriend()
    return (
        <div className='bg-secondary flex items-center p-2 gap-2'>
            <img className='w-12 rounded-full h-auto' src={currentFriend?.picture} alt={currentFriend?.name} />
            <h3>{currentFriend?.name}</h3>
        </div>
    )
}

export default HeaderChat