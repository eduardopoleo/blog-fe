import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createCategory } from '../actions';
import { connect } from 'react-redux';

class CategoryForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.createCategory)}>
        <div>
          <Field name="name" label="name" component='input' type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const formData = {
  form: 'CategoryForm'
}

CategoryForm = reduxForm(formData)(CategoryForm)
CategoryForm = connect(null, { createCategory })(CategoryForm)

export default CategoryForm;
