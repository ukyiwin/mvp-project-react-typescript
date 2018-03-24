import * as React from 'react';
import { Route, Redirect, withRouter, Link } from 'react-router-dom';
import {} from 'react-apollo';
import './style.css';
import { User } from 'CustomTypings/schema';
import ConnectBox from 'Components/ConnectBox';
import TopInterest from 'Components/TopInterest';
import glamorous from 'glamorous';
import Label from 'Components/Label';

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
                    <div className="uk-flex uk-padding-small@s">
                        <div className="uk-width-1-5 uk-margin-right uk-margin-left uk-visible@m">
                            <div className="uk-card uk-width-1-1" style={{ marginBottom: 10, padding: 0 }}>
                                <Label text="Top Interests" />
                                <TopInterest />
                            </div>
                            <div className="uk-card uk-card-default uk-width-1-1 uk-padding-small">
                                <div>
                                    <p>Copyright @ 2018, Unizonn</p>
                                </div>
                                <ul className="listItem uk-text-center">
                                    <li>
                                        <A href="#">Terms</A>
                                    </li>
                                    <li>
                                        <A color={'#000'} href="#">
                                            Privacy
                                        </A>
                                    </li>
                                    <li>
                                        <A href="#">About</A>
                                    </li>
                                    <li>
                                        <A href="#">Support</A>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="uk-flex uk-width-expand">
                            <Component {...matctProps} />
                        </div>
                        <div
                            className="uk-width-1-5 uk-margin-right uk-margin-left uk-visible@m"
                            style={{ marginBottom: 10 }}
                        >
                            {!isAuthenticated ? (
                                <div className="uk-card uk-card-default uk-card-body uk-width-1-1 uk-padding-small">
                                    <h3 className="uk-card-title">Hello {props.me ? props.me.firstname : ''}</h3>
                                    <p>
                                        Please signup or login to get the Unizonn experience. It will only take a few
                                        steps
                                    </p>
                                    <Link to="/login" className="uk-button uk-button-primary">
                                        Login
                                    </Link>
                                </div>
                            ) : null}
                            <ConnectBox />
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
