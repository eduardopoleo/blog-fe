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
    case actions.SHOW_COMMENTS: {
      return action.payload.comments
    }
    default: {
      return state
    }
  }
}

export default comments
