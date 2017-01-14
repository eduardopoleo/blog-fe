import actions from '../constans';

const initialState = []

const articles = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_ARTICLES: {
      return action.payload.articles
    }
    default: {
      return state
    }
  }
}

export default articles
