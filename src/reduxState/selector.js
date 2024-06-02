import { createSelector } from '@reduxjs/toolkit';

export const selectorBaseCurrency = state => state.currency.baseCurrency;
export const selectExchangeInfo = state => state.currency.exchangeInfo;
export const selectError = state => state.currency.isError;
export const selectLoading = state => state.currency.isLoading;
export const selectRates = state => state.currency.rates;
export const selectFiltredRates = createSelector(
  [selectorBaseCurrency, selectRates],
  (baseCurrency, rates) => {
    return rates
      .filter(([key]) => key !== baseCurrency)
      .map(([key, value]) => ({ key, value: (1 / value).toFixed(2) }));
  },
);
