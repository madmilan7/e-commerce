import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductsDetails = () => {

    const params = useParams();
    const id = params.id;
    const data = useSelector(state => state.productsState.products);
    const product = data[id - 1];
    const { image, title, description, price, category } = product;

    return (
        <div className='flex justify-center items-start pt-32 bg-gray-50 h-screen'>
            <div className='flex bg-white w-3/4 h-96 shadow-xl'>
                <img src={image} alt="product" className='w-80 h-80 my-auto px-4' />
                <div className='flex flex-col justify-evenly px-16'>
                    <h3 className='text-xl text-purple-800'>{title}</h3>
                    <p className='text-gray-500'>{description}</p>
                    <p><span className='text-lg'>Category: </span>
                        <span className='bg-purple-700 text-white px-3 py-2'>{category}</span>
                    </p>
                    <div className='flex justify-between'>
                        <span className='text-xl text-purple-700'>{price} $</span>
                        <Link to="/products"
                            className='bg-purple-700 text-white px-3 py-2'>back to shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;