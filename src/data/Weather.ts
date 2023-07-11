// const codesToVectorIcons = {
//   '01d': 'weather-sunny',
//   '01n': 'weather-night',
//   '02d': 'weather-partlycloudy',
//   '02n': 'weather-partlycloudy',
//   '03d': 'weather-cloudy',
//   '03n': 'weather-cloudy',
//   '04d': 'weather-cloudy',
//   '04n': 'weather-cloudy',
//   '09d': 'weather-pouring',
//   '09n': 'weather-pouring',
//   '10d': 'weather-rainy',
//   '10n': 'weather-rainy',
//   '11d': 'weather-lightning',
//   '11n': 'weather-lightning',
//   '13d': 'weather-snowy',
//   '13n': 'weather-snowy',
//   '50d': 'weather-fog',
//   '50n': 'weather-fog',
// };

export type WeatherColourGradient = {
  gradient: string[];
  light: boolean;
};

/**
 * Returns a colour gradient based on the weather code
 * from the OpenWeatherMap API
 * https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
 * @param {string} main The main weather type from the API
 * @returns {string[]} An array of colours to be used in a gradient
 * @example
 * WeatherCodesToColourGradient('Clouds');
 * // => ['#bdc3c7', '#2c3e50']
 */
const mainToColourGradient = (
  main: string,
  night?: boolean,
): WeatherColourGradient => {
  switch (main) {
    case 'Thunderstorm':
      return {gradient: ['#0e0c32', '#bdc3c7'], light: true};
    case 'Drizzle':
      return {gradient: ['#bdc3c7', '#2c3e50'], light: true};
    case 'Rain':
      return {gradient: ['#bdc3c7', '#2c3e50'], light: true};
    case 'Snow':
      if (night) {
        return {gradient: ['#182741', '#6f88ab'], light: true};
      }
      return {gradient: ['#9ab1c5', '#d9dde2'], light: true};
    case 'Mist':
      if (night) {
        return {gradient: ['#242f32', '#697476'], light: true};
      }
      return {gradient: ['#c0c3ca', '#697476'], light: true};
    case 'Smoke':
      return {gradient: ['#bdc3c7', '#2c3e50'], light: true};
    case 'Haze':
      if (night) {
        return {gradient: ['#7f4a3d', '#917440'], light: true};
      }
      return {gradient: ['#d69923', '#917440'], light: true};
    case 'Dust':
      return {gradient: ['#bdc3c7', '#2c3e50'], light: true};
    case 'Fog':
      return {gradient: ['#bdc3c7', '#2c3e50'], light: true};
    case 'Sand':
      return {gradient: ['#bdc3c7', '#2c3e50'], light: true};
    case 'Ash':
      return {gradient: ['#bdc3c7', '#2c3e50'], light: true};
    case 'Squall':
      return {gradient: ['#bdc3c7', '#2c3e50'], light: true};
    case 'Tornado':
      return {gradient: ['#2c3e50', '#bdc3c7'], light: true};
    case 'Clear':
      if (night) {
        return {gradient: ['#061526', '#224775'], light: true};
      }
      return {gradient: ['#0047a0', '#6d96b6'], light: true};
    case 'Clouds':
      return {gradient: ['#bdc3c7', '#2c3e50'], light: true};
    default:
      return {gradient: ['#bdc3c7', '#2c3e50'], light: true};
  }
};

export {mainToColourGradient};
