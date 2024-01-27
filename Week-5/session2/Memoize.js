/** closure function  */
const getTemperature = function () {
  const cityTemperatureCacheObject = {};

  return function (city) {
    const temperatureData = {
      "New York": 20,

      London: 18,

      Paris: 22,

      Tokyo: 25,

      Sydney: 28,
    };

    /** check if we have temperature  of the city in the cache */
    if (cityTemperatureCacheObject[city])
      return cityTemperatureCacheObject[city];
    else {
      /** if temperature is not present in cache retrieve the temperature and store in the cache and send the temperature */
      const temperatureOfTheCity = temperatureData[city];

      if (temperatureOfTheCity) {
        cityTemperatureCacheObject[city] = temperatureOfTheCity;
        return temperatureOfTheCity;
      } else return "I don't have temperature data for provided city ";
    }
  };
};

const getTemperatureForCity = getTemperature();

console.log(getTemperatureForCity("New York"));
console.log(getTemperatureForCity("New York"));
console.log(getTemperatureForCity("London"));
console.log(getTemperatureForCity("London"));
