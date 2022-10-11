import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({ productData }) => {
    return (
        <div className='flex justify-evenly mt-36'>
            <div className='text-slate-200 w-1/2'>
                <p className='text-xl'>{productData.description}</p>
                <Link to={`/products/${productData.id}`} className='bg-purple-400 px-14 py-3 bottom-32 absolute text-xl text-purple-900'>Details</Link>
            </div>

            <img
                src={productData.image}
                alt='slider'
                className='w-80 h-80 bg-red-200 border-8 border-purple-300'
            />
        </div>
    );
};

export default Slide;