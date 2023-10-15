export function notNullable<T extends Record<string, any>>(record: T): Partial<T> {
  return Object.fromEntries(Object.entries(record).filter(entry => entry[1] !== null)) as Partial<T>;
}
