// TODO 
// 

import React from 'react';
import Inputs from './Inputs';
import Outputs from './Outputs';

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
         <Inputs />
         <Outputs />
        </div>
      </div>
    )
  }
}

export default Main;