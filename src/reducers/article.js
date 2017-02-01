import actions from '../constans';

const initialState = {
  title: "",
  text: "",
  categories: [],
  comments: []
}

const article = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_ARTICLE: {
      return {
        ...state,
        ...action.payload.article
      }
    }
    case actions.ADD_COMMENT: {
      return {
        ...state,
        comments: [
          action.payload,
          ...state.comments,
        ]
      }
    }
    default: {
      return state
    }
  }
}

export default article;
