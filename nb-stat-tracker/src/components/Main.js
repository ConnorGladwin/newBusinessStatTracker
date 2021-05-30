// TODO 
// Add functionality to display weighted totals 
// Create a way to check input id & calculate totals

import React from 'react';
import PropTypes from 'prop-types'
import Inputs from './Inputs';
import Outputs from './Outputs';

class Main extends React.Component {

  state = {
    apps: 0,
    contract: 0,
    pening: 0,
    payout: 0,
    calcPayout: 0,
    update: 0,
    calls: 0,
    total: 0
  }

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

  calcStats = (value, id) => {
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <div className="text-xl">
        <div className="flex mx-14 my-14">
         <Inputs
          app={this.state.apps}
          contract={this.state.contract}
          payout={this.state.payout}
          pending={this.state.payout}
          update={this.state.update}
          calls={this.state.calls}
          calcStats={this.calcStats}
         />
         <Outputs
          apps={this.state.apps}
          contract={this.state.contract}
         />
        </div>
      </div>
    )
  }
}

export default Main;