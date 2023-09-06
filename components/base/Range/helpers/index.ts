export function prettyValue(val: number) {
  const [num, num2 = ''] = val.toString().split('.');
  const parts = num.match(/\d{1,3}(?=(\d{3})*$)/g);
  return [parts!.join(' '), num2].filter(val => !!val).join(',');
}

export function cutNotNumeric(str: string) {
  const newStr = str.replace(/[^\d.-]+/g, '');;
  return newStr;
}

export function minmax(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(val, max));
}

export function getNumbersAfterDot(num: number): number {
  const [ _, right = '' ] = num.toString().split('.');
  return right.length;
}

export function isLeftEdge(x: number, block: HTMLElement, handRef: HTMLElement) {
  const blockStart = block.getBoundingClientRect().x;
  return  x < blockStart;
}

export function isRightEdge(x: number, block: HTMLElement, handRef: HTMLElement) {
  const blockStart = block.getBoundingClientRect().x;
  return x + handRef.offsetWidth > blockStart + block.offsetWidth;
}

export function getXFromEl(relative: HTMLElement, target: HTMLElement | number) {
  const { x: x1 } = relative.getBoundingClientRect();
  if(typeof target === 'number') {
    return target - x1;
  } else {
    const { x: x2 } = target.getBoundingClientRect();
    return x2 - x1;
  }
}
