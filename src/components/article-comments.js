import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './comment';

class ArticleComments extends Component {
  render() {
    const { comments } = this.props;
    return(
      <div>
        {comments.map(comment => <Comment commenter={comment.commenter} body={comment.body}/>)}
      </div>
    )
  }
}

export default ArticleComments;
