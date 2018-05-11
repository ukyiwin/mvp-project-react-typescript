import * as React from 'react';
import { Route, Redirect, withRouter, Link, RouteComponentProps } from 'react-router-dom';
import { User } from 'CustomTypings/schema';
import RightSideBar from 'Components/RightSideBar';
import LeftSideBar from 'Components/LeftSideBar';
import glamorous from 'glamorous';
import Label from 'Components/Label';
import { PrivateHeader, BottomNav } from 'Components/Layouts/Header';

interface DefaultProps {
    component: any;
    path?: string;
    exact?: boolean;
    isAuthenticated: boolean;
    match: object;
    location: object;
    history: object;
    me: User;
    logout: any;
}

const A = glamorous.a({
  fontFamily: 'brandon-grotesque',
  color: '#000000',
});

const ConnectLayout: React.SFC<RouteComponentProps<any> & DefaultProps> = (props) => {
  const { component: Component, isAuthenticated, ...rest } = props;
  return (
    <Route
      {...rest}
      exact={true}
      render={(matctProps) =>
        isAuthenticated ? (
            <>
            <PrivateHeader  me={props.me} isAuthenticated={isAuthenticated} logout={props.logout} />
            <div
              className="columns uk-flex uk-flex-between uk-padding-large@s"
              style={{
                overflow: 'auto',
                position: 'absolute',
                top: '0px',
                right: 0,
                bottom: '10px',
                marginTop: 70,
                paddingTop: 30
              }}
            >
              <div className="column col-3 uk-margin-left uk-visible@m">
                  <LeftSideBar />
              </div>
              <div className="column col-10 uk-margin-small@s uk-width-expand">
                  <Component {...matctProps} />
              </div>
            </div> 
            <BottomNav me={props.me} isAuthenticated={isAuthenticated} logout={props.logout} />
            </>
        ) : (
            <Redirect to={{ pathname: '/' }} />
        )
      }
    />
  );
};

export default withRouter(ConnectLayout);
