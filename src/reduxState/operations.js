import { createAsyncThunk } from '@reduxjs/toolkit';
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
