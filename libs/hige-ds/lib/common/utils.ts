import { TAny } from './contracts';

/**
 * Converts value to an array. null and undefined values are converted to an empty array.
 *
 * @param value value to convert
 * @returns the array representation of the value. An empty array is returned for null or undefined values.
 */
export const convertToNonNullishArray = (value: TAny) => {
  if (value === null || value === undefined) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
};

/**
 * Will return the non-negative remainder of the division.
 *
 * @param n the dividend.
 * @param m the modulus.
 */
export const modulo = (n: number, m: number) => ((n % m) + m) % m;
