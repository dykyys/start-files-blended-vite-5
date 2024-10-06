import { createSlice } from '@reduxjs/toolkit';
import { getCurrency } from 'reduxState/currency/operation.js';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  reducers: {
    setDefaultCurrency: state => {
      state.baseCurrency = 'USD';
    },
  },
  extraReducers: builder => {
    builder.addCase(getCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
  selectors: {
    selectBaseCurrency: state => state.baseCurrency,
  },
});

export const { selectBaseCurrency } = currencySlice.selectors;
export const { setDefaultCurrency } = currencySlice.actions;
