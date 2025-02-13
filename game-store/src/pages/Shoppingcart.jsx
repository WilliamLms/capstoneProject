import React, { useState } from 'react';

// Sample products to add to the cart
const products = [
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 0.75 },
  { id: 3, name: 'Orange', price: 1.2 },
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

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* List of Products */}
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <span>{product.name} - ${product.price}</span>
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
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;


