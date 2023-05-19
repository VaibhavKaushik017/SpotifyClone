import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineRight } from 'react-icons/ai'

const Nav = () => {
    return (
        <>
            <div className='flex w-[95%] container mx-auto text-white gap-4 py-5'>
                <div className='p-2 bg-black rounded-full hover:cursor-pointer text-xl'>
                    <IoIosArrowBack />
                </div>
                <div className='p-2 bg-black rounded-full hover:cursor-pointer text-xl'>
                    <AiOutlineRight />
                </div>
                <div>
                    <button className='border-[1px] py-1 px-3 rounded-full'>Upgrade</button>
                </div>
            </div>
        </>
    )
}

export default Nav