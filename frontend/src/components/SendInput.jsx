import React from 'react'
import { IoIosSend } from "react-icons/io";

const SendInput = () => {
  return (
    <div>
        <form action="" className='px-4 my-3'>
            <div className='w-full relative'>
                <input type="text" 
                placeholder='Send a message'
                className='p-3 border-zinc-500  border text-sm rounded-lg w-full block bg-gray-700 text-white'
                />
                <button className='absolute flex inset-y-0 end-0 items-center pr-4'>
                    <IoIosSend/>
                </button>
            </div>
        </form>
    </div>
  )
}

export default SendInput