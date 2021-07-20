import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
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
      mUpdate: 0,
      pUpdate:0,
      call: 0,
      callSub: 0,
      callAdd: 0,
      total: 0,
      resetTrigger: 1
    }
    this.baseState = this.state;
  }

  // recieves the value and id from the input component
  // and updates state, then sets it to localStorage
  calcStats = (value, id) => {
    this.setState((state) => {
      return {[id]: value} 
    });
    this.setState({resetTrigger: this.state.resetTrigger + 1});
    // adds stats to localStorage
    localStorage.setItem(id, value);
  }

  resetState = () => {
    this.setState(this.baseState);
    // const currentState = this.state.apps;
    const resetTrigger = this.state.resetTrigger;
    if (resetTrigger < 1) {
      this.resetState();
    }
  }

  // clears localStorage and input fields, resets states 
  clearStats = (event, form) => {
    if (
      window.confirm (
        'Clear stat tracker? - You will not be able to recover the input items'
      )
    ) {
      window.localStorage.clear();
      this.resetState();
      form.reset();
      console.log('Cleared');
    };
  }

  getStats = () => {
    console.log(window.localStorage.getItem('apps'));
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = window.localStorage.getItem(key);
      console.log(key, value);
      this.setState({[key]: value});
    }
  }

  componentDidMount() {
    this.getStats();
  }

  render() {
    return (
      <form>
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
      </form>
    )
  }
}

export default Main;