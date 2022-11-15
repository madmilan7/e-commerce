import React from 'react';
import { useDispatch } from 'react-redux';

// function
import { shorten } from '../../helper/function';

// Actions
import { increase, decrease, removeItem } from '../../redux/cart/cartAction';

// Icons
import bin from '../../assets/icons/remove.svg';

const Cart = ({ data }) => {

    const { image, title, price, quantity } = data;
    const dispatch = useDispatch();

    return (
        <div className='flex justify-around items-center bg-white h-28 ml-20 shadow-xl mb-10'>
            <img src={image} alt="product" className='w-24 h-24' />
            <div>
                <h3 className='text-xl text-gray-500'>{shorten(title)}</h3>
                <p className='text-purple-700'>{price} $</p>
            </div>
            <div>
                <span className='text-xl text-purple-600'>{quantity}</span>
            </div>
            <div className='flex justify-center items-center gap-3'>
                {
                    quantity > 1 ?
                        <button
                            className='bg-purple-700 w-8 h-8 text-2xl text-white'
                            onClick={() => dispatch(decrease(data))}>-</button> :
                        <button
                            className='bg-purple-700 w-8 h-8'
                            onClick={() => dispatch(removeItem(data))}>
                            <img src={bin} alt="remove" className='w-7 m-auto' />
                        </button>
                }
                <button
                    className='bg-purple-700 w-8 h-8 text-2xl text-white'
                    onClick={() => dispatch(increase(data))}>+</button>
            </div>
        </div>
    );
};

export default Cart;