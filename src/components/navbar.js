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
          {' '}
          <Link to="/new-article">New Article</Link>
          {' '}
          <Link to="/new-category">New Category</Link>
        </header>
        <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
      </div>
    )
  }
}
// this.props.children are children components in the nested form
// <Parent>
//   <Child1>
//   <Child2>
// </Parent>
// This is considered passed as props.

// we need to add the /articles otherwise It'll we'll start getting weird url
export default Navbar;
