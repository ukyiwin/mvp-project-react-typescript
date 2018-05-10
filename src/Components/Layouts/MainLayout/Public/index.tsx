import * as React from 'react';
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { PublicHeader } from 'Components/Layouts/Header';
import { User } from 'CustomTypings/schema';
import './style.scss';

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
    me?: User;
    logout: any;
}

const PublicLayout: React.SFC<RouteComponentProps<any> & DefaultProps> = (props) => {
    const { component: Component, isAuthenticated, exact, refreshToken, ...rest } = props;

    return (
        <Route
            {...rest}
            exact={exact !== null ? exact : true}
            render={(matchProps) =>
                isAuthenticated !== true ? (
                    <div className="uk-position-relative">
                      <PublicHeader me={props.me} isAuthenticated={isAuthenticated} logout={props.logout} />
                      <Component {...matchProps} refreshToken={refreshToken} />
                    </div>
                ) : (
                    <Redirect to={{ pathname: '/' }} />
                )
            }
        />
    );
};

export default withRouter(PublicLayout);
