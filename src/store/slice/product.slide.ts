import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductList } from "../../api/product";
import IProduct from "../../types/Product";

export const getProducts = createAsyncThunk("product/getProductList", async () => {
  const { data } = await getProductList();
  return data;
});

interface InitialStateType {
  loading: boolean;
  products: IProduct[];
  total: number;
  error: string;
}

const initialState: InitialStateType = {
  loading: false,
  products: [],
  total: 0,
  error: ""
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.error = "Cant get data from server";
        state.loading = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.total = Number(action.payload.total);
        state.loading = false;
      });
  }
});

export default productsSlice;
