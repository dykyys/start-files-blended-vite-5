import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchLatestSymbols,
} from './operations';

const slice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
    rates: [],
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(fetchLatestSymbols.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchLatestSymbols.fulfilled, (state, action) => {
        state.rates = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchLatestSymbols.rejected, (state, action) => {
        state.rates = [];
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setBaseCurrency } = slice.actions;
export const currencyReducer = slice.reducer;
