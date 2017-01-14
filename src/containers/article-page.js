import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions';

class ArticlePage extends Component {
  componentWillMount = () => {
    this.props.fetchArticle(this.props.routeParams.id);
  }

  render() {
    const { article } = this.props.dataReducer;

    return(
      <div>
        <h1>{article.title}</h1>
        <p>{article.text}</p>
      </div>
    )
  }
}

export default connect(state => state, { fetchArticle })(ArticlePage);
