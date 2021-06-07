import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="text-xl">
        <nav className="navbar navbar-expand-md navbar-light bg-light w-full px-4 text-xl">
          <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">New Business Stats</span>
          </nav>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item px-1 py-2 mr-2">
                <button className="btn btn-outline-success" id="emailBtn" href="" onClick={e => this.props.clearStats()}>Coming Soon</button>
              </li>
              <li className="nav-item px-1 py-2">
                <button className="btn btn-outline-danger" id="clearBtn" href="" onClick={e => this.props.clearStats()}>Clear Stats</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;