/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * Generate a random number between 0 and the given limit, rounded to the nearest integer.
 * @param {number} limit
 * @returns {number}
 */

const generateRandomNumberInRange = function(limit) {
    return Math.round(Math.random() * limit);
};

export default generateRandomNumberInRange;
