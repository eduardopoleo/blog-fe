import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
import Article from '../components/article';

class Articles extends Component {
  componentWillMount = () => {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;
    if (!articles.length) return null;

    return(
      <div>
        {
          articles.map(
            article => <Article key={article.id} article={article.attributes} />
          )
        }
      </div>
    )
  }
}

export default connect(state => state, { fetchArticles })(Articles);
