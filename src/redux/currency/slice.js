import { createSlice } from '@reduxjs/toolkit';
import { getCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(getCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});

export const currencyReducer = currencySlice.reducer;
