import axios from 'axios';
import actions from '../constans';
import { reset } from 'redux-form';
import { browserHistory } from 'react-router';
import { parseArticleResponse } from './action-helpers';

export const fetchArticle = (id) => {
  return (dispatch, getState) => {
    // Todo this is probably not necesary, but I do not think is to bad either.
    return axios.get(`http://localhost:4444/articles/${id}.json`)
    .then(response => {
      const article = parseArticleResponse(response)
      dispatch(showArticle(article))
    })
  }
}

const showArticle = (article) => {
  return {
    type: actions.SHOW_ARTICLE,
    payload: {
      article
    }
  }
}

const displayComments = (comments) => {
  return {
    type: actions.SHOW_COMMENTS,
    payload: {
      comments
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
          text: values.text,
          category_ids: getState().dataReducer.selectedCategories
        }
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      const data = response.data.data;
      dispatch(addArticle(data));
      browserHistory.push(`/articles/${data.id}`);
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

export const createComment = (values) => {
  return (dispatch, getState) => {
    const articleId = getState().dataReducer.article.id;
    return axios({
      method: 'post',
      url: `http://localhost:4444/articles/${articleId}/comments`,
      data: {
        comment: {
          commenter: values.commenter,
          body: values.body
        }
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      dispatch(reset('CreateNewComment'))
      dispatch(addComment(response.data.data.attributes))
    }, (error) => {
      console.log(error)
    })
  }
}

const addComment = (comment) => {
  return {
    type: actions.ADD_COMMENT,
    payload: comment
  }
}

export const createCategory = (values) => {
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url: 'http://localhost:4444/categories',
      data: {
        category: {
          name: values.name,
        }
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      dispatch(reset('CategoryForm'))
      dispatch(addCategory(response.data.name));
    }, (error) => {
      console.log(error)
    })
  }
}

const addCategory = (category) => {
  return {
    type: actions.ADD_CATEGORY,
    payload: { category }
  }
}

export const fetchCategories = () => {
  return dispatch => {
    return axios.get('http://localhost:4444/categories.json')
    .then(response => {
      console.log(response)
      dispatch(
        displayCategories(
          response.data.data.map(cat => {
            return(
              { name: cat.attributes.name, id: cat.id }
            )
          })
        )
      )
    })
  }
}

const displayCategories = (categories) => {
  return {
    type: actions.SHOW_CATEGORIES,
    payload: {
      categories
    }
  }
}

export const toggleCategoryState = (id) => {
  return {
    type: actions.TOGGLE_CATEGORY,
    payload: {
      id
    }
  }
}

export const resetSelectedCategories = () => {
  return {
    type: actions.RESET_SELECTED_CATEGORIES
  }
}
