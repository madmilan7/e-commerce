import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { fetchProducts } from '../redux/products/productsAction';

// Components
import Product from './shared/Product';

const Store = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState);

    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts());
    }, [])

    return (
        <div className='bg-gray-50 pb-20'>
            <div className='flex justify-between items-center flex-wrap gap-x-10 mx-24 mt-1'>
                {
                    productsState.loading ?
                        <p>loading...</p> :
                        productsState.error ?
                            <p>somethin went wrong!</p> :
                            productsState.products.map(product =>
                                <Product key={product.id} productData={product} />
                            )
                }
            </div>
        </div>
    );
};

export default Store;