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
        <div>
            <div>
                {cartState.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                cartState.itemsCounter > 0 &&
                <div>
                    <p><span>total items: </span>{cartState.itemsCounter}</p>
                    <p><span>total payments: </span>{cartState.totalPrice}</p>
                    <div>
                        <button onClick={() => dispatch(clear())}>clear</button>
                        <button onClick={() => dispatch(checkOut())}>check out</button>
                    </div>
                </div>
            }

            {
                cartState.checkOut &&
                <div>
                    <h3>checked out successfully</h3>
                    <Link to="/products">bye more</Link>
                </div>
            }

            {
                !cartState.checkOut && cartState.itemsCounter === 0 &&
                <div>
                    <h3>cleared successfully</h3>
                    <Link to="/products">go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;