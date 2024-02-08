export function numToRp(number: number) {
  const numStr = number.toString();
  let res = '';

  for (let i = numStr.length - 1; i >= 0; i--) {
    res = numStr[i] + res;
    if ((numStr.length - i) % 3 === 0 && i != 0) {
      res = '.' + res;
    }
  }

  return 'Rp ' + res;
}