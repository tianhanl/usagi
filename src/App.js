import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Header from './components/Header';
import ArticleListView from './views/ArticleListView';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header blogTitle={'Usagi'} />
          <ArticleListView />
        </div>
      </Provider>
    );
  }
}

export default App;
