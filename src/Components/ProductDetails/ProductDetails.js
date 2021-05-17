import React from 'react';
import './ProductDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = (props) => {
    const {img, name,code,RegularPrice,DiscountPrice,ProductSold,ProductInStock}= props.myItem;
    return (
        <div className="product-details">
            <div className="img-part">
                <img src={img} alt="" />
            </div>
            <div className="name-part">
            <h4>{name}</h4>
            <h3>Regular-Price: {RegularPrice}</h3>
            <h4>DisCount-Price: {DiscountPrice}</h4>
            <h5>Product-sold : {ProductSold}</h5>
            <h6>Product in stock {ProductInStock}</h6>
            <button className="add-ToCart" onClick={()=>props.handleAddProduct(props.myItem)}> <FontAwesomeIcon icon={faShoppingCart} className="icon" />Add to Cart</button>
            </div>
            
        </div>
    );
};

export default ProductDetails;