import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Icons
import cart from '../../assets/icons/cart.svg';
import login from '../../assets/icons/login.svg';
import search from '../../assets/icons/search.svg';

const Navbar = () => {

    const counter = useSelector(state => state.cartState.itemsCounter);

    return (
        <div className='h-24 mx-24 flex justify-between items-center mt-0 p-3'>
            <div className='lg:hidden'>burger</div>
            <div className='hidden lg:flex items-center'>
                <Link to="/"><h1 className='text-3xl p-3 font-bold text-purple-800'>moboland</h1></Link>
                <img className='w-6 ml-4' src={search} alt="search" />
            </div>
            <ul className='hidden lg:flex gap-12 text-xl'>
                <Link to="/products"><li className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>Products</li></Link>
                <li className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>About us</li>
                <li className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>Support</li>
                <li className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>Help</li>
            </ul>
            <div className='flex font-bold gap-6 mt-2 justify-center items-center'>
                <div className='relative'>
                    <Link to="/cart"><img className='w-8' src={cart} alt="cart" /></Link>
                    <span className='absolute bottom-7 right-3 bg-purple-700 text-white rounded-full h-5 w-5 text-center text-sm'>{counter}</span>
                </div>
                <Link to="/signup"><img className='w-7' src={login} alt="login" /></Link>
            </div>
        </div>
    );
};

export default Navbar;