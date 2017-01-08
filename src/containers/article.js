import React, { Component } from 'react';
import { connect } from 'react-redux';

class Article extends Component {
  render() {
    return(
      <div>
        <div>{this.props.article.title}</div>
        <div>{this.props.article.text}</div>
      </div>
    )
  }
}

export default connect(state => state)(Article);
