import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { baseCurrencyReducer } from './currency/currencySlice'

const persistConfig = {
  key: 'root',
  version: 1,
    storage,
  whitelist: ['baseCurrency']
}

const persistedReducer = persistReducer(persistConfig, baseCurrencyReducer)

export const store = configureStore({ 
    reducer: {
      currency: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

