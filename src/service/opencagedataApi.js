import axios from 'axios';

export const getUserInfo = async ({ latitude, longitude }) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;
  const { data } = await axios.get(urlPosition, {
    params: {
      key: apiKey,
      language: 'en',
    },
  });
  // console.log(data);
  console.log(data.results[0].annotations.currency.iso_code);
  return data.results[0].annotations.currency.iso_code;
};
