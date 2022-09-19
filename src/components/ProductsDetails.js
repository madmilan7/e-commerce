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
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category: </span>{category}</p>
                <div>
                    <span>{price} $</span>
                    <Link to="/products">back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;