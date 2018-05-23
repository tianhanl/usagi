import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './configureStore';
import Header from './components/Header';
import ArticleListView from './views/ArticleListView';
import {
  FlexColumnWrapper,
  StickyMain
} from './components/ShardStyledComponents';
import Footer from './components/Footer';

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
        <Router>
          <Wrapper>
            <Header blogTitle={'Usagi'} />
            <StickyMain>
              <Switch>
                <Route exact path="/" component={ArticleListView} />
              </Switch>
            </StickyMain>
            <Footer />
          </Wrapper>
        </Router>
      </Provider>
    );
  }
}

export default App;
