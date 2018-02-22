import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateHeader } from 'Components/Layouts/Header';
// import { FooterPublic } from 'Components/Layouts/FooterPublic';
import './style.css';
import SideBar from 'Components/Layouts/SideBar';
import Calendar from 'Components/Calender';

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
        isAuthenticated ?
          ( <div className="uk-offcanvas-content uk-background-muted">
            <PrivateHeader isAuthenticated={isAuthenticated} />
            <div className="uk-flex uk-padding-large uk-padding-remove-vertical">
              <div className="uk-width-1-5 uk-margin-right uk-visible@m">
                <div className="uk-card uk-card-default uk-card-body uk-width-1-1">
                  <h3 className="uk-card-title">Default</h3>
                  <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                     adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="uk-width-expand">
                <Component {...matctProps} />
              </div>
              <div className="uk-width-1-5 uk-margin-left uk-visible@m">
                <div className="uk-card uk-card-default uk-card-body uk-width-1-1">
                    <h3 className="uk-card-title">Default</h3>
                    <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                </div>
                <Calendar
                />
              </div>
            </div>
            <SideBar />
          </div>)
          : ( <Redirect to={{ pathname: '/' }} /> )
      }
    />
  );
};

export default PublicLayout;
