/* eslint-disable no-console */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { login } from "../../api/auth";
import IUserLogin from "../../types/UserLogin";

export const signin = createAsyncThunk<
  AxiosResponse,
  IUserLogin,
  {
    rejectValue: AxiosError;
  }
>("auth/signin", async (data, { rejectWithValue }) => {
  try {
    const response = await login(data);
    return response;
  } catch (error) {
    return rejectWithValue(error as AxiosError);
  }
});

interface InitialStateType {
  loading: boolean;
  error: string;

  user: {
    email: string;
    id: number;
  };
  isLogging: boolean;
}

const initialState: InitialStateType = {
  loading: false,
  error: "",
  user: {
    email: "",
    id: 0
  },
  isLogging: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state) => {
      state.error = "";
      state.loading = true;
    });
    builder.addCase(signin.rejected, (state, { payload }) => {
      const message = payload?.response?.data;

      state.error = message as string;
      state.loading = false;
    });
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      const { data } = payload;

      state.loading = false;
      state.isLogging = true;
      state.user = data.user;
    });
  }
});

export default authSlice;
