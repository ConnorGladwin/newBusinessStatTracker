// TODO

import React from 'react';
import { checkZero } from '../utils/functions';

class Inputs extends React.Component {

  calcCalls = () => {
    let call = checkZero(this.props.call);
    const add = checkZero(this.props.callAdd);
    const sub = checkZero(this.props.callSub);
    if (add > 0 || sub > 0) {
      call = ((call - sub) + add);
      return call;
    }
    return call;
  }

  render() {

    // pulls the latest value from localHost
    // and applies it to the input field
    let { appValue } = 0;
    let { contractValue } = 0;
    let { pendingValue } = 0;
    let { payoutValue } = 0;
    let { mUpdateValue } = 0;
    let { pUpdateValue } = 0;
    let { callValue } = 0;
    let { callSubValue } = 0;
    let { callAddValue} = 0;

    // pulls the latest value from localHost
    // and applies it to the input field
    function getValues() {
      appValue = window.localStorage.getItem('apps');
      contractValue = window.localStorage.getItem('contract');
      pendingValue = window.localStorage.getItem('pending');
      payoutValue = window.localStorage.getItem('payout');
      mUpdateValue = window.localStorage.getItem('mUpdate');
      pUpdateValue = window.localStorage.getItem('pUpdate');
      callValue = window.localStorage.getItem('call');
      callSubValue = window.localStorage.getItem('callSub');
      callAddValue = window.localStorage.getItem('callAdd');

    }

    getValues();

    return (
      // Input fields
      <div className="mx-auto">
        <div className="flex flex-col items-center h-full">
          <div>
            {/* NBO */}
            <div className="flex border-2 border-black rounded-md mb-2 px-1 py-2">
              {/* Apps */}
              <div className="mx-2">
                <label htmlFor="apps" className="flex justify-start mb-2">Applications</label>
                <input type="number" name="apps" id="apps" className="border-2 border-black rounded-md" placeholder="0" value={appValue} onChange={e => this.props.calcStats(e.target.value, 'apps')} />
              </div>
              {/* Contracts */}
              <div className="mx-2">
                <label htmlFor="contract" className="flex justify-start mb-2">Contracts</label>
                <input type="number" name="contract" id="contract" className="border-2 border-black rounded-md" placeholder="0" value={contractValue}
                 onChange={e => this.props.calcStats(e.target.value, 'contract')} />
              </div>
            </div>
            {/* Payouts */}
            <div className="flex border-2 border-black rounded-md mb-2 px-1 py-2">
              {/* Pending */}
              <div className="mx-2">
                <label htmlFor="pending" className="flex justify-start mb-2">Payout Pending</label>
                <input type="number" name="pending" id="pending" className="border-2 border-black rounded-md mb-2" placeholder="0" value={pendingValue} onChange={e => this.props.calcStats(e.target.value, 'pending')} />
              </div>
              {/* Payout */}
              <div className="mx-2">
                <label htmlFor="payout" className="flex justify-start mb-2">Payout</label>
                <input type="number" name="payout" id="payout" className="border-2 border-black rounded-md mb-2" placeholder="0" value={payoutValue} onChange={e => this.props.calcStats(e.target.value, 'payout')} />
              </div>
            </div>
          </div>
          {/* General Stats */} 
          <div className="mx-2">
            {/* Updates */}
            <div className="flex border-2 border-black rounded-md mb-2 px-1 py-2">
              <div className="mx-2">
                <label htmlFor="mUpadte" className="flex justify-start mb-2">Manual Update</label>
                <input type="number" name="mUpdate" id="mUpdate" className="border-2 border-black rounded-md mb-2" placeholder="0" value={mUpdateValue} onChange={e => this.props.calcStats(e.target.value, 'mUpdate')} />
              </div>
              <div className="mx-2">
                <label htmlFor="pUpdate" className="flex justify-start mb-2">Podium Update</label>
                <input type="number" name="pUpdate" id="pUpdate" className="border-2 border-black rounded-md mb-2" placeholder="0" value={pUpdateValue} onChange={e => this.props.calcStats(e.target.value, 'pUpdate')} />
              </div>
            </div>
            {/* Calls */}
            <div className="flex mb-2">
              <div className="">
                <label htmlFor="calls" className="flex justify-start mb-2">Calls</label>
                <input type="number" name="calls" id="calls" className="border-2 border-black rounded-md mb-2" placeholder="0" value={callValue} onChange={e => this.props.calcStats(e.target.value, 'call')} />
              </div>
              <div className="w-full mx-2">
                <label htmlFor="calcCalls" className="flex justify-start mb-2">Calculated Calls</label>
                <p className="border-2 border-black rounded-md text-center">{this.calcCalls()}</p>
              </div>
            </div>
          </div>
          {/* Call modifiers */}
          <div className="flex flex-col border-2 border-black rounded-md mb-2 px-1 py-2">
            <label htmlFor="callMods">Call Modifiers</label>
            <div className="flex">
              <div className="mx-2">
                <label htmlFor="callSub" className="flex justify-start mb-2">Subtract</label>
                <input type="number" name="callSub" id="callSub" className="border-2 border-black rounded-md mb-2" placeholder="0" value={callSubValue} onChange={e => this.props.calcStats(e.target.value, 'callSub')} />
              </div>
              <div className="mx-2">
                <label htmlFor="callAdd" className="flex justify-start mb-2">Add</label>
                <input type="number" name="callAdd" id="callAdd" className="border-2 border-black rounded-md mb-2" placeholder="0" value={callAddValue} onChange={e => this.props.calcStats(e.target.value, 'callAdd')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Inputs;