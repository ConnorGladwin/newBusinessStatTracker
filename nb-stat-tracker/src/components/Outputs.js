// TODO
// Display all weighted totals

import React from 'react';
import { checkZero } from '../functions';

class Outputs extends React.Component {

  calcNBO = () => {
    const a = checkZero(this.props.apps);
    const b = checkZero(this.props.contract);
    const nbo = a + b;
    return nbo;
  }

  calcPayout = () => {

  }

  calcCalls = () => {

  }

  componentDidUpdate() {
    this.calcNBO();
    this.calcPayout();
    this.calcCalls();
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
              <p className="wPayout border-2 border-black rounded-md text-center mb-2">0</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="update" className="flex justify-start">Updates</label>
              <p className="wUpdates border-2 border-black rounded-md text-center mb-2">0</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="calls" className="flex justify-start">Calls</label>
              <p className="wCalls border-2 border-black rounded-md text-center mb-2">0</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="total" className="flex justify-start">Total Actions</label>
              <p className="total border-2 border-black rounded-md text-center mb-2">0</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Outputs;