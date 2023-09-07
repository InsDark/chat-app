import { AiOutlineSend } from 'react-icons/ai'
import { MdAttachFile } from 'react-icons/md'
import { BiMicrophone } from 'react-icons/bi'

const Input = () => {
    return (
        <form className='p-3 flex justify-center items-center gap-3' >
            <div className='w-[80%] pl-4 p-2  rounded-full flex gap-2 items-center bg-primary'>
                <MdAttachFile />
                <input className='  mx-[auto] bg-primary w-full outline-none' type="text" placeholder='Write a message ..' />
                <span className='text-xl p-2 cursor-pointer hover:bg-accent hover:text-background rounded-full'>
                    <BiMicrophone />

                </span>
            </div>
            <span className='hover:text-accent cursor-pointer text-xl'>
                <AiOutlineSend />
            </span>
        </form>
    )
}

export default Input