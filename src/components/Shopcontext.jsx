/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import  { createContext, useState } from "react";
import { PRODUCTS, PRODUCTS1 } from "../components/products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};

  for (const product of PRODUCTS.concat(PRODUCTS1)) {
    cart[product.id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const productId in cartItems) {
      const itemQuantity = cartItems[productId];
      if (itemQuantity > 0) {
        const itemInfo =
          PRODUCTS.find((product) => product.id === Number(productId)) ||
          PRODUCTS1.find((product) => product.id === Number(productId));
        totalAmount += itemQuantity * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const getTotalCartProducts = () => {
    let totalProducts = 0;
    for (const productId in cartItems) {
      if (cartItems[productId] > 0) {
        totalProducts += cartItems[productId];
      }
    }
    return totalProducts;
  };

  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1,
    }));
  };

  const removeCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] - 1,
    }));
  };

  const updateCartItemCount = (newAmount, productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: newAmount,
    }));
  };

  const clearCart = () => {
    const updateCartItems = {};
    for (const productId in cartItems) {
      updateCartItems[productId] = 0;
    }
    setCartItems(updateCartItems);
  };

  const resetCart = () => {
    setCartItems(getDefaultCart());
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const viewProductDetails = (productId) => {
    setSelectedProduct(productId);
  };
  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartProducts,
    clearCart,
    resetCart,
    viewProductDetails,
    closeProductDetails,
    selectedProduct,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

