import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Articles from './articles';
import reducer from '../reducers';
import thunk from 'redux-thunk';

// Connect by default assumes that mapActionsToProps is a regular action creator
// We need thunk to unwrap this and allow functions.
let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return(
      <div>
        <Provider store={store}>
          <Articles />
        </Provider>
      </div>
    )
  }
}
