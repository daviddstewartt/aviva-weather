/**
 *  Convert meters to miles
 * @param {number} meters The distance in meters
 * @returns {number}
 */
const metersToMiles = (meters: number) => {
  const miles = meters / 1609.34;
  return miles.toFixed(2); // Return the result with 2 decimal places
};

export {metersToMiles};
