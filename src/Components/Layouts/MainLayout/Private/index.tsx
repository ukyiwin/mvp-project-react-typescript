import * as React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Calendar from 'Components/Calender';
import './style.css';
import { User } from 'CustomTypings/schema';
import InterestItemSlim from 'Components/InterestItemSlim';
import ConnectBox from 'Components/ConnectBox';

interface DefaultProps {
  // tslint:disable-next-line:no-any
  component: any;
  path?: string;
  exact?: boolean;
  isAuthenticated: boolean;
  match: object;
  location: object;
  history: object;
  me?: User;
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
                     adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
                <InterestItemSlim url="hghjhj" name="Csharp" />
                <InterestItemSlim url="hghjhj" name="Csharp" />
                <InterestItemSlim url="hghjhj" name="Csharp" />
              </div>
              <div className="uk-width-expand">
                <Component {...matctProps} />
              </div>
              <div className="uk-width-1-5 uk-margin-right uk-margin-left uk-visible@m">
                <div className="uk-card uk-card-default uk-card-body uk-width-1-1 uk-padding-small">
                    <h3 className="uk-card-title">Hi {props.me ? props.me.firstname : ''}</h3>
                    <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
                <ConnectBox />
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