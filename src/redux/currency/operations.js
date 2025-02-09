import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';

export const getCurrency = createAsyncThunk(
  'currency/getCurrency',
  async (crd, thunkAPI) => {
    const currentCurrency = thunkAPI.getState().currency.baseCurrency;
    if (currentCurrency === '') {
      try {
        const data = await getUserInfo(crd);
        return data.results[0].annotations.currency.iso_code;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    } else {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
