import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import ArticleListView from './views/ArticleListView';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ArticleListView />
        </div>
      </Provider>
    );
  }
}

export default App;
