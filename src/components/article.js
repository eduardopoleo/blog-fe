import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions'

class Article extends Component {
  render() {
    const { title, text } = this.props.article;
    
    return(
      <div>
        <h1>Article Header</h1>
        <div>{title}</div>
        <div>{text}</div>
      </div>
    )
  }
}

export default Article;
