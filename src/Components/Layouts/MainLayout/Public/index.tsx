import * as React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { PrivateHeader } from 'Components/Layouts/Header';
import { FooterPublic } from 'Components/Layouts/FooterPublic';
// import { Grid } from 'material-ui';
import './style.css';
import SideBar from 'Components/Layouts/SideBar';

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
  const { component: Component, isAuthenticated, refreshToken, ...rest } = props;

  return (
    <Route 
      {...rest} 
      exact={true}
      render={matchProps =>
        isAuthenticated !== true ?
          ( <div className="uk-flex-stretch">
            <SideBar />
            <PrivateHeader isAuthenticated={isAuthenticated} />
            <Component {...matchProps} refreshToken={() => refreshToken()}/>
            <div style={{bottom: 0}}>
            <FooterPublic />
            </div>
          </div>)
          : ( <Redirect to={{ pathname: '/home' }} /> )
      }
    />
  );
};

export default withRouter(PublicLayout);