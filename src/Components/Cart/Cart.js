import { faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, prd)=> total + prd.DiscountPrice,0)
    let shippingCost = 0;
    if(total >1580){
        shippingCost=0;
    }
    else if(total >0){
        shippingCost = 200;
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Order Items {cart.length}</p>
            <h4> Total item Price  {total}</h4>
            <p>Shipping cost {shippingCost} </p>
        </div>
    );
};

export default Cart;