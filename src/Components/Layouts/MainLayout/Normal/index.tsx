import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateHeader, PublicHeader } from 'Components/Layouts/Header';
// import { FooterPublic } from 'Components/Layouts/FooterPublic';
import './style.css';
import SideBar from 'Components/Layouts/SideBar';

interface DefaultProps {
  // tslint:disable-next-line:no-any
  component: any;
  path?: string;
  exact?: boolean;
  isAuthenticated: boolean;
}

const EmptyLayout: React.SFC<DefaultProps> = (props) => {
  const { component: Component, isAuthenticated, ...rest } = props;

  return (
    <Route 
      {...rest} 
      exact={true}
      render={matctProps =>
        isAuthenticated ?
          ( <div className="uk-offcanvas-content uk-background-muted uk-height-1-1 ">
            {isAuthenticated ? <PrivateHeader /> : <PublicHeader />}
            <div className="uk-flex uk-height-1-1 ">
              <div className="uk-width-expand  uk-height-1-1 ">
                <Component {...matctProps} />
              </div>
            </div>
            <SideBar />
          </div>)
          : ( <Redirect to={{ pathname: '/home' }} /> )
      }
    />
  );
};

export default EmptyLayout;
