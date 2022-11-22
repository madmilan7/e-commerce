import React from 'react';
import { useSelector } from 'react-redux';

// Components
import MainJewel from './shared/MainJewel';
import Jewels from './shared/Jewels';

const Jewellery = () => {

    const productsState = useSelector(state => state.productsState.products);

    return (
        <div className='bg-gray-50 max-w-[82rem] mx-auto'>
            <div className='flex justify-between items-center mx-14 xl:mx-0 pt-14'>
                <h2 className='text-xl'>Jewellery Products</h2>
                <p>see all</p>
            </div>
            {/* jewellery products */}
            <div className='grid grid-cols-1 md:grid-cols-2 
                            grid-rows-3 md:grid-rows-2 mt-1 
                            mx-14 xl:mx-0 h-fit md:h-[36rem] '>
                {
                    productsState.slice(4, 5).map(product =>
                        <div key={product.id} className='row-span-3 md:row-span-2'><MainJewel productData={product} /></div>
                    )
                }
                {
                    productsState.slice(5, 7).map(product =>
                        <div key={product.id}><Jewels productData={product} /></div>
                    )
                }
            </div>
        </div>
    );
};

export default Jewellery;