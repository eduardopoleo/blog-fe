import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions'

class Article extends Component {
  render() {
    return(
      <div>
        <h1>Article Header</h1>
        <div>{this.props.article.title}</div>
        <div>{this.props.article.text}</div>
      </div>
    )
  }
}

export default Article;
