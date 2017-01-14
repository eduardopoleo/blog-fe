import { combineReducers } from 'redux';
import articles from './articles';
import article from './article';

export default combineReducers({
  article,
  articles
})
