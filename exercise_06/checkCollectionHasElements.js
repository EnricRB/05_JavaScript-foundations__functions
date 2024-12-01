/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * Check if a collection (array) has any elements.
 * @param {Array} collection
 * @returns {boolean}
 */

const checkCollectionHasElements = function(collection) {
    return collection.length > 0;
};

export default checkCollectionHasElements;
