import React from 'react';
import { PaddingLessUl } from './ShardStyledComponents';
import Label from './Label';

const LabelListContainer = PaddingLessUl.extend`
  text-align: center;
`;

const LabelList = props => {
  const { labels, handleLabelClick } = props;
  return (
    <LabelListContainer>
      {labels.map(label => (
        <Label
          key={label.id}
          label={label}
          handleLabelClick={handleLabelClick}
        />
      ))}
    </LabelListContainer>
  );
};

export default LabelList;
