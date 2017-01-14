import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Articles from './articles';
import Article from './article-page';
import Navbar from '../components/navbar';
import dataReducer from '../reducers';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

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
  render() {
    return(
      <div>
        <Provider store={store}>
          <Router history={history}>
            <Route path='/' component={Navbar}/>
            <Route path='/articles' component={Articles} />
            <Route path='/articles/:id' component={Article} />
          </Router>
        </Provider>
      </div>
    )
  }
}
