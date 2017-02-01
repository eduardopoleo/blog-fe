import actions from '../constans';

const initialState = []

  const comments = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_COMMENT: {
      return [
        action.payload.comment,
        ...state
      ]
    }
    default: {
      return state
    }
  }
}

export default comments
