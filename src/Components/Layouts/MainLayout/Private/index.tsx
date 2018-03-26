import * as React from 'react';
import { Route, Redirect, withRouter, Link } from 'react-router-dom';
import {} from 'react-apollo';
import './style.css';
import { User } from 'CustomTypings/schema';
import RightSideBar from 'Components/RightSideBar';
import LeftSideBar from 'Components/LeftSideBar';
import glamorous from 'glamorous';
import Label from 'Components/Label';
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
    me?: User;
    logout: any;
}

const A = glamorous.a({
    fontFamily: 'brandon-grotesque',
    color: '#000000',
});

const PrivateLayout: React.SFC<DefaultProps & Response> = (props) => {
    const { component: Component, isAuthenticated, ...rest } = props;

    return (
        <Route
            {...rest}
            exact={true}
            render={(matctProps) =>
                isAuthenticated ? (
                  <div className="">
                  <PrivateHeader  me={props.me} isAuthenticated={isAuthenticated} logout={props.logout} />
                    <div className="columns uk-flex uk-padding-large@s uk-padding">
                        <div className="column col-3 uk-margin-left uk-visible@m">
                            <LeftSideBar user={props.me} />
                        </div>
                        <div className="column col-7 uk-width-expand">
                            <Component {...matctProps} />
                        </div>
                        <div
                            className="column col-3 uk-margin-right uk-visible@m"
                            style={{ marginBottom: 10 }}
                        >
                            {!isAuthenticated ? (
                                <div 
                                  className="uk-card uk-card-default uk-card-body uk-width-1-1 uk-padding-small"
                                  style={{marginBottom: 10}}
                                >
                                    <h3 className="uk-card-title">Hello</h3>
                                    <p>
                                        Please signup or login to get the Unizonn experience. It will only take a few
                                        steps
                                    </p>
                                    <Link to="/login" className="uk-button uk-button-primary">
                                        Login
                                    </Link>
                                </div>
                            ) : null}
                            <RightSideBar />
                        </div>
                    </div>
                  </div>
                ) : (
                    <Redirect to={{ pathname: '/' }} />
                )
            }
        />
    );
};

export default withRouter(PrivateLayout);
