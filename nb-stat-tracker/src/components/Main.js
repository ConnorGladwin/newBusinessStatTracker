// TODO 
// Add functionality to display weighted totals 
// Create a way to check input id & calculate totals

import React from 'react';
import PropTypes from 'prop-types'
import Inputs from './Inputs';
import Outputs from './Outputs';

class Main extends React.Component {

  static propTypes = {
    apps: PropTypes.number,
    contract: PropTypes.number,
    pening: PropTypes.number,
    payout: PropTypes.number,
    calcPayout: PropTypes.number,
    update: PropTypes.number,
    calls: PropTypes.number,
    total: PropTypes.number,
    calcStats: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      apps: 0,
      contract: 0,
      pending: 0,
      payout: 0,
      call: 0,
      callSub: 0,
      callAdd: 0,
      total: 0
    }
  }

  calcStats = (value, id) => {
    this.setState((state) => {
      return {[id]: value}
    });
  }

  render() {
    return (
      <div className="text-xl">
        <div className="flex mx-14 my-14">
         <Inputs
          apps={this.state.apps}
          contract={this.state.contract}
          payout={this.state.payout}
          pending={this.state.pending}
          mUpdate={this.state.mUpdate}
          pUpdate={this.state.pUpdate}
          calls={this.state.call}
          calcStats={this.calcStats}
         />
         <Outputs
          apps={this.state.apps}
          contract={this.state.contract}
          payout={this.state.payout}
          pending={this.state.pending}
          mUpdate={this.state.mUpdate}
          pUpdate={this.state.pUpdate}
          call={this.state.call}
          callSub={this.state.callSub}
          callAdd={this.state.callAdd}
         />
        </div>
      </div>
    )
  }
}

export default Main;