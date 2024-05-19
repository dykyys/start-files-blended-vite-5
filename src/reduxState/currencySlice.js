import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
});

export const { setBaseCurrency } = slice.actions;
export const currencyReducer = slice.reducer;
