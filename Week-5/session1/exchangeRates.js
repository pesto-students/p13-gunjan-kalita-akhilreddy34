const axios = require("axios");

const getExchangeRate = async (currencyCode) => {
  try {
    const apiUrl = "https://api.exchangerate.host/latest";
    const { data } = await axios.get(apiUrl);
    const { rates: exchangeRates } = data;

    return exchangeRates[currencyCode]
      ? exchangeRates[currencyCode].toFixed(4)
      : null;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

getExchangeRate("USD")
  .then((rate) => console.log(rate))
  .catch((error) => console.log(error));
