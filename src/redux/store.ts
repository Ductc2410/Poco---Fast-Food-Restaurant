import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./slice/auth.slide";
import productsSlice from "./slice/product.slide";
import cartSlice from "./slice/cart.slide";

import { productApi } from "../api/produc.api";
import { commentApi } from "../api/comment.api";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  products: productsSlice.reducer,
  auth: authSlice.reducer,
  cart: cartSlice.reducer,

  [productApi.reducerPath]: productApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(productApi.middleware, commentApi.middleware)
});

export const persitor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
