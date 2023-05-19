import React from 'react'
import { FiClock } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineDownloadForOffline } from 'react-icons/md'
import { CiSearch, CiMenuKebab } from 'react-icons/ci'
import {BsFillPlayFill} from 'react-icons/bs'
import Data from '../Data'

const PSongs = () => {
    return (
        <>
            <div className='text-white w-[95%] container mx-auto'>
                <div className='flex justify-between py-6'>
                    <div className='flex items-center text-4xl gap-6'>
                        <div className='flex rounded-full bg-green-400 text-black p-3 justify-center items-center text-3xl cursor-pointer'>
                            <BsFillPlayFill />
                        </div>
                        <AiOutlineHeart className='cursor-pointer' />
                        <MdOutlineDownloadForOffline className='cursor-pointer' />
                        <CiMenuKebab className='text-3xl rotate-90 text-white hover:cursor-pointer' />
                    </div>
                    <div className='flex gap-6 items-center'>
                        <CiSearch className='text-2xl cursor-pointer' />
                        <p className='text-sm cursor-pointer'>Custom Order</p>
                    </div>
                </div>
                <table className='w-[100%] text-left table-auto'>
                    <thead>
                        <tr>
                            <th className='py-3'>#</th>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Date Added</th>
                            <th><FiClock /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Data.map((data) => {
                                return (
                                    <tr className='cursor-pointer'>
                                        <td className='py-4'>{data.Id}</td>
                                        <td>
                                            <div className='flex gap-2'>
                                                <img src={data.Image} className='h-10 w-10' />
                                                <div className='flex flex-col'>
                                                    <span>{data.Name}</span>
                                                    <span className='text-sm'>{data.Category}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{data.Album}</td>
                                        <td>{data.Date}</td>
                                        <td>{data.Time}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PSongs