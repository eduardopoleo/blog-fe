import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createComment } from '../actions';
import { connect } from 'react-redux';

class CommentForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.createComment)}>
        <div>
          <label htmlFor="title">Your Name</label>
          <Field name="commenter" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="text">Comment</label>
          <Field name="body" component="textarea" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
const formData = {
  form: 'CreateNewComment'
}

CommentForm = reduxForm(formData)(CommentForm)
CommentForm = connect(null, { createComment })(CommentForm)

export default CommentForm;
