import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import ICartItem from "../../types/CartItem";

interface InitialStateType {
  items: ICartItem[];
  totalCount: number;
  amount: number;
}

const initialState: InitialStateType = {
  items: [],
  totalCount: 0,
  amount: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeCartItem(state, action) {
      const newItems = state.items.filter((cartItem) => cartItem.id !== action.payload);
      state.items = newItems;
    },

    decreaseCartItem(state, action) {
      const itemIndex = state.items.findIndex((cartItem) => cartItem.id === action.payload.id);

      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
        state.amount -= action.payload.price;
        state.totalCount -= 1;
      }
    },

    increaseCartItem(state, action) {
      const { price, quantity } = action.payload;

      const itemIndex = state.items.findIndex((cartItem) => cartItem.id === action.payload.id);

      state.totalCount += quantity;
      state.amount += price * quantity;

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      toast.info("Add to cart successfully");
    }
  }
});

export default cartSlice;
export const { increaseCartItem, decreaseCartItem } = cartSlice.actions;
