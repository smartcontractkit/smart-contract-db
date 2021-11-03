/* eslint-disable no-nested-ternary */
export const compareStrings =
  (key: string, order: 'asc' | 'desc' = 'asc') =>
  (a, b) => {
    const x = a[key] === b[key] ? 0 : a[key] > b[key] ? 1 : -1;
    return order === 'asc' ? x : x * -1;
  };

export const compareDates =
  (key: string, order: 'asc' | 'desc' = 'asc') =>
  (a, b) => {
    const x = new Date(a[key]).setHours(0, 0, 0, 0);
    const y = new Date(b[key]).setHours(0, 0, 0, 0);
    const z = x === y ? 0 : x > y ? 1 : -1;
    return order === 'asc' ? z : z * -1;
  };
