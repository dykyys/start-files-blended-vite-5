//import { createSlice as createAppSlice } from '@reduxjs/toolkit';
import { exchangeCurrency } from '../service/exchangeAPI';
import { getUserInfo } from '../service/opencagedataApi';
import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
  baseCurrency: '',
  exchangeInfo: null,
  loading: false,
  error: 'We already have base currency!',
};

const currencySlice = createAppSlice({
  name: 'currency',
  initialState,
  selectors: {
    selectBaseCurrency: state => state.baseCurrency,
    selectExchangeInfo: state => state.exchangeInfo,
  },
  reducers: create => ({
    setDefaultCurrency: create.reducer((state, action) => {
      state.baseCurrency = action.payload;
    }),
    getBaseCurrency: create.asyncThunk(
      async crd => {
        const data = await getUserInfo(crd);
        return data.results[0].annotations.currency.iso_code;
      },
      {
        pending: state => {
          state.loading = true;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.baseCurrency = action.payload;
        },
        options: {
          condition: (_, { getState }) => {
            const state = getState();
            const { baseCurrency } = state.currency;
            return !baseCurrency;
          },
        },
      },
    ),
    getExchangeInfo: create.asyncThunk(
      async exchangeRequest => {
        const data = await exchangeCurrency(exchangeRequest);
        return data;
      },
      {
        pending: state => {
          state.loading = true;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.exchangeInfo = action.payload;
        },
      },
    ),
  }),
});

export default currencySlice.reducer;
export const { getBaseCurrency, setDefaultCurrency, getExchangeInfo } =
  currencySlice.actions;
export const { selectBaseCurrency, selectExchangeInfo } =
  currencySlice.selectors;
