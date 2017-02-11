import actions from '../constans';

const initialState = []

const selectedCategories = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_CATEGORY: {
      return newSelectedCategory(state, action.payload.id)
    }
    case actions.RESET_SELECTED_CATEGORIES:{
      return []
    }
    default: {
      return state
    }
  }
}

const newSelectedCategory = (selectedCategories, id) => {
  const catIndex = selectedCategories.indexOf(id);

  if(catIndex === -1) {
    return [ ...selectedCategories, id]
  } else {
    return([
      ...selectedCategories.slice(0, catIndex),
      ...selectedCategories.slice(catIndex + 1)
    ])
  }
}
export default selectedCategories;
