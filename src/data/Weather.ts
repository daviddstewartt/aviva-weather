const IconIdToVectorIconName = (icon: string, id?: string): string => {
  switch (icon) {
    case '01d':
      return 'weather-sunny';
    case '01n':
      return 'weather-night';
    case '02d':
      return 'weather-partly-cloudy';
    case '02n':
      return 'weather-night-partly-cloudy';
    case '03d':
      return 'weather-cloudy';
    case '03n':
      return 'weather-cloudy';
    case '04d':
      return 'weather-cloudy';
    case '04n':
      return 'weather-cloudy';
    case '09d':
      return 'weather-pouring';
    case '09n':
      return 'weather-pouring';
    case '10d':
      return 'weather-rainy';
    case '10n':
      return 'weather-rainy';
    case '11d':
      if (id && ['200', '201', '202', '230', '231', '232'].includes(id)) {
        return 'weather-lightning-rainy';
      }
      return 'weather-lightning';
    case '11n':
      if (id && ['200', '201', '202', '230', '231', '232'].includes(id)) {
        return 'weather-lightning-rainy';
      }
      return 'weather-lightning';
    case '13d':
      if (id && ['602'].includes(id)) {
        return 'weather-snowy-heavy';
      }
      if (id && ['615', '616'].includes(id)) {
        return 'weather-snowy-rainy';
      }
      return 'weather-snowy';
    case '13n':
      if (id && ['602'].includes(id)) {
        return 'weather-snowy-heavy';
      }
      if (id && ['615', '616'].includes(id)) {
        return 'weather-snowy-rainy';
      }
      return 'weather-snowy';
    case '50d':
      return 'weather-fog';
    case '50n':
      return 'weather-fog';
    default:
      return 'weather-cloudy';
  }
};

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

export {mainToColourGradient, IconIdToVectorIconName};
