import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Icons
import cart from '../../assets/icons/cart.svg';
import login from '../../assets/icons/login.svg';
import search from '../../assets/icons/search.svg';

// Components
import Burger from './Burger';

const Navbar = () => {

    const counter = useSelector(state => state.cartState.itemsCounter);
    const [isOpen, setIsOpen] = useState(false);

    const fun = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='h-24 mx-6 lg:mx-24 flex justify-between items-center mt-0 p-3'>
            <div onClick={fun} className={`lg:hidden z-20 ${isOpen ? 'left-36 md:left-48 fixed' : 'left-6'}`}><Burger open={isOpen} /></div>
            <div className='flex justify-between items-center opacity-0 lg:opacity-100'>
                <Link to="/"><h1 className='text-3xl p-3 font-bold text-purple-800'>moboland</h1></Link>
                <img className='w-6 ml-4' src={search} alt="search" />
            </div>
            <ul className={`flex flex-col lg:flex-row gap-6 lg:gap-12 text-sm lg:text-xl
                            fixed lg:static z-10 lg:z-0 bg-white top-0 left-0 h-screen w-48 md:w-60
                            lg:h-auto lg:w-auto pt-7 pl-4 lg:p-0 text-purple-900 transition-all
                            ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <Link to="/products"><li onClick={fun} className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>Products</li></Link>
                <li onClick={fun} className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>About us</li>
                <li onClick={fun} className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>Support</li>
                <li onClick={fun} className='transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>Help</li>
                <Link to="/"><li onClick={fun} className='lg:hidden transition-all delay-100 cursor-pointer border-transparent border-b-4 border-solid hover:border-b-purple-800 p-1'>Home</li></Link>
            </ul>
            <div className='flex font-bold gap-6 mt-2 justify-between items-center'>
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