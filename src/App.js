import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Header from './components/Header';
import ArticleListView from './views/ArticleListView';
import styled from 'styled-components';
import {
  FlexColumnWrapper,
  StickyMain
} from './components/ShardStyledComponents';

const store = configureStore();

const Wrapper = FlexColumnWrapper.extend`
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #515151;
  margin-top: 0;
  min-height: 99vh;
  box-sizing: border-box;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <Header blogTitle={'Usagi'} />
          <StickyMain>
            <ArticleListView />
          </StickyMain>
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
