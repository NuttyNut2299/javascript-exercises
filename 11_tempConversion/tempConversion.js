const convertToCelsius = function(valueF) {
  return Math.round(((valueF - 32) * (5 / 9)) * 10) / 10;
};

const convertToFahrenheit = function(valueC) {
  return Math.round(((valueC * (9 / 5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
