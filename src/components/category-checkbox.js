import React, { Component } from 'react';

class CategoryCheckbox extends Component {
  render() {
    const { name, id, toggleCategoryState } = this.props;
    
    return(
      <div>
        <input type='checkbox' onClick={() => toggleCategoryState(id)}/>
        <label>{ this.props.name }</label>
      </div>
    )
  }
}

export default CategoryCheckbox;
