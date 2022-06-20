import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.slide";
import productsSlice from "./slice/product.slide";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    auth: authSlice.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
