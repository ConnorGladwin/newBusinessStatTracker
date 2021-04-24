// TODO
// fix the in/out fields to work with the checkZero function

// call variables 
let call = document.getElementById('call').value;
let callSub = document.getElementById('callSub').value;
let callAdd = document.getElementById('callAdd').value;

let total = 0;

// output contract value
function contractChange(total) {
  let contract = document.getElementById('contract').value;
  document.querySelector('.wContract').textContent = contract;
  
  checkZero(contract);
}

// output payout pending value
function pPendingChange() { 
  const pPending = document.getElementById('pPayout').value;
  const output = document.querySelector('.wPayoutPending');
  
  output.textContent = pPending;

  checkZero(pPending, output);
}

// output payout value
function payoutChange() {
  let payout = document.getElementById('payout').value;
  document.querySelector('.wPayout').textContent = payout;

  checkZero(payout)
}

// output calculated update value
function updateChange() {
  let mUpdate = document.getElementById('mUpdate').value;
  let pUpdate = document.getElementById('pUpdate').value;
  let updateTotal = mUpdate + pUpdate;

  document.querySelector('.wUpdates').textContent = updateTotal;

  checkZero(mUpdate);
  checkZero(pUpdate);
}

// output calculated call value
function callChange() {

}

// TODO
// Check the output and either return a number
// value or zero which will be displayed in the output
function checkZero(input, output) {
  if (input === ' ') {
    return output.textContent = 0;
  } 

  console.log(output);
}