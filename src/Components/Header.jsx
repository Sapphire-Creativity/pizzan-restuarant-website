import React from 'react'

const Header = ({ title, subTitle }) => {
    return (
        <div className='flex flex-col items-center justify-center py-4'>
            <h3 className='font-lobster text-primary text-xl font-bold'>{subTitle}</h3>
            <span className='w-16 h-[2px] rounded-full my-2 bg-primary'></span>
            <h2 className='font-black text-3xl text-gray-800'>{title}</h2>
        </div>
    )
}

export default Header