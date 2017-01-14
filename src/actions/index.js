import axios from 'axios';
import actions from '../constans';

export const fetchArticle = () => {
  // when trying to dispatch a function (which is what connect will do)
  // instead it will call the function and pass dispatch to the returning function
  // that is why we need this return
  return (dispatch) => {
    // now we return a promise because that's what axios does when doing async
    // calls. Axios probably does this because is the easiest way to handle async
    // stuff.
    // thunk does not care it will unwrap and return the value of the dispatched object.

    // we could potentially dispatch then dispatch ...etc but if we get into
    // complicated flows like this then we might considered sagas.
    return axios.get('http://localhost:4444/articles/4.json')
    .then((response) => {
      dispatch(
        displayArticle(response.data.data.attributes)
      )
    })
  }
}

const displayArticle = (article) => {
  return {
    type: constants.SHOW_ARTICLE,
    payload: {
      article
    }
  }
}

export const fetchArticles = () => {
  return (dispatch) => {
    return axios.get('http://localhost:4444/articles.json')
    .then((response) => {
      dispatch(
        displayArticles(response.data.data)
      )
    })
  }
}

const displayArticles = (articles) => {
  return {
    type: actions.SHOW_ARTICLES,
    payload: {
      articles
    }
  }
}
