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
    const { article, comments } = this.props.dataReducer;
    if (!comments) return null;
    
    return(
      <div>
        <Link to='/articles'>Back to Articles</Link>
        <h1>{article.title}</h1>
        <p>{article.text}</p>
        <br />

        <CreateComment />
        <br />
        <ArticleComments comments={comments}/>
      </div>
    )
  }
}

export default connect(state => state, { fetchArticle })(ArticlePage);
