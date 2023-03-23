import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-center h-12  bg-indigo-800">
            <div className="flex px-3 justify-between items-center max-w-[1024px] w-[100%] text-white">
                <span className='font-bold text-2xl'>GetSetBooking</span>
                <div className="navItems">
                    <button className='ml-[20px] px-[10px] py-[5px] cursor-pointer border-solid rounded-lg border-2 border-grey-100'>Register</button>
                    <button className='ml-[20px] px-[10px] py-[5px] cursor-pointer border-solid rounded-lg border-2 border-gray-100'>Login</button>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar
