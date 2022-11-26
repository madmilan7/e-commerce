import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Cart from './shared/Cart';

// Actions
import { checkOut, clear } from '../redux/cart/cartAction';

const ShopCart = () => {

    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cartState);

    return (
        <div className='bg-gray-50 h-full pb-36 flex flex-col-reverse lg:flex-row
                        justify-between items-center lg:items-start px-20 lg:px-0'>
            <div className='pt-10 w-full lg:w-3/5'>
                {cartState.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                cartState.itemsCounter > 0 &&
                <div className='w-full md:w-1/2 lg:w-1/4 bg-white h-full md:h-52 mt-10 lg:mr-20 shadow-xl
                                p-2 sm:p-8 flex flex-col gap-3'>
                    <p><span className='text-sm sm:text-lg text-gray-500 mr-2'>total items: </span>
                        <span className='text-purple-800'>{cartState.itemsCounter}</span>
                    </p>
                    <p><span className='text-sm sm:text-lg text-gray-500 mr-2'>total payments: </span>
                        <span className='text-purple-800'>{cartState.totalPrice} $</span>
                    </p>
                    <div className='flex  justify-between items-center mt-6'>
                        <button
                            className='bg-red-500 text-white px-3 py-1'
                            onClick={() => dispatch(clear())}>clear</button>
                        <button
                            className='bg-green-500 text-white px-3 py-1'
                            onClick={() => dispatch(checkOut())}>check out</button>
                    </div>
                </div>
            }

            {
                cartState.checkOut &&
                <div className='bg-white w-64 h-40 mt-10 shadow-xl lg:mr-20 p-8 flex flex-col justify-evenly'>
                    <h3 className='text-gray-500'>checked out successfully</h3>
                    <Link to="/products" className='bg-purple-700 px-3 py-2 text-white text-center'>bye more</Link>
                </div>
            }

            {
                !cartState.checkOut && cartState.itemsCounter === 0 &&
                <div className='bg-white w-64 h-40 mt-10 shadow-xl lg:mr-20 p-8 flex flex-col justify-evenly'>
                    <h3 className='text-gray-500'>cleared successfully</h3>
                    <Link to="/products" className='bg-purple-700 px-3 py-2 text-white text-center'>go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;