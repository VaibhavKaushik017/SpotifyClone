import React from 'react'

const Exclusive = () => {
  return (
    <>
    <div className='text-white text-left w-[95%] container mx-auto mb-6'>
        <h2 className='text-3xl font-semibold py-6'>Spotify original & exclusive shows</h2>
        <div className='flex gap-6'>
            <div className='p-4 bg-gray-900 hover:cursor-pointer rounded-lg'>
                <img src='Sidhu.jpg' className='h-40 rounded-md' />
                <h2 className='pt-3 font-semibold text-lg'>Sidhu Moose Wala</h2>
                <p className='text-sm text-gray-400'>Spotify Studios</p>
            </div>
            <div className='p-4 bg-gray-900 hover:cursor-pointer rounded-lg'>
                <img src='Levels.jpg' className='h-40 rounded-md' />
                <h2 className='pt-3 font-semibold text-lg'>Levels Song</h2>
                <p className='text-sm text-gray-400'>Sidhu Moose Wala</p>
            </div>
            <div className='p-4 bg-gray-900 hover:cursor-pointer rounded-lg'>
                <img src='Moosetape.jpg' className='h-40 rounded-md' />
                <h2 className='pt-3 font-semibold text-lg'>Moosetape</h2>
                <p className='text-sm text-gray-400'>Sidhu Moose Wala</p>
            </div>
            <div className='p-4 bg-gray-900 hover:cursor-pointer rounded-lg'>
                <img src='hindimelodies.jpg' className='h-40 rounded-md' />
                <h2 className='pt-3 font-semibold text-lg'>Sad Hindi Melodies</h2>
                <p className='text-sm text-gray-400'>Spotify Studios</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Exclusive