import * as React from 'react';
import { Route, Redirect, withRouter, Link, RouteComponentProps } from 'react-router-dom';
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
                  <div className="">
                  <PrivateHeader  me={props.me} isAuthenticated={isAuthenticated} logout={props.logout} />
                    <div className="columns uk-flex uk-flex-between uk-padding-large@s" style={{paddingTop: 30}}>
                        <div className="column col-3 uk-margin-left uk-visible@m">
                            <LeftSideBar />
                        </div>
                        <div className="column col-10 uk-margin-small@s uk-width-expand">
                            <Component {...matctProps} />
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

export default withRouter(ConnectLayout);
