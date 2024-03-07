import React, { Component } from 'react';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <strong>Apna Cart</strong>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
