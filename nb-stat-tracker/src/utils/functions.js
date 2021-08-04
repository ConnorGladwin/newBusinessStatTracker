// Checks that the input number
// and converts anything that isn't 
// a number into a 0
export function checkZero(num) {
  if (num === undefined || null) {
    return num = parseInt(0);
  } else if (Number.isNaN(num)) {
    return num = parseInt(0);
  }
  return parseInt(num)
} 

// Weights the input value
export function weightCalc(num) {
  num = Math.ceil(num / 3);
  return num;
}
