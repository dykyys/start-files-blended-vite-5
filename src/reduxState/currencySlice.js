import { createSlice } from '@reduxjs/toolkit';
import { fatchBaseCurrency, fetchExchangeCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fatchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fatchBaseCurrency.rejected, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.
      });
  },
});

export const currencyReducer = currencySlice.reducer;
export const { setBaseCurrency } = currencySlice.actions;
