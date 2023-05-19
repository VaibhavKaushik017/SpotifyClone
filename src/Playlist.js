import React from 'react'
import Banner from './components/Banner'
import Morning from './components/Morning'
import Player from './components/Player'
import Exclusive from './components/Exclusive'
import Nav from './components/Nav'
import Menu from './components/Menu'
import PBanner from './components/PBanner'
import PSongs from './components/PSongs'

const Playlist = () => {
  return (
    <>
            <div className='flex flex-col'>
                <div className='flex'>
                    <div className='w-1/4 bg-black text-white'>
                        <Menu />
                    </div>
                    <div className='w-full bg-gray-950 py-5'>
                        <div className='bg-gradient-to-t from-gray-950 to-orange-400 m-2 rounded-md'>
                            <Nav />
                            <PBanner />
                        </div>
                        <PSongs />
                    </div>
                </div>

            </div>
        </>
  )
}

export default Playlist