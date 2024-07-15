const convertToCelsius = function(temperature) {
  convert = (temperature - 32) * 5/9
  return parseFloat(convert.toFixed(1))
};

const convertToFahrenheit = function(temperature) {
  convert = (9/5 * temperature) + 32
  return parseFloat(convert.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
