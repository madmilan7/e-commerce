import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

// function
import { isInCart, quantityCount } from '../../helper/function';

// Redux 
import { addItem, increase, decrease, removeItem } from '../../redux/cart/cartAction';

// Icons
import bin from '../../assets/icons/remove.svg';

const Jewels = ({ productData }) => {

    const cartState = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className='bg-white mt-4 w-10/12 h-56 shadow-xl relative ml-8'>
            <img src={productData.image} alt='jewel' className='w-36 mx-auto' />
            <div className='absolute bottom-14 px-4'>
                <h3>{productData.title}</h3>
                <p className='mt-5 text-purple-700 text-xl'>{productData.price} $</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center absolute bottom-4 px-4 gap-3'>
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
                        <button className='text-white bg-purple-700 px-3 py-1'
                            onClick={() => dispatch(addItem(productData))}>Add to Cart
                        </button>
                    }
                </div>
                <Stack spacing={1} className='absolute right-4 bottom-4'>
                    <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                </Stack>
            </div>
        </div>
    );
};

export default Jewels;