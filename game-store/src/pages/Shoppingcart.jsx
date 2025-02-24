import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { gamesData } from "./Gamecatalog";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  // State to manage the cart items
  const [cart, setCart] = useState([]);

  // Add item to the cart
  const addItemToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove item from the cart by its id
  const removeItemFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    alert("Item removed!")
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
  const navigate = useNavigate();
  
  // const successful = () => {
  // alert("Purchase successful")
  //};
  
  // checkout items in the cart
  const Checkout = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId), navigate('/Checkout'));
    //alert("GG! Your purchase was Successful, thank you for shopping at Game View! :) Your order number is: 8675309")
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* List of Products */}
      <div>
        <h2>Products on sale!</h2>
        <ul>
          {gamesData.map((product) => (
            <li key={product.id}>
              <span>
                {product.title}, {product.image} , {product.genre}- ${product.price} info: {product.description}
              </span>
              <button onClick={() => addItemToCart(product)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart */}
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index}>
                <span>
                  {item.title}  - ${item.price}
                </span>
                <button onClick={() => removeItemFromCart(item.id)}>Remove</button> <button onClick={() => Checkout(item.id)}>checkout</button>
              </li>
            ))
          ) : (
            <p>Your cart is empty :'(</p>
          )}
        </ul>
      </div>

      <h3>Total: ${calculateTotal()}</h3>
    </div>
    
  );
};

export default ShoppingCart;



