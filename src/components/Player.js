import React from 'react'
import { BiShuffle, BiSkipPrevious, BiSkipNext } from 'react-icons/bi'
import {AiFillPauseCircle} from 'react-icons/ai'
import { BsRepeat } from 'react-icons/bs'

const Player = () => {
  return (
    <>
    <div className='bg-gray-800 fixed w-full p-4'>
        <div className='flex justify-center gap-4 items-center'>
            <BiShuffle className='text-gray-300 text-xl' />
            <BiSkipPrevious className='text-gray-500 text-3xl' />
            <AiFillPauseCircle className='text-gray-500 text-3xl' />
            <BiSkipNext className='text-gray-500 text-3xl' />
            <BsRepeat className='text-gray-300 text-xl' />
        </div>
        <div className='flex justify-center text-gray-500 text-sm gap-4 items-center'>
            <span>0:00</span>
            <div className='h-1 bg-gray-500 w-1/3'></div>
            <span>0:00</span>
        </div>
    </div>
    </>
  )
}

export default Player