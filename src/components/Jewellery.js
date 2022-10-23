import React from 'react';
import { useSelector } from 'react-redux';

// Components
import MainJewel from './shared/MainJewel';
import Jewels from './shared/Jewels';

const Jewellery = () => {

    const productsState = useSelector(state => state.productsState.products);

    return (
        <div className='bg-gray-50'>
            <div className='flex justify-between items-center mx-24 pt-14'>
                <h2 className='text-xl'>Jewellery Products</h2>
                <p>see all</p>
            </div>
            {/* jewellery products */}
            <div className='grid grid-cols-2 grid-rows-2 mt-1 h-[36rem]'>
                {
                    productsState.slice(4, 5).map(product =>
                        <div key={product.id} className='row-span-2'><MainJewel productData={product} /></div>
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