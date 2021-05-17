import React, { useState } from 'react';
import './Product.css';
import data from '../../fakeData/fakeData.json';
import ProductDetails from '../ProductDetails/ProductDetails';
import Cart from '../Cart/Cart';

const Product = () => {
  const myData = data.slice(0,8);
  
  const [items, setItem] = useState(myData);
  const [cart, setCart] = useState([]);
  
//   console.log(items);
  const  handleAddProduct = (myItem)=>{
    //   console.log("add item ",myItem);
      const newCart = [...cart, myItem];
  setCart(newCart);

  }
  

    return (
        <div>
             <div className="main-div">
                   <div className="side-menu"> 
                       <ul className="side-bar">
                        <li><a href="/eid-fast">Shajao Eid Fest</a></li>
                        <li> <a href="/wall-clock">Wall Clock</a></li>
                        <li><a href="/canvas">Exclusive Wooden Canvas</a></li>
                        <li><a href="/frame">Glass Frame</a></li>
                        <li><a href="/mirror">Exclusive Mirror</a></li>
                        <li><a href="/islamic-calligraphy">Islamic Calligraphy</a></li>
                        <li><a href="/top-10-best-selling">Top 10 Best Selling</a></li>
                        <li><a href="/limited-collection">Limited Collection</a></li>
                        <li> <a href="/home-decor"> Home Decor Items</a></li>
                        <li><a href="/real-painting">Real Painting by Artist</a></li>
                        <li><a href="/exclusive-service">Exclusive Service</a></li>
                    </ul></div>
                   <div className="product-part">

                    {
                    items.map(item => <ProductDetails 
                        myItem={item}
                        handleAddProduct={handleAddProduct}
                    
                    ></ProductDetails>)
                    }
                   </div>
                   <div className="cart-part">
                       
                       <Cart cart={cart}></Cart>
                   </div>
                </div>
        </div>
    );
};

export default Product;