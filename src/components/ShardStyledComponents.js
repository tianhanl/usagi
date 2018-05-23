import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PaddingLessUl = styled.ul`
  padding: 0;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const FlexColumnWrapper = FlexWrapper.extend`
  flex-direction: column;
`;

export const StickyMain = styled.div`
  flex: 1 0 80%;
`;

export const StyledLink = styled.a`
  color: #f05967;
  text-decoration: none;
  transition: all 0.1s;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledRouterLink = styled(Link)`
  color: #f05967;
  text-decoration: none;
  transition: all 0.1s;
  &:hover {
    opacity: 0.8;
  }
`;
