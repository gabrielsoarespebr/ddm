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
    removeFromCart() {
      console.log("Removeu do carrinho");
    },
    updateQuantity() {
      console.log("Atualizou quantidade do produto");
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
