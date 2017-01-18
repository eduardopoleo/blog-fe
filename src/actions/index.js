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

export const createArticle = (values) => {
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url: 'http://localhost:4444/articles',
      data: {
        article: {
          title: values.title,
          text: values.text
        }
      }
    })
    .then((response) => {
      dispatch(
        addArticle(response.data.data)
      )
    }, (error) => {
      console.log(error)
    })
  }
}

const addArticle = (article) => {
  return {
    type: actions.ADD_ARTICLE,
    payload: {
      article
    }
  }
}

export const getFormToken = (dispatch) => {
  axios.get('http://localhost:4444/get_token')
  .then((response) => {
    dispatch(setFormToken(response.data.token))
  })
}

const setFormToken = (token) => {
  return {
    type: actions.SET_FORM_TOKEN,
    payload: {
      token
    }
  }
}
