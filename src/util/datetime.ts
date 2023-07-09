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
 * Checks if the current time is between 6:00 and 18:00
 * @returns {boolean}
 */
const isDayTime = (): boolean => {
  const date = new Date();
  const hours = date.getHours();
  return hours > 6 && hours < 18;
};

export {formatTime, isDayTime};
