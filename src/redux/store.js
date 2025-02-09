import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import currencyReducer from './currencySlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'baseCurrency',
  storage,
  whitelist: ['baseCurrency'],
};

const store = configureStore({
  reducer: {
    currency: persistReducer(persistConfig, currencyReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);

export { store, persistor };
