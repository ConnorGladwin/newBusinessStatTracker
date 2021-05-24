// TODO 
// Seperate inputs and outputs into different components

import React from 'react';

class Main extends React.Component {

  state = {
    contract: 0,
    payout: 0,
    updates: 0,
    calls: 0,
    total: 0
  }

  calcStats = (value, id) => {
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <div className="text-xl">
        <div className="flex mx-14 my-14">
          {/* Inputs */}
          <div className="mx-auto">
            {/* All stats inputs */}
            <div className="flex flex-col items-center h-full">
              {/* Officer specific */}
              <div>
                {/* Contracts */}
                <div className="mb-2">
                  <label htmlFor="contract" className="flex justify-start mb-2">Contracts</label>
                  <input type="number" name="contract" id="contract" className="border-2 border-black rounded-md mb-2" placeholder="0" onChange={(e) => this.calcStats(e.target.value, e.target.id)} />
                </div>

                {/* Payouts */}
                <div className="flex border-2 border-black rounded-md mb-2 px-1 py-2">
                  {/* Pending */}
                  <div className="mx-2">
                    <label htmlFor="pPending" className="flex justify-start mb-2">Payout Pending</label>
                    <input type="number" name="pending" id="pending" className="border-2 border-black rounded-md mb-2" placeholder="0" onChange={(e) => this.calcStats(e.target.value, e.target.id)} />
                  </div>
                  {/* Payout */}
                  <div className="mx-2">
                    <label htmlFor="payout" className="flex justify-start mb-2">Payouts</label>
                    <input type="number" name="payout" id="payout" className="border-2 border-black rounded-md mb-2" placeholder="0" onChange={(e) => this.calcStats(e.target.value, e.target.id)} />
                  </div>
                </div>
              </div>

              {/* General stats */}
              <div className="mx-2">
                {/* Updates */}
                <div className="flex border-2 border-black rounded-md mb-2 px-1 py-2">
                  <div className="mx-2">
                    <label htmlFor="mUpdate" className="flex justify-start mb-2">Manual Update</label>
                    <input type="number" name="mUpdate" id="mUpdate" className="border-2 border-black rounded-md mb-2" placeholder="0" onChange={(e) => this.calcStats(e.target.value, e.target.id)} />
                  </div>
                  <div className="mx-2">
                    <label htmlFor="pUpdate" className="flex justify-start mb-2">Podium Update</label>
                    <input type="number" name="pUpdate" id="pUpdate" className="border-2 border-black rounded-md mb-2" placeholder="0" onChange={(e) => this.calcStats(e.target.value, e.target.id)} />
                  </div>                  
                </div>
                {/* Calls */}
                <div className="flex mb-2">
                  <div className="">
                    <label htmlFor="calls" className="flex justify-start mb-2">Calls</label>
                    <input type="number" name="calls" id="calls" className="border-2 border-black rounded-md" placeholder="0" />
                  </div>
                  <div className="w-full mx-2">
                    <label htmlFor="calcCalls" className="flex justify-start mb-2">Calculated Calls</label>
                    <p className="border-2 border-black rounded-md text-center">0</p>
                  </div>
                </div>
              </div>
              {/* Call modifiers */}
              <div className="flex flex-col border-2 border-black rounded-md mb-2 px-1 py-2">
                <label htmlFor="call modifiers">Call Modifiers</label>
                <div className="flex">
                  <div className="mx-2">
                    <label htmlFor="callSub" className="flex justify-start mb-2">Subtract</label>
                    <input type="number" name="callSub" id="callSub" className="border-2 border-black rounded-md mb-2" placeholder="0" />
                  </div>
                  <div className="mx-2">
                    <label htmlFor="callAdd" className="flex justify-start mb-2">Add</label>
                    <input type="number" name="callAdd" id="callAdd" className="border-2 border-black rounded-md mb-2" placeholder="0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Outputs */}
          <div className="mx-auto">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-full">
                <div className="">
                  <label htmlFor="wContract" className="flex justify-start mb-2">Contracts</label>
                  <p className="wContract border-2 border-black rounded-md text-center my-2">{this.state.contract}</p>
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <label htmlFor="payout" className="flex justify-start mb-2">Payouts</label>
                  <p className="wPayout border-2 border-black rounded-md text-center my-2">{this.state.payout}</p>
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <label htmlFor="update" className="flex justify-start mb-2">Updates</label>
                  <p className="wUpdates border-2 border-black rounded-md text-center my-2">{this.state.updates}</p>
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <label htmlFor="calls" className="flex justify-start mb-2">Calls</label>
                  <p className="wCalls border-2 border-black rounded-md text-center my-2">{this.state.calls}</p>
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <label htmlFor="total" className="flex justify-start mb-2">Total Actions</label>
                  <p className="total border-2 border-black rounded-md text-center my-2">{this.state.total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;