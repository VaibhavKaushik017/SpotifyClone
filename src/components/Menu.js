import React from 'react'
import { AiFillHome, AiOutlinePlus, AiOutlineArrowRight, AiFillHeart } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { BiLibrary } from 'react-icons/bi'
import { CiMenuKebab, CiSearch } from 'react-icons/ci'

const Menu = () => {
    return (
        <div>
            <ul className='flex flex-col gap-3 fixed p-5'>
                <li><CiMenuKebab className='text-3xl rotate-90 hover:cursor-pointer' /></li>
                <li className='flex items-center gap-3 hover:cursor-pointer'><AiFillHome className='text-xl' /> Home</li>
                <li className='flex items-center gap-3 hover:cursor-pointer'><BsSearch className='text-xl' /> Search</li>
                <div className='flex items-center gap-10 py-4'>
                    <li className='flex items-center gap-3 hover:cursor-pointer'><BiLibrary className='text-xl' /> Your Library</li>
                    <div className='flex gap-5 items-center text-xl'>
                        <AiOutlinePlus />
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <div className='flex gap-3'>
                    <p className='py-2 px-4 rounded-full bg-gray-900 text-sm'>Playlists</p>
                    <p className='py-2 px-4 rounded-full bg-gray-900 text-sm'>Albums</p>
                </div>
                <div className='flex justify-between'>
                    <CiSearch className='text-xl' />
                    <span className='text-sm'>Recent</span>
                </div>
                <div className='flex hover:cursor-pointer gap-4 w-[100%] h-12 items-center rounded-sm'>
                    <div className='flex w-12 bg-gradient-to-tl from-white to-blue-950 h-full justify-center items-center rounded-md text-xl'>
                        <AiFillHeart />
                    </div>
                    <div>
                        <h2 className='font-semibold'>Liked Songs</h2>
                        <ul className='text-sm flex list-disc gap-6 text-gray-300'>
                            <p>Playlist</p>
                            <li><p>41 Songs</p></li>
                        </ul>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Menu