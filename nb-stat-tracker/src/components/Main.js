import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Inputs from './Inputs';
import Outputs from './Outputs';
import { reset } from '../functions'

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

  // recieves the value and id from the input component
  // and updates state, then sets it to localStorage
  calcStats = (value, id) => {
    this.setState((state) => {
      return {[id]: value}
    });
    // adds stats to localStorage
    localStorage.setItem(id, value);
  }

  clearStats = event => {
    if (
      window.confirm (
        'Clear stat tracker? - You will not be able to recover the input items'
      )
    ) {
      window.localStorage.clear();
      console.log('Cleared');
    };
  }

  render() {
    return (
      <div>
        <Navbar 
          clearStats={this.clearStats}
        />
        <div className="text-xl">
          <div className="flex mx-14 my-14">
          <Inputs
            apps={this.state.apps}
            contract={this.state.contract}
            payout={this.state.payout}
            pending={this.state.pending}
            mUpdate={this.state.mUpdate}
            pUpdate={this.state.pUpdate}
            call={this.state.call}
            callAdd={this.state.callAdd}
            callSub={this.state.callSub}
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
      </div>
    )
  }
}

export default Main;