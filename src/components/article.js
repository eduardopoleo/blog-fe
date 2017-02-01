import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Article extends Component {
  render() {
    const { title, text } = this.props.article;
    return(
      <div>
        <h1>{title}</h1>
        <div>{text}</div>
        <Link to={`/articles/${this.props.id}`}>See article</Link>
      </div>
    )
  }


}

export default Article;
