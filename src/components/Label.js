import React from 'react';
import styled from 'styled-components';

const LabelContainer = styled.li`
  background: ${props => props.color};
  color: HSLA(0, 0%, 32%, 1);
  padding: 0.25rem 0.5rem;
  border-radius: 10%;
  text-align: center;
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
