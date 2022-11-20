import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

// function
import { isInCart, quantityCount } from '../../helper/function';

// Redux
import { addItem, increase, decrease, removeItem } from '../../redux/cart/cartAction';

// Icon 
import bin from '../../assets/icons/remove.svg';

const Popular = ({ productData }) => {

    const cartState = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className='flex flex-col grow-0 shrink-0 basis-72 bg-white mt-1 w-72 h-96 shadow-xl'>
            <img src={productData.image} alt='popular' className='w-fit h-52 object-contain mx-auto' />
            <h2 className='text-sm md:text-base h-11 overflow-hidden mb-4 px-4'>{productData.title}</h2>
            <p className='pl-4 text-purple-700'>{productData.price} $</p>
            <div className='flex justify-between items-center mt-8 px-4'>
                <div className='flex justify-center items-center gap-3'>
                    {quantityCount(cartState, productData.id) === 1 &&
                        <button className='bg-purple-700 w-8 h-8'
                            onClick={() => dispatch(removeItem(productData))}>
                            <img src={bin} alt='bin' className='w-7 m-auto' />
                        </button>
                    }
                    {quantityCount(cartState, productData.id) > 1 &&
                        <button className='text-white bg-purple-700 text-2xl w-8 h-8'
                            onClick={() => dispatch(decrease(productData))}>-
                        </button>
                    }
                    {isInCart(cartState, productData.id) ?
                        <button className='text-white bg-purple-700 text-2xl w-8 h-8'
                            onClick={() => dispatch(increase(productData))}>+
                        </button> :
                        <button className='scale-75 md:scale-100 text-white bg-purple-700 px-3 py-1'
                            onClick={() => dispatch(addItem(productData))}>Add to Cart
                        </button>
                    }
                </div>
                <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                </Stack>
            </div>
        </div>
    );
};

export default Popular;