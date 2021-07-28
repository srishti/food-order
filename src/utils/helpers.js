/**
 * Function to find index of an object element in an array using object element's ID
 * @param {Array} array - arr to search for the element
 * @param {String} id - ID of the element to be searched
 * @returns
 */
export const findIndexById = (array, id) => {
  return array.findIndex((objectElement) => objectElement.id === id);
};
