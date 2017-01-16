import { combineReducers } from 'redux';
import articles from './articles';
import article from './article';
import token from './token';

export default combineReducers({
  article,
  articles,
  token
})
