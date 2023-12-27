export function cleanPhone(str: string) {
  return '+' + str.replace(/[^0-9]+/g, '');
}
