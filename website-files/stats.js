// variable declaration for total calc
let wContract = 0;
let wPending = 0;
let wPayout = 0;
let wUpdate = 0;
let wCalls = 0;

// output contract value
function contractChange() {
  input = checkZero(parseInt(document.getElementById('contract').value));
  document.querySelector('.wContract').textContent = input;
  setStorage('contract', input);
  console.log('click');
  return (wContract = input);
}

// output payout pending value
function pendingChange() {
  input = checkZero(parseInt(document.getElementById('pending').value));
  document.querySelector('.wPending').textContent = input;
  setStorage('pending', input);
  return (wPending = input);
}

// output payout value
function payoutChange() {
  input = checkZero(parseInt(document.getElementById('payout').value));
  document.querySelector('.wPayout').textContent = input;
  setStorage('payout', input);
  return (wPayout = input);
}

// output calculated update value
function updateChange() {
  let m = checkZero(parseInt(document.getElementById('mUpdate').value));
  let p = checkZero(parseInt(document.getElementById('pUpdate').value));

  setStorage('mUpdate', m);
  setStorage('pUpdate', p);

  if (Number.isNaN(p)) {
    p = 0;
  }

  if (Number.isNaN(m)) {
    m = 0;
  }

  // calculates the ceiling of the two values when added
  // and displays output
  document.querySelector('.wUpdates').textContent = checkZero(
    Math.ceil((m + p) / 3)
  );
  return (wUpdate = Math.ceil((m + p) / 3));
}

// output calculated call value
function callChange() {
  const call = checkZero(parseInt(document.getElementById('call').value));
  let add = checkZero(parseInt(document.getElementById('callAdd').value));
  let sub = checkZero(parseInt(document.getElementById('callSub').value));

  if (Number.isNaN(add)) {
    add = 0;
  }
  if (Number.isNaN(sub)) {
    sub = 0;
  }

  const total = call + add - sub;
  document.querySelector('.calcCalls').textContent = checkZero(total);
  document.querySelector('.wCalls').textContent = checkZero(
    Math.ceil(total / 3)
  );
  setStorage('call', call);
  setStorage('add', add);
  setStorage('sub', sub);
  return (wCalls = Math.ceil(total / 3));
}

function calcTotal() {
  console.log(
    'contracts',
    wContract,
    'pendings',
    wPending,
    'payouts',
    wPayout,
    'updates',
    wUpdate,
    'calls',
    wCalls
  );
  const total = wContract + wPending + wPayout + wUpdate + wCalls;
  document.querySelector('.wTotal').textContent = checkZero(total);
}

// Checks the output and either returns a number
// value or zero which will be displayed in the output
function checkZero(input) {
  if (Number.isNaN(input)) {
    return (input = 0);
  }
  return (input = input);
}

function setStorage(key, value) {
  localStorage.setItem(key, value);
}

function getStorage() {
  // gets all values from local storage, sets them as the input
  // and reruns the functions to update the total values
  document.getElementById('contract').value = localStorage.getItem('contract');
  contractChange();
  document.getElementById('pending').value = localStorage.getItem('pending');
  pendingChange();
  document.getElementById('payout').value = localStorage.getItem('payout');
  payoutChange();
  document.getElementById('mUpdate').value = localStorage.getItem('mUpdate');
  document.getElementById('pUpdate').value = localStorage.getItem('pUpdate');
  updateChange();
  document.getElementById('call').value = localStorage.getItem('call');
  document.getElementById('callAdd').value = localStorage.getItem('add');
  document.getElementById('callSub').value = localStorage.getItem('sub');
  callChange();

  // runs the calcTotal function to recalculate the total actions
  calcTotal();
}

function sendEmail() {
  alert(`This function isn't ready yet`);
  const btn = document.querySelector('.emailBtn');

  btn.disabled = true;
  btn.classList.add('cursor-not-allowed');
}

function clearStats() {
  if (
    confirm(
      'Clear stat tracker? - You will not be able to recover the input items'
    )
  ) {
    localStorage.clear();
    const elements = document.getElementsByTagName('input');
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type == 'number') {
        elements[i].value = 0;
      }
    }
    // calls the getStorage function to replace all values
    // and recalculate totals
    getStorage();
  }
}

window.onload = getStorage();