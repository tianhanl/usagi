import React from 'react';
import styled from 'styled-components';
import ArticleListItem from './ArticleListItem';
import { PaddingLessUl } from './ShardStyledComponents';
import { TransitionMotion, spring, presets } from 'react-motion';
const Notice = styled.p`
  text-align: center;
  color: #a8a8a8;
`;

class ArticleList extends React.Component {
  getDefaultStyles = () => {
    const { articles } = this.props;
    return articles.map(article => ({
      key: article.id,
      style: {
        height: 0,
        opacity: 1
      },
      data: article
    }));
  };

  getStyles = () => {
    const { articles } = this.props;
    return articles.map(article => ({
      key: article.id,
      style: {
        height: spring(60, presets.gentle),
        opacity: spring(1, presets.gentle)
      },
      data: article
    }));
  };

  willEnter = () => ({
    height: 0,
    opacity: 1
  });

  render() {
    const { articles } = this.props;
    if (!articles || !articles.length) {
      return <Notice>Well, empty article list</Notice>;
    }
    return (
      <TransitionMotion styles={this.getStyles} willEnter={this.willEnter}>
        {styles => (
          <PaddingLessUl>
            {styles.map(({ key, style, data }) => (
              <ArticleListItem style={style} key={key} article={data} />
            ))}
          </PaddingLessUl>
        )}
      </TransitionMotion>
    );
  }
}

export default ArticleList;
