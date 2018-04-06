import * as React from 'react';
import { Route, Redirect, withRouter, Link, RouteComponentProps } from 'react-router-dom';
import { User } from 'CustomTypings/schema';
import RightSideBar from 'Components/RightSideBar';
import LeftSideBar from 'Components/LeftSideBar';
import glamorous from 'glamorous';
import Label from 'Components/Label';
import { PrivateHeader } from 'Components/Layouts/Header';
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
    me: User;
    logout: any;
}

const A = glamorous.a({
    fontFamily: 'brandon-grotesque',
    color: '#000000',
});

const PrivateLayout: React.SFC<RouteComponentProps<any> & DefaultProps> = (props) => {
    const { component: Component, isAuthenticated, ...rest } = props;

    return (
        <Route
            {...rest}
            exact={true}
            render={(matctProps) =>
                isAuthenticated ? (
                  <div className="">
                  <PrivateHeader  me={props.me} isAuthenticated={isAuthenticated} logout={props.logout} />
                    <div className="uk-flex uk-flex-center uk-flex-around uk-width-1-1" style={{paddingTop: 30}}>
                        <div className="uk-width-1-5 uk-margin-large-left uk-margin-small-right uk-visible@m">
                            <LeftSideBar />
                        </div>
                        <div className="uk-margin-small@s uk-width-expand">
                            <Component {...matctProps} />
                        </div>
                        <div
                            className="uk-width-1-5 uk-margin-large-right uk-margin-small-left uk-visible@m"
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
