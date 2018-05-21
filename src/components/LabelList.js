import React from 'react';
import { PaddingLessUl } from './ShardStyledComponents';
import Label from './Label';

const LabelList = props => {
  const { labels, handleLabelClick } = props;
  return (
    <PaddingLessUl>
      {labels.map(label => (
        <Label
          key={label.id}
          label={label}
          handleLabelClick={handleLabelClick}
        />
      ))}
    </PaddingLessUl>
  );
};

export default LabelList;
