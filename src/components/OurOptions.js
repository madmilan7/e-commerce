import React from 'react';

// Icons
import delivery from '../assets/icons/delivered.png';
import support from '../assets/icons/24-hours-support.png';
import payment from '../assets/icons/credit-card.png';
import origianl from '../assets/icons/original.png';


const OurOptions = () => {
    return (
        <div className='flex justify-around items-center bg-gray-50 h-96'>
            <div className='flex flex-col gap-3 items-center'>
                <img src={origianl} alt="original" className="w-28 bg-purple-100 p-6 rounded-lg" />
                <p className='text-lg'>Authenticity of Products</p>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <img src={payment} alt="payment" className="w-28 bg-purple-100 p-6 rounded-lg" />
                <p className='text-lg'>Secure Payment</p>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <img src={support} alt="support" className="w-28 bg-purple-100 p-6 rounded-lg" />
                <p className='text-lg'>24 hours Support</p>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <img src={delivery} alt="delivery" className="w-28 bg-purple-100 p-6 rounded-lg" />
                <p className='text-lg'>Express Post</p>
            </div>
        </div>
    );
};

export default OurOptions;