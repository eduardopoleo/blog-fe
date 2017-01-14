import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions';
import { Link } from 'react-router';

class ArticlePage extends Component {
  componentWillMount = () => {
    this.props.fetchArticle(this.props.routeParams.id);
  }

  render() {
    const { article } = this.props.dataReducer;

    return(
      <div>
        <Link to='/articles'>Back to Articles</Link>
        <h1>{article.title}</h1>
        <p>{article.text}</p>
      </div>
    )
  }
}

export default connect(state => state, { fetchArticle })(ArticlePage);
