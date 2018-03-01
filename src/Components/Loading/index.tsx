import * as React from 'react';

var Spinner = require('react-spinkit');

export const LoadingComponent = () => {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Spinner name="double-bounce" />
    </div>
  );
};

export default LoadingComponent;