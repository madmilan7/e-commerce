import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import cart from '../assets/icons/cart.svg';
import login from '../assets/icons/login.svg';
import search from '../assets/icons/search.svg';

const Navbar = () => {
    return (
            <div className='h-24 mx-24 flex justify-between items-center mt-0 p-3'>
                <div className='flex items-center'>
                    <Link to="/"><h1 className='text-3xl p-3 font-bold text-purple-800'>moboland</h1></Link>
                    <img className='w-6 ml-4' src={search} alt="search" />
                </div>
                <ul className='flex gap-12 text-xl'>
                    <li className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>phone</li>
                    <li className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>phone</li>
                    <li className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>phone</li>
                    <li className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>phone</li>
                </ul>
                <div className='flex font-bold gap-6 mt-2 justify-center items-center'>
                    <img className='relative w-8' src={cart} alt="cart" />
                    <Link to="/signup"><img className='w-7' src={login} alt="login" /></Link>
                </div>
            </div>
    );
};

export default Navbar;