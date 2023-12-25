export function calcMonthlyPay(sum: number, initialPay: number, period: number, percent: number) {
  const s = sum - initialPay;
  const n = period * 12;
  const i = percent / 12 / 100;
  const p = s * (i * Math.pow(1 + i, n) / (Math.pow(1 + i, n) - 1));
  return p.toFixed(2);
}
