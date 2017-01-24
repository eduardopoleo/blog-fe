import { combineReducers } from 'redux';
import articles from './articles';
import article from './article';
import comments from './comments';

export default combineReducers({
  article,
  articles,
  comments
})
