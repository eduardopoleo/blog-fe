import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Article from './article';
import reducer from '../reducers';

const store = createStore(reducer);

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
