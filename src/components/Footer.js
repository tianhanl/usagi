import React from 'react';
import styled from 'styled-components';
import { Link } from '../components/ShardStyledComponents';

const Wrapper = styled.footer`
  padding: 0.5rem;
  color: #9f9f9f;
  text-align: center;
`;

const Footer = props => {
  return (
    <Wrapper>
      Created by <Link href="tianhang.me">TL</Link>
    </Wrapper>
  );
};

export default Footer;
