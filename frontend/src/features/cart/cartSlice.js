import { createSlice } from '@reduxjs/toolkit';

// Get cart from localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const shippingAddress = JSON.parse(localStorage.getItem('shippingAddress')) || {};

const initialState = {
  items: cartItems,
  shippingAddress,
  paymentMethod: 'cash',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      
      // Check if item is already in cart
      const existingItem = state.items.find(
        (i) => i.productId === item.productId
      );
      
      if (existingItem) {
        // Update quantity
        existingItem.quantity += item.quantity;
      } else {
        // Add new item
        state.items.push(item);
      }
      
      // Update localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      
      state.items = state.items.filter((item) => item.productId !== productId);
      
      // Update localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateCartItemQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      
      const item = state.items.find((item) => item.productId === productId);
      
      if (item) {
        item.quantity = quantity;
      }
      
      // Update localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      
      // Update localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      
      // Update localStorage
      localStorage.setItem('shippingAddress', JSON.stringify(state.shippingAddress));
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  saveShippingAddress,
  savePaymentMethod,
} = cartSlice.actions;

export default cartSlice.reducer;