import React from 'react';
import ViewError from './viewError';

const BlueScreen = () => {
  return (
    <ViewError
      heading={'Something went wrong 😢'}
      subheading={
        'Sorry about the technical issues. We have been notified of the problem and should resolve it soon.'
      }
      refresh
    />
  );
};

export default BlueScreen;