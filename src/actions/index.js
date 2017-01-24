import axios from 'axios';
import actions from '../constans';
import { reset } from 'redux-form';
import { browserHistory } from 'react-router';

export const fetchArticle = (id) => {
  return (dispatch, getState) => {
    // Todo this is probably not necesary, but I do not think is to bad either.
    return axios.get(`http://localhost:4444/articles/${id}.json`)
    .then(response => {
      const [article, commentsUrl] = parseResponse(response, id)
      dispatch(displayArticle(article))

      return commentsUrl;
    }).then(commentsUrl => {
      axios.get(commentsUrl).then(response => {
        dispatch(displayComments(response.data.data.map(parseComments)))
      })
    })
  }
}

const parseResponse = (response, id) => {
  const data = response.data.data;
  const commentsUrl = data.relationships.comments.links.related;
  const article = Object.assign(data.attributes, { id })

  return [article, commentsUrl]
}

const parseComments = comment => comment.attributes

const displayArticle = (article) => {
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
          text: values.text
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

const addComment = (comment, articleId) => {
  return {
    type: actions.ADD_COMMENT,
    payload: {
      articleId,
      comment
    }
  }
}
