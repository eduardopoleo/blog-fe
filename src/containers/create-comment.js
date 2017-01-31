import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createComment } from '../actions';
import { connect } from 'react-redux';

class CommentForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.createComment)}>
        <div>
          <Field name="commenter" label="Commenter" component={renderInput} type="text"/>
        </div>
        <div>
          <Field name="body" label="Body" component={renderTextarea} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const renderInput = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

const renderTextarea = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} type={type}/>
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)
// Decorate the form component

function validate(values) {
  const errors = {};
  if (!values.commenter || values.commenter.trim() === '') {
    errors.commenter = 'Your name is required';
  }

  if (!values.body || values.body.trim() === '') {
    errors.body = 'Enter body';
  }

  return errors;
}

const formData = {
  form: 'CreateNewComment',
  validate
}

CommentForm = reduxForm(formData)(CommentForm)
CommentForm = connect(null, { createComment })(CommentForm)

export default CommentForm;
