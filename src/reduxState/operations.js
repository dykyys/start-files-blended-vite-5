import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUserInfo } from 'service/opencagedataApi';

export const instance = axios.create({
  baseURL: '',
});

export const getBaseCurrency = createAsyncThunk(
  'currency/getBaseCurrency',
  async (crd, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { baseCurrency } = state.currency;

      if (baseCurrency && baseCurrency !== 'USD') {
        return thunkAPI.rejectWithValue(null);
      }

      const data = await getUserInfo(crd);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
