import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchConvertCurrency } from './operetions';

const initialState = {
  baseCurrency: '',
  loading: false,
  error: null,
  convertInfo: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload;
      })
      .addCase(fetchConvertCurrency.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchConvertCurrency.fulfilled, (state, { payload }) => {
        state.convertInfo = payload;
        state.loading = false;
      })
      .addCase(fetchConvertCurrency.rejected, (state, { payload }) => {
        state.error = payload;
        state.convertInfo = null;
        state.loading = false;
      }),
});

export const { setBaseCurrency } = currencySlice.actions;

export const baseCurrencyReducer = currencySlice.reducer;
