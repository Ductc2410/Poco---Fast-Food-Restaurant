import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeOrderStatus, getOrders } from "../../api/order";
import IOrder from "../../types/Order";

export const getOrderList = createAsyncThunk("ordre/getOrderList", async (params: any) => {
  const { data } = await getOrders(params);
  return data;
});

export const changeOrder = createAsyncThunk(
  "ordre/changeOrder",
  async ({ id, status }: { id: number; status: string }) => {
    await changeOrderStatus({ id, status });
  }
);

interface InitialStateType {
  loading: boolean;
  orders: IOrder[];
  error: string;
}

const initialState: InitialStateType = {
  loading: false,
  orders: [],
  error: ""
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderList.rejected, (state) => {
        state.error = "Cant get data from server";
        state.loading = false;
      })
      .addCase(getOrderList.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = false;
      });

    builder
      .addCase(changeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeOrder.fulfilled, (state, action) => {
        state.loading = false;
      });
  }
});

export default ordersSlice;
