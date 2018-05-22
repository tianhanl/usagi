import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  margin: 0;
  text-align: center;
`;

const Wrapper = styled.header`
  padding: 2rem 0 0.5rem;
`;

const Header = props => {
  const { blogTitle } = props;
  return (
    <Wrapper>
      <Title>{blogTitle}</Title>
    </Wrapper>
  );
};

export default Header;
