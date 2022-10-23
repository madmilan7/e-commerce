import React from 'react';

// Components
import MainSlider from '../components/MainSlider';
import PopularProducts from '../components/PopularProducts';
import Jewellery from '../components/Jewellery';

const Main = () => {
    return (
        <div>
           <MainSlider /> 
           <PopularProducts />
           <Jewellery />
        </div>
    );
};

export default Main;