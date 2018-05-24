import React from 'react';
import Spinner from 'react-spinkit';
import styled from 'styled-components';

const StyledSpinner = styled(Spinner)`
  margin: 20% auto;
  width: 60;
  height: 60;
`;

const LoadingIndicator = props => {
  return <StyledSpinner name="folding-cube" color={'#F05967'} {...props} />;
};

export default LoadingIndicator;
