import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  headers: { apikey: 'wkkMyjkPOwohfPQ0ild3jmF2hd1HOBFN' },
});

export const exchangeCurrency = async credentials => {
  const {
    data: { query, info, result },
  } = await instance.get(`/convert`, {
    params: credentials,
  });
  return { ...query, rate: info.rate, result };
};

export const latestRates = async baseCurrency => {
  const { data } = await instance.get(`/latest?symbols&base=${baseCurrency}`);
  console.log(Object.entries(data.rates));

  return Object.entries(data.rates);
};
