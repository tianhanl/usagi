import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../components/ShardStyledComponents';

const Wrapper = styled.footer`
  padding: 0.5rem;
  color: #9f9f9f;
  text-align: center;
`;

const Footer = props => {
  return (
    <Wrapper>
      Created by <StyledLink href="tianhang.me">TL</StyledLink>
    </Wrapper>
  );
};

export default Footer;
