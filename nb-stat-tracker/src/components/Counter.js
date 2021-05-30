import { number } from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button'
import { propTypes } from 'react-bootstrap/esm/Image';

class Counter extends React.Component {
  state = {
    number: 0
  }
  
  PropTypes = {
    incrementCount: propTypes.func
  }

  incrementCount = (e) => {
    if (e.target.id === 'add') {
      this.setState({number: this.state.number + 1});
    } else {
      this.setState({number: this.state.number - 1});
    }
  }

  render() {
    return (
      <div className="container">
        <Button variant="outline-primary" className="add" id="add" onClick={this.incrementCount}>&#43;</Button>{' '}
        <span className="count">{this.state.number}</span>
        <Button variant="outline-danger" className="sub" onClick={this.incrementCount}>&#8722;</Button>{' '}
      </div>
    )
  }
}

export default Counter;