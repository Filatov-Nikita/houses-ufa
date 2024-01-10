export function cleanPhone(str: string) {
  if(str.length === 0) return '';
  return '+' + str.replace(/[^0-9]+/g, '');
}
