import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/styles/prism';

const CodeBlock = props => {
  const { value, language } = props;
  return (
    <SyntaxHighlighter language={language} style={atomDark}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
