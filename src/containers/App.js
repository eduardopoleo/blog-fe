import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Article from './article';
import reducer from '../reducers';
import thunk from 'redux-thunk';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return(
      <div>
        <Provider store={store}>
          <Article />
        </Provider>
      </div>
    )
  }
}
