import actions from '../constans';

const initialState = {
  title: "",
  text: ""
}

const article = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_ARTICLE: {
      return {
        ...state,
        ...action.payload.article
      }
    }
    default: {
      return state
    }
  }
}

export default article;
