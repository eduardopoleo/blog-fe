import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions'

class Article extends Component {
  render() {
    return(
      <div>
        <div>{this.props.article.title}</div>
        <div>{this.props.article.text}</div>
        <button onClick={this.props.fetchArticle}>Click me</button>
      </div>
    )
  }
}

export default connect(state => state, { fetchArticle })(Article);
