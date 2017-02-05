import actions from '../constans';

const initialState = []

const categories = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_CATEGORY: {
      return [
        action.payload.category,
        ...state
      ]
    }
    default: {
      return state
    }
  }
}

export default categories;
