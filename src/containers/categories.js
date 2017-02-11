import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import CreateCategory from './create-category';

class Categories extends Component {
  componentWillMount = () => {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props.dataReducer;
    if (!categories) return null;

    return(
      <div>
        { categories.map(cat => <div>{cat.name}</div>) }
        <br></br>

        <CreateCategory />
      </div>
    )
  }
}

export default connect(state => state, { fetchCategories })(Categories);
