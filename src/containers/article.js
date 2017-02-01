import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions';
import { Link } from 'react-router';
import CreateComment from './create-comment.js';
import ArticleComments from '../components/article-comments.js';

class ArticlePage extends Component {
  componentWillMount = () => {
    this.props.fetchArticle(this.props.routeParams.id);
  }

  render() {
    const { article } = this.props.dataReducer;
    const comments = article.comments;
    const categories = article.categories;

    return(
      <div>
        { this.categories(categories) }
        <h1>{article.title}</h1>
        <p>{article.text}</p>
        <br/>

        <CreateComment />
        <br />
        <ArticleComments comments={comments}/>
      </div>
    )
  }

  categories(categories) {
    return (
      categories.map(cat => <div>{cat}</div>)
    )
  }
}

export default connect(state => state, { fetchArticle })(ArticlePage);
