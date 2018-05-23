import React from 'react';
import ReactMarkdown from 'react-markdown';

const ArticleContent = props => {
  const { body } = props.article;
  return <ReactMarkdown source={body} />;
};

export default ArticleContent;
