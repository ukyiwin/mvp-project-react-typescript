import * as React from 'react';
import glamorous from 'glamorous';

const SharedDiv = glamorous.div({
  textAlign: 'center',
  height: '100vh',
  backgroundColor: 'teal'
});

const Step1 = () => {
  return (
    <SharedDiv>
      hi
    </SharedDiv>
  );
};

const Step2 = () => {
  return (
    <SharedDiv>
      hi
    </SharedDiv>
  );
};

const Step3 = () => {
  return (
    <SharedDiv>
      hi
    </SharedDiv>
  );
};

export {
  Step1,
  Step2,
  Step3
};