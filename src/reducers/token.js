import actions from '../constans';

const initialState = ''

const articles = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_FORM_TOKEN: {
      return action.payload.token
    }
    default: {
      return state
    }
  }
}

export default articles
