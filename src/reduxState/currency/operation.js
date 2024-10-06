import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/opencagedataApi.js';

export const getCurrency = createAsyncThunk(
  'currency/getCurrency',
  async function currencyGet(crd, thunkAPI) {
    const state = thunkAPI.getState();
    const { baseCurrency } = state.currency;

    if (baseCurrency && baseCurrency !== 'USD') {
      return thunkAPI.rejectWithValue(null);
    }
    try {
      const data = (await getUserInfo(crd)).results[0].annotations.currency
        .iso_code;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
