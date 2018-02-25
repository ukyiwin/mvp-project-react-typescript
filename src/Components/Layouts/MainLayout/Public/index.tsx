import * as React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { FooterPublic } from 'Components/Layouts/FooterPublic';
import './style.css';

interface DefaultProps {
  // tslint:disable-next-line:no-any
  component: any;
  path?: string;
  exact?: boolean;
  isAuthenticated: boolean;
  // tslint:disable-next-line:no-any
  refreshToken: any;
  match: object;
  location: object;
  history: object;
}

const PublicLayout: React.SFC<DefaultProps> = (props) => {
  const { component: Component, isAuthenticated, exact, refreshToken, ...rest } = props;

  return (
    <Route 
      {...rest} 
      exact={exact !== null ? exact : true}
      render={matchProps =>
        isAuthenticated !== true ?
          (<React.Fragment>
            <Component {...matchProps} refreshToken={refreshToken}/>
            <div style={{bottom: 0}}>
              <FooterPublic />
            </div>
          </React.Fragment>)
          : ( <Redirect to={{ pathname: '/home' }} /> )
      }
    />
  );
};

export default withRouter(PublicLayout);