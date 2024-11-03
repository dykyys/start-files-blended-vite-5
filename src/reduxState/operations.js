import { createAsyncThunk } from '@reduxjs/toolkit';
import { exchangeCurrency } from 'service/exchangeAPI';
import { getUserInfo } from 'service/opencagedataApi';

export const fatchBaseCurrency = createAsyncThunk(
  'currency/fatchBaseCurrency',
  async (coord, thunkAPI) => {
    const { currency } = thunkAPI.getState();
    const { baseCurrency } = currency;
    if (baseCurrency) {
      return baseCurrency;
    }

    try {
      const data = await getUserInfo(coord);

      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue('USD');
    }
  },
);
export const fetchExchangeCurrency = createAsyncThunk(
  'currency/fetchExchangeCurrency',
  async (currency, thunkAPI) => {
    try {
      const data = await exchangeCurrency(currency);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
