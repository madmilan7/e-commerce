import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MainSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                className='h-96 flex bg-purple-800 mt-1'
            >
                <SwiperSlide>
                    <div className='flex justify-evenly items-center'>
                        <div className='text-slate-200'>
                            <p className='text-7xl'>desc 1.</p>
                            <button className='bg-purple-400 px-14 py-3 mt-10 rounded-sm text-xl text-purple-900'>Details</button>
                        </div>

                        <img
                            src='img'
                            alt='slider'
                            className='w-72 h-72 bg-red-200 mt-12 border-8 border-purple-300'
                        />
                    </div>
                </SwiperSlide>;
                <SwiperSlide>
                    <div className='flex justify-evenly items-center'>
                        <div className='text-slate-200'>
                            <p className='text-7xl'>desc 2</p>
                            <button className='bg-purple-400 px-14 py-3 mt-10 rounded-sm text-xl text-purple-900'>Details</button>
                        </div>

                        <img
                            src='img'
                            alt='slider'
                            className='w-72 h-72 bg-red-200 mt-12 border-8 border-purple-300'
                        />
                    </div>
                </SwiperSlide>;
                <SwiperSlide>
                    <div className='flex justify-evenly items-center'>
                        <div className='text-slate-200'>
                            <p className='text-7xl'>desc 3</p>
                            <button className='bg-purple-400 px-14 py-3 mt-10 rounded-sm text-xl text-purple-900'>Details</button>
                        </div>

                        <img
                            src='img'
                            alt='slider'
                            className='w-72 h-72 bg-red-200 mt-12 border-8 border-purple-300'
                        />
                    </div>
                </SwiperSlide>;
            </Swiper>
        </div>
    );
};

export default MainSlider;