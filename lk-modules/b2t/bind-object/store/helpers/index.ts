import type { LocationQuery } from 'vue-router';

export function notNullable<T extends Record<string, any>>(record: T): Partial<T> {
  return Object.fromEntries(Object.entries(record).filter(entry => entry[1] !== null)) as Partial<T>;
}

export function initValues<T>(params: T, converter: Partial<{ [ K in keyof T ]: (val: string) => T[K] }>, query: LocationQuery) {
  let key: keyof T extends string ? keyof T : never;
  for(key in params) {
    const param = query[key];
    const fn = converter[key];
    if(param && typeof param === 'string') {
      params[key] = fn ? fn(param) : param as any;
    }
  }
  return params;
}

export function recordToNull<T extends Record<string, unknown>>(record: T): { [ K in keyof T ]: null } {
  return Object.fromEntries(Object.entries(record).map(entry => [entry[0], null])) as { [ K in keyof T ]: null };
}
