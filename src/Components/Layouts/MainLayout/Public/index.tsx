import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
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
}

const PublicLayout: React.SFC<DefaultProps> = (props) => {
  const { component: Component, isAuthenticated, ...rest } = props;

  return (
    <Route 
      {...rest} 
      exact={true}
      render={matctProps =>
        isAuthenticated !== true ?
          ( <div className="uk-flex-stretch">
            <SideBar />
            <PrivateHeader isAuthenticated={isAuthenticated} />
            <Component {...matctProps} />
            <div style={{bottom: 0}}>
            <FooterPublic />
            </div>
          </div>)
          : ( <Redirect to={{ pathname: '/home' }} /> )
      }
    />
  );
};

export default PublicLayout;