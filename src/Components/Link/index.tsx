//tslint:disable
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { createLocation } from 'history';

interface Props {
  onClick?: any;
  to: string | object;
  replace: boolean;
  history: object;
  location: any;
  staticContext: any;
  match: any;
}

export default withRouter(
  ({ staticContext, history, location, match, ...rest }: Props) => (
    <Link
      {...rest}
      onClick={(evt: any) => {
        if(rest.onClick) { rest.onClick(evt); }
        if(evt.metaKey || evt.ctrlKey) { return; }
        if (window.appUpdateAvailable === true) {
          evt.preventDefault();
          // This is copied from react-router's <Link /> component and is basically what it does internally
          const location =
            typeof rest.to === 'string'
              ? createLocation(rest.to, null, null, history.location)
              : rest.to;
          return (window.location = history.createHref(location));
        }
      }}
    />
  )
);
