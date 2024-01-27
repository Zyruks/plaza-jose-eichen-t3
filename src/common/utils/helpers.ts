/**
 * isNullOrUndefined
 * @description - validate if an element is null or undefined
 * @function
 * @param {any} value - Element to validate
 * @return {boolean} Element is null or undefined.
 */
export const isNullOrUndefined = (value: unknown): boolean => value === undefined || value === null;
