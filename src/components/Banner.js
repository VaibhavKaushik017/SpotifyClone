import React from 'react'
import { CiMenuKebab } from 'react-icons/ci'

const Banner = () => {
  return (
    <div className='w-[95%] flex gap-6 container mx-auto bg-gradient-to-r from-black to-violet-950 p-4'>
        <div>
            <img src='BestIndianLofiHits.jpg' className='h-52' />
        </div>
        <div className='flex flex-col justify-center text-white text-left'>
            <span className='text-sm font-semibold'>PLAYLIST</span>
            <h1 className='text-6xl font-semibold leading-snug'>Best Indian Lofi Hits</h1>
            <p className='font-semibold pb-4'>Chill beats to relax and focus. Listen now!!!</p>
            <div className='flex gap-6 items-center'>
                <button className='bg-green-400 text-black font-semibold py-2 px-6 rounded-full'>Play</button>
                <button className='border-[1px] border-white text-white py-2 px-6 rounded-full font-semibold'>Follow</button>
                <CiMenuKebab className='text-3xl rotate-90 text-white hover:cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Banner