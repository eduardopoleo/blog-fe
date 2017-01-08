import actions from '../constans';

const initialState = {
  title: "Hey I'm an article",
  text: "Yo are you there"
}

const article = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_ARTICLE: {
      return {
        ...state,
        article: action.payload.article
      }
    }
    default: {
      return state
    }
  }
}

export default article
