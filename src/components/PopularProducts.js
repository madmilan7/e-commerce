import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Popular from './shared/Popular';

const PopularProducts = () => {

    const productsState = useSelector(state => state.productsState.products);

    return (
        <div className='bg-gray-50 h-[36rem] max-w-[82rem] mx-auto'>
            <div className='flex justify-between items-center mx-14 xl:mx-0 pt-14'>
                <h2 className='text-xl'>Popular Products</h2>
                <p>see all</p>
            </div>
            {/* product */}
            <div className='no-scrollbar flex justify-between items-center gap-10 mx-14 xl:mx-0 mt-1 overflow-x-auto'>
                {
                    productsState.slice(10, 14).map(product =>
                        <Popular key={product.id} productData={product} />
                    )
                }
            </div>
        </div>
    );
};

export default PopularProducts;