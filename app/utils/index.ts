export const isUndefined = (obj: any): obj is undefined =>
  typeof obj === 'undefined';
export const isObject = (fn: any): fn is object =>
  !isNil(fn) && typeof fn === 'object';
export const stripEndSlash = (path: string) =>
  path[path.length - 1] === '/' ? path.slice(0, path.length - 1) : path;
export const isFunction = (val: any): boolean => typeof val === 'function';
export const isString = (val: any): val is string => typeof val === 'string';
export const isNumber = (val: any): val is number => typeof val === 'number';
export const isConstructor = (val: any): boolean => val === 'constructor';
export const isNil = (val: any): val is null | undefined =>
  isUndefined(val) || val === null;
export const isEmpty = (array: any): boolean => !(array && array.length > 0);
export const isSymbol = (val: any): val is symbol => typeof val === 'symbol';
export const isDefined = (val: any): boolean => val !== undefined;
export const getTinyintValue = (val): 1 | 0 => (val ? 1 : 0);
export const saveJsonParse = (val: any) => {
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
};
export const calcAvg = (arr: number[]): number =>
  Math.round(arr.reduce((init, val) => init + val, 0) / arr.length);
export const getMedianValue = (arr: number[]): number =>
  arr.at((arr.length - 1) / 2);

export const getPercent = (value: number, value1: number): number =>
  Math.floor((value * 100) / value1);
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
