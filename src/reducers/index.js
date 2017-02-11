import { combineReducers } from 'redux';
import articles from './articles';
import article from './article';
import comments from './comments';
import categories from './categories';
import selectedCategories from './selected-categories';


export default combineReducers({
  article,
  articles,
  comments,
  categories,
  selectedCategories
})
