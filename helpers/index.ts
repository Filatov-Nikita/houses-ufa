export function cleanPhone(str: string) {
  if(str.length === 0) return '';
  return '+' + str.replace(/[^0-9]+/g, '');
}

export function getMonts() {
  return [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];
}
