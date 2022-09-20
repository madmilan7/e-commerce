import React from 'react';
import { useDispatch } from 'react-redux';

// function
import { shorten } from '../../helper/function';

// Actions
import { increase, decrease, removeItem } from '../../redux/cart/cartAction';

const Cart = ({ data }) => {

    const { image, title, price, quantity } = data;
    const dispatch = useDispatch();

    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                        <button onClick={() => dispatch(decrease(data))}>-</button> :
                        <button onClick={() => dispatch(removeItem(data))}>remove</button>
                }
                <button onClick={() => dispatch(increase(data))}>+</button>
            </div>
        </div>
    );
};

export default Cart;