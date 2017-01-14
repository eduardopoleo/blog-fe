import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
import Article from '../components/article';

class Articles extends Component {
  componentWillMount = () => {
    this.props.fetchArticles();
  }

  render() {
    if (!this.props.articles.length) return null
    return(
      <div>
        {this._articles()}
      </div>
    )
  }

  _articles() {
    return (
      this.props.articles.map((article) => {
        return (
          <Article key={article.id} article={article.attributes} />
        )
      })
    )
  }
}

export default connect(state => state, { fetchArticles })(Articles);
