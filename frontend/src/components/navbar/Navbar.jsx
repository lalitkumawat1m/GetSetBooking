import React from 'react'
import { Link } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import { useContext } from 'react';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex justify-center h-12  bg-indigo-800">
            <div className="flex px-3 justify-between items-center max-w-[1024px] w-[100%] text-white">
                <Link to="/">
                    <span className='font-bold text-2xl'>GetSetBooking</span>
                </Link>
                {user!==null ? user.username :(<div className="navItems">
                    <button className='ml-[20px] px-[10px] py-[5px] cursor-pointer border-solid rounded-lg border-2 border-grey-100'>Register</button>
                    <Link to="/login">
                        <button className='ml-[20px] px-[10px] py-[5px] cursor-pointer border-solid rounded-lg border-2 border-gray-100'>Login</button>
                    </Link>
                </div>)}
            </div>
        </div>

    )
}

export default Navbar
