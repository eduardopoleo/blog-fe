import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleForm from './article-form';
import CategoryCheckbox from '../components/category-checkbox';
import { fetchCategories, toggleCategoryState, resetSelectedCategories } from '../actions';

class CreateArticle extends Component {
  componentWillMount() {
    if (!this.props.dataReducer.categories.length === 0) return null

    this.props.fetchCategories()
    this.props.resetSelectedCategories()
  }

  render() {
    console.log(this.props.dataReducer.selectedCategories)

    return (
      <div>
        { this.categoriesCheckboxes() }
      <br></br>
        <ArticleForm />
      </div>
    );
  }

  categoriesCheckboxes() {
    return (
      this.props.dataReducer.categories.map(
        cat => <CategoryCheckbox
          name={cat.name}
          id={cat.id}
          toggleCategoryState = {this.props.toggleCategoryState}/>
      )
    )
  }
}

export default connect(state => state, { fetchCategories, toggleCategoryState, resetSelectedCategories })(CreateArticle);
