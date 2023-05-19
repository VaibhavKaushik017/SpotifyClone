import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import Play from './Play'
import { NavLink } from 'react-router-dom'

const Morning = () => {
    return (
        <div className='text-white w-[95%] container mx-auto text-left'>
            <h1 className='text-3xl font-semibold py-6'>Good morning</h1>
            <div className='flex flex-wrap justify-between gap-5'>
                <div className='flex bg-gray-800 hover:cursor-pointer gap-4 w-[32%] h-20 items-center rounded-sm'>
                    <div className='flex w-1/3 bg-gradient-to-tl from-white to-blue-950 h-full justify-center items-center text-3xl'>
                        <AiFillHeart />
                    </div>
                    <div className='w-1/2'>
                        <h2 className='font-semibold'>Liked Songs</h2>
                    </div>
                    <div className='px-4'>
                        <Play />
                    </div>
                </div>
                <div className='flex bg-gray-800 hover:cursor-pointer w-[32%] gap-4 h-20 items-center rounded-sm'>
                    <div className='w-1/3'>
                        <img src='hindimelodies.jpg' />
                    </div>
                    <div className='w-full'>
                        <h2 className='font-semibold'>Sad Hindi Melodies</h2>
                    </div>
                </div>
                <NavLink to='/playlist' className='flex bg-gray-800 hover:cursor-pointer w-[32%] gap-4 h-20 items-center rounded-sm'>
                    <div className='w-1/3'>
                        <img src='Sidhu.jpg' />
                    </div>
                    <div className='w-full'>
                        <h2 className='font-semibold'>Sidhu Moose Wala</h2>
                    </div>
                </NavLink>
                <div className='flex bg-gray-800 hover:cursor-pointer w-[32%] gap-4 h-20 items-center rounded-sm'>
                    <div className='w-1/3 bg-white'>
                        <img src='josh.png' />
                    </div>
                    <div className='w-full'>
                        <h2 className='font-semibold'>Josh Talks Podcast</h2>
                    </div>
                </div>
                <div className='flex bg-gray-800 hover:cursor-pointer w-[32%] gap-4 h-20 items-center rounded-sm'>
                    <div className='w-1/3'>
                        <img src='levels.jpg' />
                    </div>
                    <div className='w-full'>
                        <h2 className='font-semibold'>Levels Song</h2>
                    </div>
                </div>
                <div className='flex bg-gray-800 hover:cursor-pointer w-[32%] gap-4 h-20 items-center rounded-sm'>
                    <div className='w-1/3'>
                        <img src='Moosetape.jpg' />
                    </div>
                    <div className='w-full'>
                        <h2 className='font-semibold'>Moosetape</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Morning