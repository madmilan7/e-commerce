import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Helper
import { shorten, isInCart, quantityCount } from '../../helper/function';

// Actions
import { increase, addItem, removeItem, decrease } from '../../redux/cart/cartAction';

const Product = ({ productData }) => {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className='bg-white mt-4 w-60 h-96 shadow-xl'>
            <img src={productData.image} alt='product' className='w-fit h-52 object-contain mx-auto' />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    {quantityCount(state, productData.id) === 1 &&
                        <button onClick={() => dispatch(removeItem(productData))}>remove</button>
                    }
                    {quantityCount(state, productData.id) > 1 &&
                        <button onClick={() => dispatch(decrease(productData))}>-</button>
                    }
                    {quantityCount(state, productData.id) > 0 &&
                        <span>{quantityCount(state, productData.id)}</span>
                    }

                    {
                        isInCart(state, productData.id) ?
                            <button onClick={() => dispatch(increase(productData))}>+</button> :
                            <button onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;