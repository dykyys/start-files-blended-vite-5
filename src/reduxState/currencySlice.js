import { createSlice } from '@reduxjs/toolkit';
import { fatchBaseCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fatchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fatchBaseCurrency.rejected, (state, action) => {
        state.baseCurrency = action.payload;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
