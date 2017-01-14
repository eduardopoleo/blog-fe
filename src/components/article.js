import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions'

class Article extends Component {
  render() {
    const { title, text } = this.props.article;

    return(
      <div>
        <h1>{title}</h1>
        <div>{text}</div>
      </div>
    )
  }
}

export default Article;
