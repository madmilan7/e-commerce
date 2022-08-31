import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import cart from '../assets/icons/cart.svg';
import login from '../assets/icons/login.svg';
import search from '../assets/icons/search.svg';

const Navbar = () => {
    return (
        <div className='h-32'>
            <div className='mx-24 flex items-center'>
                <Link to="/"><h1 className='text-2xl p-3 font-bold text-purple-800'>moboland</h1></Link>
                <img className='w-5 ml-4' src={search} alt="search" />
            </div>
            <div className='mx-24 flex justify-between items-baseline mt-0 p-3'>
                <ul className='flex gap-12 '>
                    <li>phone</li>
                    <li>phone</li>
                    <li>phone</li>
                    <li>phone</li>
                </ul>
                <div className='flex font-bold gap-6 mt-2 justify-center items-center'>
                    <img className='relative w-6' src={cart} alt="cart" />
                    <Link to="/signup"><img className='w-6' src={login} alt="login" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;