// TODO
// Display all weighted totals

import React from 'react';
import { checkZero, weightCalc } from '../functions';

class Outputs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nbo: 0,
      payout: 0,
      update: 0,
      call: 0,
      total: 0
    }
  }

  calcNBO = () => {
    const a = checkZero(this.props.apps);
    const b = checkZero(this.props.contract);
    const nbo = a + b;
    return nbo;
  }

  calcPayout = () => {
    const a = checkZero(this.props.pending);
    const b = checkZero(this.props.payout);
    const payout = a + b;
    return payout;
  }

  calcUpdate = () => {
    const a = checkZero(this.props.mUpdate);
    const b = checkZero(this.props.pUpdate);
    const update  = a + b;
    return weightCalc(update);
  }

  calcCalls = () => {
    let call = checkZero(this.props.call);
    console.log(call);
    const add = checkZero(this.props.callAdd);
    const sub = checkZero(this.props.callSub);
    if (add > 0 || sub > 0) {
      call = ((call - sub) + add)
      return weightCalc(call);
    }
    return weightCalc(call);
  }

  calcTotal = () => {
    const nbo = this.calcNBO();
    const payout = this.calcPayout();
    const update = this.calcUpdate();
    const calls = this.calcCalls();
    const total = (nbo + payout + update + calls);
    return total;
  }

  componentDidUpdate() {
    this.calcTotal()
  }

  render() {
    return (
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full">
            <div className="">
              <label htmlFor="wContract" className="flex justify-start">NBO</label>
              <p className="wContract border-2 border-black rounded-md text-center mb-2">{this.calcNBO()}</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="payout" className="flex justify-start">Payouts</label>
              <p className="wPayout border-2 border-black rounded-md text-center mb-2">{this.calcPayout()}</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="update" className="flex justify-start">Updates</label>
              <p className="wUpdates border-2 border-black rounded-md text-center mb-2">{this.calcUpdate()}</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="calls" className="flex justify-start">Calls</label>
              <p className="wCalls border-2 border-black rounded-md text-center mb-2">{this.calcCalls()}</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="total" className="flex justify-start">Total Actions</label>
              <p className="total border-2 border-black rounded-md text-center mb-2">{this.calcTotal()}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Outputs;