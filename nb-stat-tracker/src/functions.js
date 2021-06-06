export function checkZero(num) {
  if (num === undefined || null) {
    return num = parseInt(0);
  }
  return parseInt(num)
}

export function weightCalc(num) {
  num = Math.ceil(num / 3);
  return num;
}