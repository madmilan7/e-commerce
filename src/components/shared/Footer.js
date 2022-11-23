import React from 'react';

// Icons 
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';
import email from '../../assets/icons/email.png';

const Footer = () => {
    return (
        <div className='bg-purple-700 h-36 flex items-center justify-center gap-10'>
            <div className='w-14 md:w-20'>
                <img src={instagram} alt='instagram' />
            </div>
            <div className='w-14 md:w-20'>
                <img src={twitter} alt='twitter' />
            </div>
            <div className='w-14 md:w-20'>
                <img src={email} alt='email' />
            </div>
        </div>
    );
};

export default Footer;