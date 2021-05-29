// TODO
// Add functionality to display weighted totals 

import React from 'react';

class Outputs extends React.Component {
  render() {
    return (
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full">
            <div className="">
              <label htmlFor="wApps" className="flex justify-start mb-2">Applications</label>
              <p className="wApps border-2 border-black rounded-md text-center my-2">0</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="wContract" className="flex justify-start mb-2">Contracts</label>
              <p className="wContract border-2 border-black rounded-md text-center my-2">0</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="payout" className="flex justify-start mb-2">Payouts</label>
              <p className="wPayout border-2 border-black rounded-md text-center my-2">0</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="update" className="flex justify-start mb-2">Updates</label>
              <p className="wUpdates border-2 border-black rounded-md text-center my-2">0</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="calls" className="flex justify-start mb-2">Calls</label>
              <p className="wCalls border-2 border-black rounded-md text-center my-2">0</p>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <label htmlFor="total" className="flex justify-start mb-2">Total Actions</label>
              <p className="total border-2 border-black rounded-md text-center my-2">0</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Outputs;