import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

const ArticleContent = props => {
  const { body } = props.article;
  return <ReactMarkdown source={body} renderers={{ code: CodeBlock }} />;
};

export default ArticleContent;
