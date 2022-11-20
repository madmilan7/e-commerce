import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({ productData }) => {
    return (
        <div className='flex flex-col justify-between items-center gap-4 
                         md:flex md:flex-row md:justify-evenly md:items-start mt-5 md:mt-36'>
            <div className='flex flex-col h-72 justify-between items-center md:items-start text-slate-200 md:w-1/2'>
                <p className='taxt-sm md:text-xl px-10 md:px-0'>{productData.description}</p>
                <Link to={`/products/${productData.id}`}
                    className='bg-purple-400 px-14 py-3 
                                 text-xl text-purple-900
                                w-fit'>
                    Details
                </Link>
            </div>

            <img
                src={productData.image}
                alt='slider'
                className='w-60 h-60 md:w-80 md:h-80 bg-red-200 border-8 border-purple-300'
            />
        </div>
    );
};

export default Slide;