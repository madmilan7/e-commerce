import React from 'react';

// Icons
import delivery from '../assets/icons/delivered.png';
import support from '../assets/icons/24-hours-support.png';
import payment from '../assets/icons/credit-card.png';
import origianl from '../assets/icons/original.png';


const OurOptions = () => {
    return (
        <div className='flex flex-wrap justify-around items-baseline
                        md:max-w-[82rem] h-fit md:h-80 mt-28 mx-24 md:mx-auto pb-14'>
            <div className='flex flex-col gap-3 items-center w-32 mx-5'>
                <img src={origianl} alt="original" className="w-28 bg-purple-100 p-6 rounded-lg" />
                <p className='text-lg text-center mb-7'>Authenticity of Products</p>
            </div>
            <div className='flex flex-col gap-3 items-center mx-5'>
                <img src={payment} alt="payment" className="w-28 bg-purple-100 p-6 rounded-lg" />
                <p className='text-lg text-center mb-7'>Secure Payment</p>
            </div>
            <div className='flex flex-col gap-3 items-center mx-5'>
                <img src={support} alt="support" className="w-28 bg-purple-100 p-6 rounded-lg" />
                <p className='text-lg text-center mb-7'>24 hours Support</p>
            </div>
            <div className='flex flex-col gap-3 items-center mx-5'>
                <img src={delivery} alt="delivery" className="w-28 bg-purple-100 p-6 rounded-lg" />
                <p className='text-lg text-center mb-7'>Express Post</p>
            </div>
        </div>
    );
};

export default OurOptions;