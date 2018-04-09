import React from 'react';
import { withRouter } from 'react-router';
import { Wrapper } from './style';

const AppViewWrapperPure = (props: any): any => (
  // Note: This ID is needed to make infinite scrolling work
  // DO NOT REMOVE IT
  <Wrapper {...props} id="scroller-for-thread-feed">
    {props.children}
  </Wrapper>
);

const AppViewWrapper = withRouter(AppViewWrapperPure);
export default AppViewWrapper;
