// TODO
// create total action calc function

// call variables 
let call = document.getElementById('call').value;
let callSub = document.getElementById('callSub').value;
let callAdd = document.getElementById('callAdd').value;

let input;

let updateTotal = 0;
let callTotal = 0;
let total = 0;

// output contract value
function contractChange() {
  input = parseInt(document.getElementById('contract').value);
  document.querySelector('.wContract').textContent = checkZero(input); 
}

// output payout pending value
function pPendingChange() { 
  input = parseInt(document.getElementById('pPayout').value);
  document.querySelector('.wPending').textContent = checkZero(input);
}

// output payout value
function payoutChange() {
  input = parseInt(document.getElementById('payout').value);
  document.querySelector('.wPayout').textContent = checkZero(input);
}

// output calculated update value
function updateChange() {
  let m = parseInt(document.getElementById('mUpdate').value) / 3;
  let p = parseInt(document.getElementById('pUpdate').value) / 3;

  if (Number.isNaN(p)) {
    p = 0;
  } 
  
  if (Number.isNaN(m)) {
    m = 0;
  }

  // calculates the ceiling of the two values when added
  // and displays output
  document.querySelector('.wUpdates').textContent = Math.ceil(m + p);
}

// output calculated call value
function callChange() {
  let call = parseInt(document.getElementById('call').value);
  let add = parseInt(document.getElementById('callAdd').value);
  let sub = parseInt(document.getElementById('callSub').value);

  if (Number.isNaN(add)) {
    add = 0;
  }
  if (Number.isNaN(sub)) {
    sub = 0;
  }

  let total = (call + add) - sub;
  document.querySelector('.calcCalls').textContent = total;
  document.querySelector('.wCalls').textContent = Math.ceil(total / 3);
}

// Checks the output and either returns a number
// value or zero which will be displayed in the output
function checkZero(input) {
  if (Number.isNaN(input)) {
    return input = 0;
  } else {
    return input = input;
  }
}
