import React from 'react'
import OtherUser from './OtherUser'

const OtherUsers = () => {
  return (
    // <div className='overflow-auto flex-1'>
    <div className='h-full max-h-[500px] overflow-auto border border-gray-500 rounded-lg relative'>
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
    </div>
  )
}

export default OtherUsers