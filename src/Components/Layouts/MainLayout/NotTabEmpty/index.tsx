import * as React from 'react';
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
// import { FooterPublic } from 'Components/Layouts/FooterPublic';
import { User } from 'CustomTypings/schema';
import { PrivateHeader } from 'Components/Layouts/Header';

interface DefaultProps {
    // tslint:disable-next-line:no-any
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

const NoTabLayout: React.SFC<RouteComponentProps<any> & DefaultProps> = (props) => {
    const { component: Component, isAuthenticated, exact, ...rest} = props;

    return (
        <Route
            {...rest}
            exact={exact}
            render={(matctProps) =>
              isAuthenticated ? (
                  <div className="uk-width-1-1 uk-height-1-1 ">
                    <PrivateHeader  me={props.me} isAuthenticated={isAuthenticated} logout={props.logout} />
                    <div className="uk-width-1-1 uk-flex uk-height-1-1">
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

export default withRouter(NoTabLayout);
