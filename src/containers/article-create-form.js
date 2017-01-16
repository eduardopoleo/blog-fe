import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { postArticle } from '../actions';

class ArticleForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(
          (values) => postArticle(values)(this.props.dispatch)
      )}>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <Field name="text" component="textarea" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
ArticleForm = reduxForm({
  form: 'PostNewArticle' // a unique name for this form
})(ArticleForm);

export default ArticleForm;
