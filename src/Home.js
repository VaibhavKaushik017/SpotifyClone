import React from 'react'
import Banner from './components/Banner'
import Morning from './components/Morning'
import Player from './components/Player'
import Exclusive from './components/Exclusive'
import Nav from './components/Nav'
import Menu from './components/Menu'

const Home = () => {
    return (
        <>
            <div className='flex flex-col-reverse'>
                <div className='flex'>
                    <div className='w-1/4 bg-black text-white'>
                        <Menu />
                    </div>
                    <div className='w-full bg-gray-950'>
                        <div className='bg-gradient-to-t from-gray-950 to-violet-950'>
                            <Nav />
                            <Banner />
                        </div>
                        <Morning />
                        <Exclusive />
                    </div>
                </div>
                <Player />
            </div>
        </>
    )
}

export default Home