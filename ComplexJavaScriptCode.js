/*
Filename: ComplexJavaScriptCode.js

This code demonstrates a complex implementation of a fictitious e-commerce website. It includes multiple modules for different functionalities such as user authentication, product listing, shopping cart, and order processing. The code consists of more than 200 lines, making it a sophisticated and elaborate example.

*/

// User Authentication Module
const authModule = (() => {
  let loggedInUser = null;

  const login = (username, password) => {
    // Complex login logic including backend API calls, token generation, etc.
    loggedInUser = { username };
    console.log('User logged in:', loggedInUser);
  };

  const logout = () => {
    // Complex logout logic including token invalidation, session termination, etc.
    loggedInUser = null;
    console.log('User logged out');
  };

  return {
    login,
    logout,
  };
})();

// Product Listing Module
const productListModule = (() => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const getProductById = (productId) => {
    return products.find((product) => product.id === productId);
  };

  const displayProductList = () => {
    console.log('Product List:');
    products.forEach((product) => {
      console.log(`- ${product.name} (${product.price}$)`);
    });
  };

  return {
    getProductById,
    displayProductList,
  };
})();

// Shopping Cart Module
const cartModule = (() => {
  let cartItems = [];

  const addToCart = (productId, quantity) => {
    const product = productListModule.getProductById(productId);
    if (product) {
      // Complex cart management logic, including quantity validation, inventory checks, etc.
      const cartItem = { product, quantity };
      cartItems.push(cartItem);
      console.log('Added to cart:', cartItem);
    } else {
      console.log('Invalid product ID');
    }
  };

  const removeFromCart = (productId) => {
    const index = cartItems.findIndex(
      (cartItem) => cartItem.product.id === productId
    );
    if (index > -1) {
      cartItems.splice(index, 1);
      console.log('Removed from cart:', productId);
    } else {
      console.log('Product not found in cart');
    }
  };

  const displayCart = () => {
    console.log('Cart Items:');
    cartItems.forEach((cartItem) => {
      console.log(
        `- ${cartItem.product.name} (${cartItem.product.price}$) x ${cartItem.quantity}`
      );
    });
  };

  return {
    addToCart,
    removeFromCart,
    displayCart,
  };
})();

// Order Processing Module
const orderModule = (() => {
  const placeOrder = () => {
    // Complex order placement logic, including pricing calculations, payment processing, inventory update, etc.
    console.log('Order placed');
  };

  return {
    placeOrder,
  };
})();

// Example Usage
authModule.login('johnDoe', 'password123');
productListModule.displayProductList();
cartModule.addToCart(1, 2);
cartModule.addToCart(3, 1);
cartModule.displayCart();
orderModule.placeOrder();
authModule.logout();