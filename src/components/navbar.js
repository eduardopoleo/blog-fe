import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          Links:
          {' '}
          <Link to="/">Home</Link>
          {' '}
          <Link to="/articles">Articles</Link>
        </header>
      </div>
    )
  }
}

export default Navbar;
