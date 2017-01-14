import axios from 'axios';
import actions from '../constans';

export const fetchArticle = (id) => {
  return (dispatch, getState) => {
    const articles = getState().dataReducer.articles;
    let article = articles.find(article => article.id === id);

    if (article) {
      dispatch(displayArticle(article.attributes));
      return null;
    }

    return axios.get(`http://localhost:4444/articles/${id}.json`)
    .then((response) => {
      dispatch(
        displayArticle(response.data.data.attributes)
      )
    })
  }
}

export const displayArticle = (article) => {
  return {
    type: actions.SHOW_ARTICLE,
    payload: {
      article
    }
  }
}

export const fetchArticles = () => {
  return dispatch => {
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
