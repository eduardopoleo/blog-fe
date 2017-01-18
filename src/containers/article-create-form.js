import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createArticle } from '../actions';
import { connect } from 'react-redux';
import { compose } from 'redux';

class ArticleForm extends Component {
  render() {
    const { dispatch, token } = this.props;
    if (!token) return null;

    return (
      <form onSubmit={this.props.handleSubmit(this.props.createArticle)}>
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
const formData = {
  form: 'PostNewArticle'
}

ArticleForm = reduxForm(formData)(ArticleForm)
ArticleForm = connect(null, { createArticle })(ArticleForm)

export default ArticleForm;
