import styled from 'styled-components';

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
