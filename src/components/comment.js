import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { commenter, body } = this.props;

    return(
      <div>
        <h2>Commenter</h2>
        { commenter }

        <h2>Body</h2>
        <p> { body } </p>
      </div>
    )
  }
}

export default Comment;
