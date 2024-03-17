import { createAsyncThunk } from '@reduxjs/toolkit';
import { exchangeCurrency } from 'service/exchangeAPI';
import { getUserInfo } from 'service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coords, thunkAPI) => {
    const state = thunkAPI.getState();
    const { baseCurrency } = state.currency;
    if (baseCurrency) {
      return thunkAPI.rejectWithValue('We have base currency');
    }
    try {
      const data = await getUserInfo(coords);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchConvertCurrency = createAsyncThunk(
  'currency/fetchConvertCurrency',
  async (data, thunkAPI) => {
    try {
      const result = await exchangeCurrency(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
