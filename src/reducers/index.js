import { combineReducers } from 'redux';
import articles from './articles';
import article from './article';
import comments from './comments';
import categories from './categories';

export default combineReducers({
  article,
  articles,
  comments,
  categories
})
