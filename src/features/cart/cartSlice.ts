import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../product/data";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cartItemList: CartItem[];
}

const initialState: CartState = {
  cartItemList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const existingCartItem = state.cartItemList.find(
        (cartItem) => cartItem.id === product.id
      );

      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        state.cartItemList.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;

      state.cartItemList = state.cartItemList.filter(
        (cartItem) => cartItem.id !== id
      );
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const { id, quantity } = action.payload;

      const cartItemToUpdate = state.cartItemList.find(
        (cartItem) => cartItem.id === id
      );

      if (cartItemToUpdate) {
        cartItemToUpdate.quantity = quantity;
      }
    },
    emptyCart(state) {
      state.cartItemList = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
