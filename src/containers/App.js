import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import dataReducer from '../reducers';

import Navbar from '../components/navbar';
import Articles from './articles';
import Article from './article';
import NewArticle from '../components/new-article';
import Home from '../components/home';

const reducer = combineReducers({
  dataReducer,
  routing: routerReducer
})
// Connect by default assumes that mapActionsToProps is a regular action creator
// We need thunk to unwrap this and allow functions.
let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer);
const history = syncHistoryWithStore(browserHistory, store)

export default class App extends Component {
  // Nested routes have to follow the nested structure of the app
  render() {
    return(
      <div>
        <Provider store={store}>
          <Router history={history}>
            <Route path='/' component={Navbar}>
              <IndexRoute component={Home} />
              <Route path='/articles' component={Articles} />
              <Route path='/articles/:id' component={Article} />
              <Route path='/new-article' component={NewArticle} />
            </Route>
          </Router>
        </Provider>
      </div>
    )
  }
}
