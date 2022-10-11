import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// Redux
import { fetchProducts } from '../redux/products/productsAction';

// Components
import Slide from './shared/Slide';

const MainSlider = () => {

    const productsState = useSelector(state => state.productsState.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!productsState.length) dispatch(fetchProducts());
    }, [dispatch, productsState]);

    return (
        <div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                loop={true}
                className='h-[36rem] flex bg-purple-800 mt-1'
            >
                {
                    productsState.filter((product, idx) => idx < 3).map((product) => (
                        <SwiperSlide key={product.id}>
                            <Slide productData={product} />
                        </SwiperSlide>
                    )
                    )
                }
            </Swiper>
        </div>
    );
};

export default MainSlider;