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
        <div className='flex justify-center items-start py-32 bg-gray-50'>
            <div className='flex flex-col lg:flex-row bg-white w-3/4 py-12 shadow-xl'>
                <img src={image} alt="product" className='w-60 h-60 md:w-80 md:h-80 mx-auto lg:my-auto py-4 px-4' />
                <div className='flex flex-col justify-evenly px-4 md:px-16'>
                    <h3 className='text-md lg:text-lg text-purple-800 mb-7 lg:mb-0'>{title}</h3>
                    <p className='text-gray-500 text-sm h-20 
                                    overflow-y-scroll no-scrollbar
                                    mb-7 lg:mb-0'>
                        {description}
                    </p>
                    <p className='mb-7 lg:mb-0'>
                        <span className='text-md lg:text-lg'>Category: </span>
                        <span className='text-sm bg-purple-700 text-white px-3 py-2'>{category}</span>
                    </p>
                    <div className='flex justify-between items-center'>
                        <span className='text-md md:text-xl text-purple-700'>{price} $</span>
                        <Link to="/products"
                            className='bg-purple-700 w-32 text-center text-white scale-75 md:scale-100 px-3 py-2'>
                            back to shop
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;