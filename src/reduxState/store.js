import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currencySlice';

export const store = configureStore({
  reducer: { currency: currencyReducer },
});
