import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Helper
import { shorten, isInCart, quantityCount } from '../../helper/function';

// Actions
import { increase, addItem, removeItem, decrease } from '../../redux/cart/cartAction';

// Icon 
import bin from '../../assets/icons/remove.svg';

const Product = ({ productData }) => {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className='bg-white mt-1 sm:mt-6 w-72 mx-auto h-96 shadow-xl scale-75 sm:scale-100'>
            <img src={productData.image} alt='product' className='w-fit h-52 object-contain mx-auto' />
            <h3 className='m-4'>{shorten(productData.title)}</h3>
            <p className='pl-4 text-purple-700'>{productData.price} $</p>
            <div className='flex justify-between items-center mt-8 px-4'>
                <Link to={`/products/${productData.id}`} className='text-purple-800'>Details</Link>
                <div className='flex justify-center items-center gap-3'>
                    {quantityCount(state, productData.id) === 1 &&
                        <button
                            className='bg-purple-700 w-8 h-8'
                            onClick={() => dispatch(removeItem(productData))}>
                            <img src={bin} alt='bin' className='w-7 m-auto' />
                        </button>
                    }
                    {quantityCount(state, productData.id) > 1 &&
                        <button
                            className='text-white bg-purple-700 text-2xl w-8 h-8'
                            onClick={() => dispatch(decrease(productData))}>-
                        </button>
                    }
                    {quantityCount(state, productData.id) > 0 &&
                        <span className='text-purple-900'>{quantityCount(state, productData.id)}</span>
                    }

                    {
                        isInCart(state, productData.id) ?
                            <button
                                className='text-white bg-purple-700 text-2xl w-8 h-8'
                                onClick={() => dispatch(increase(productData))}>+</button> :
                            <button
                                className='text-white bg-purple-700 px-3 py-1'
                                onClick={() => dispatch(addItem(productData))}>Add to Cart
                            </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;