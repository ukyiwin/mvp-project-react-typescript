import * as React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import './style.css';
import { PrivateHeader } from 'Components/Layouts/Header';
import { User } from 'CustomTypings/schema';

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

const PublicLayout: React.SFC<DefaultProps> = (props) => {
    const { component: Component, isAuthenticated, exact, refreshToken, ...rest } = props;

    return (
        <Route
            {...rest}
            exact={exact !== null ? exact : true}
            render={(matchProps) =>
                isAuthenticated !== true ? (
                    <React.Fragment>
                      <PrivateHeader  me={props.me} isAuthenticated={isAuthenticated} logout={props.logout} />
                      <Component {...matchProps} refreshToken={refreshToken} />
                    </React.Fragment>
                ) : (
                    <Redirect to={{ pathname: '/home' }} />
                )
            }
        />
    );
};

export default withRouter(PublicLayout);
