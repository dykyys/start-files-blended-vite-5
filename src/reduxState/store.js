import { configureStore } from '@reduxjs/toolkit';

import { currencySliceReducer } from './currencySlice';

export const store = configureStore({
  reducer: {
    currency: currencySliceReducer,
  },
});
