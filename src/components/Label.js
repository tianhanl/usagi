import React from 'react';
import styled from 'styled-components';
const LabelContainer = styled.li`
  background: ${props => `#${props.color}`};
  display: inline-block;
  color: HSLA(0, 0%, 32%, 1);
  padding: 0.25rem 0.5rem;
  margin: 0 0.5em;
  border-radius: 2px;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    opacity: 0.9;
  }
`;

const Label = props => {
  const { handleLabelClick } = props;
  const { color, name, id } = props.label;
  return (
    <LabelContainer color={color} onClick={handleLabelClick(id)}>
      {name}
    </LabelContainer>
  );
};

export default Label;
