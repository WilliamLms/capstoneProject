import React, { useState } from 'react';
import { useParams } from "react-router-dom";



// products
const products = [
  { id: 1, name: 'game 1 fantasy' , developer: 'placename', price: 40 },
  { id: 2, name: 'game 2 open world', developer: 'placename', price: 75 },
  { id: 3, name: 'game 3 flash rpg', developer: 'placename', price: 12 },
  { id: 4, name: 'game 4 free to play ', developer: 'placename', price: 0 },
];



const ShoppingCart = () => {
  // State to manage the cart items
  const [cart, setCart] = useState([]);

  // Add item to the cart
  const addItemToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove item from the cart by its id
  const removeItemFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // checkout items in the cart
 // const successful = () => {
   // alert("Purchase successful")
  //};

  const Checkout = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    alert("GG! Your purchase was Successful, thank you for shopping at Game View! :)")
  };
  

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* List of Products */}
      <div>
        <h2>Products on sale!</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <span>{product.name} by {product.developer}- ${product.price}</span>
              <button onClick={() => addItemToCart(product)}>Add to Cart</button>
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
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
              </li>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </ul>
      </div>

      {/* checkout */}
      <div>
        <h2>checkout</h2>
        <ul>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index}>
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => Checkout(item.id)}>checkout</button>
              </li>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </ul>
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;




