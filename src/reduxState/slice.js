import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  baseCurrency: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState: INITIAL_STATE,
  reducers: {},
});

export const currencyReducer = currencySlice.reducer;
