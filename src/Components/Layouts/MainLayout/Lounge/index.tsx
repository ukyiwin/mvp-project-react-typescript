import * as React from 'react';
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
// import { FooterPublic } from 'Components/Layouts/FooterPublic';
import { User } from 'CustomTypings/schema';
import './style.scss';

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
    logout: any;
}

const EmptyLayout: React.SFC<RouteComponentProps<any> &DefaultProps> = (props) => {
    const { component: Component, isAuthenticated, ...rest } = props;

    return (
        <Route
            {...rest}
            exact={true}
            render={(matctProps) =>
              isAuthenticated ? (
                  <div className="uk-flex uk-height-1-1 ">
                      <div className="uk-width-expand  uk-height-1-1 ">
                          <Component {...matctProps} />
                      </div>
                  </div>
              ) : (
                  <Redirect to={{ pathname: '/' }} />
              )
            }
        />
    );
};

export default withRouter(EmptyLayout);
