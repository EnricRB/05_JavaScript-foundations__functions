/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

/**
 * Transform a collection (array) into a string, joined by a pipe character, or return an empty string if the array is empty.
 * @param {Array} collection
 * @returns {string}
 */

const transformCollectionToString = function(collection) {
   return collection.length > 0 ? collection.join(" | ") : "";
};

export default transformCollectionToString;
