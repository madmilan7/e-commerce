import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

// function
import { isInCart, quantityCount } from '../../helper/function';

// Redux
import { addItem, increase, decrease, removeItem } from '../../redux/cart/cartAction';

// Icons
import bin from '../../assets/icons/remove.svg';

const MainJewel = ({ productData }) => {

    const cartState = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className='bg-white mt-4 w-10/12 h-100 shadow-xl ml-24 flex flex-col justify-between'>
            <img src={productData.image} alt='jewel' className='w-52 object-contain mx-auto' />
            <h3 className='px-4'>{productData.title}</h3>
            <p className='px-4 text-purple-700 text-xl'>{productData.price} $</p>
            <div className='flex justify-between items-center mb-4 px-4'>
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
                        <button className='text-white bg-purple-700 px-3 py-1'
                            onClick={() => dispatch(addItem(productData))}>Add to Cart
                        </button>
                    }
                </div>
                <Stack spacing={1} className=''>
                    <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                </Stack>
            </div>
        </div>
    );
};

export default MainJewel;