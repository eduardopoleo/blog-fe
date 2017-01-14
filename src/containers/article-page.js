import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';

class ArticlePage extends Component {
  componentWillMount = () => {
  }

  render() {
    return(
      <div>
        This is my article
      </div>
    )
  }
}

export default connect(state => state, { })(ArticlePage);
