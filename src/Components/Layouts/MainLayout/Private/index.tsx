import * as React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Calendar from 'Components/Calender';
import './style.css';

interface DefaultProps {
  // tslint:disable-next-line:no-any
  component: any;
  path?: string;
  exact?: boolean;
  isAuthenticated: boolean;
  match: object;
  location: object;
  history: object;
}

const PublicLayout: React.SFC<DefaultProps & Response> = (props) => {
  const { component: Component, isAuthenticated, ...rest } = props;

  return (
    <Route 
      {...rest} 
      exact={true}
      render={matctProps =>
        isAuthenticated ?
          ( <div className="uk-flex uk-padding-small">
              <div className="uk-width-1-5 uk-margin-right uk-margin-left uk-visible@m">
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
              <div className="uk-width-1-5 uk-margin-right uk-margin-left uk-visible@m">
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
            </div> )
          : ( <Redirect to={{ pathname: '/' }} /> )
      }
    />
  );
};

export default withRouter(PublicLayout);