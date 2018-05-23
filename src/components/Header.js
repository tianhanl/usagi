import React from 'react';
import styled from 'styled-components';
import { StyledRouterLink } from './ShardStyledComponents';

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  text-align: center;
  margin: 0;
`;

const Wrapper = styled.header`
  padding: 2rem 0 0.5rem;
`;

const Header = props => {
  const { blogTitle } = props;
  return (
    <Wrapper>
      <Title>
        <StyledRouterLink to={`/`}>{blogTitle}</StyledRouterLink>
      </Title>
    </Wrapper>
  );
};

export default Header;
