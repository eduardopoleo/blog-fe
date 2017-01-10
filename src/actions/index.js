import axios from 'axios';
import constants from '../constans';

export const fetchArticle = () => {
  return (dispatch) => {
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
