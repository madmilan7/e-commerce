import React from 'react';

// Components
import MainSlider from '../components/MainSlider';
import PopularProducts from '../components/PopularProducts';
import Jewellery from '../components/Jewellery';
import OurOptions from '../components/OurOptions';

const Main = () => {
    return (
        <div className='bg-gray-50'>
           <MainSlider /> 
           <PopularProducts />
           <Jewellery />
           <OurOptions />
        </div>
    );
};

export default Main;