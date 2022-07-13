import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeOrderStatus, getOrders } from "../../api/order";
import IOrder, { Status } from "../../types/Order";

export const getOrderList = createAsyncThunk("ordre/getOrderList", async (params: any) => {
  const { data } = await getOrders(params);
  return data;
});

export const changeOrder = createAsyncThunk(
  "ordre/changeOrder",
  async ({ id, status, filter }: { id: number; status: string; filter?: string }) => {
    await changeOrderStatus({ id, status });
    return { id, status, filter };
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
        const { id, status, filter } = action.payload;

        if (filter) {
          const newOrders = state.orders.filter((item) => item.id !== id);
          state.orders = newOrders;
        } else {
          const index = state.orders.findIndex((item) => item.id === id);
          state.orders[index].status = status as Status;
        }

        state.loading = false;
      });
  }
});

export default ordersSlice;
