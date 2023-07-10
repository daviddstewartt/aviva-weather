/**
 * Formats a timestamp to a string in the format HH:MM
 * @param {number} timestamp The timestamp to format
 * @returns {string}
 */
const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
};

/**
 * Formats a timestamp to a string in the format DD Month
 * @param {number} timestamp The timestamp to format
 * @returns {string}
 */
const formatTimestampToDate = (timestamp: number, locale: string = 'en-GB') => {
  const options = {month: 'short', day: 'numeric'};
  const date = new Date(timestamp);
  return date.toLocaleDateString(locale, options);
};

/**
 * Checks if the current time is between 6:00 and 18:00
 * @returns {boolean}
 */
const isDayTime = (): boolean => {
  const date = new Date();
  const hours = date.getHours();
  return hours > 6 && hours < 18;
};

/**
 * Converts a timestamp to a string representing the date
 * @param {number} timestamp The timestamp to convert
 * @returns {string}
 */
const timestampToShortDate = (timestamp: number) => {
  const currentDate = new Date();
  const inputDate = new Date(timestamp);

  const currentDay = currentDate.getDay();
  const inputDay = inputDate.getDay();

  if (currentDay === inputDay) {
    return 'Today';
  } else if (
    currentDay === inputDay + 1 ||
    (currentDay === 0 && inputDay === 6)
  ) {
    return 'Yesterday';
  } else {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[inputDay];
  }
};

export {formatTime, isDayTime, timestampToShortDate, formatTimestampToDate};
