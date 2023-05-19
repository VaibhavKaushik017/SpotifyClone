import React from 'react'
import { CiMenuKebab } from 'react-icons/ci'

const PBanner = () => {
  return (
    <div className='w-[95%] flex gap-6 container mx-auto bg-transparent py-4'>
        <div>
            <img src='Sidhu.jpg' className='h-52' />
        </div>
        <div className='flex flex-col justify-center text-white text-left'>
            <span className='text-sm font-semibold'>Public Playlist</span>
            <h1 className='text-7xl font-bold leading-snug'>Sidhu All Songs</h1>
            <p className='font-semibold text-sm text-gray-300 pb-4'>Sidhu Moose Wala All Songs</p>
            <p className='font-semibold flex pb-4 text-sm gap-8'>1584 <ul className='flex gap-8 list-disc'><li>2,728</li><li>108 songs</li></ul></p>
        </div>
    </div>
  )
}

export default PBanner