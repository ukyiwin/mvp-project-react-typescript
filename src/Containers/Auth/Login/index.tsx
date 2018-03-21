import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { ChildProps } from 'react-apollo/types';
import { LOGIN_USER } from 'Graphql/Mutation';
import { User } from 'CustomTypings/schema';
import { validateLogin } from 'Utils/helpers';
import * as UIkit from 'uikit';

import './style.css';
import { AUTH_TOKEN, CURRENT_USER } from '../../../../constants';

interface Props {
    // tslint:disable-next-line:no-any
    login: any;
    // tslint:disable-next-line:no-any
    refreshToken?: any;
    // tslint:disable-next-line:no-any
    client?: any;
}

interface InputProps {
    email: string;
    password: string;
}

interface Response {
    token: string;
    user: User;
}

class Login extends React.Component<RouteComponentProps & Props & ChildProps<Response, InputProps>, {}> {
    state = {
        show: false,
        email: '',
        password: '',
        everFocusedEmail: false,
        everFocusedPassword: false,
        inFocus: '',
        loading: false,
    };

    handleEmailChange = (evt) => {
        this.setState({ email: evt.target.value });
    }

    handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value });
    }

    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        if (!this.canBeSubmitted()) {
            return;
        }
        this.setState({ loading: true });
        const { email, password } = this.state;
        this.props
            .login({
                variables: {
                    email,
                    password,
                },
            })
            .then((result) => {
                const token = result.data.login.token;
                const user = result.data.login.user;
                localStorage.setItem(AUTH_TOKEN, token);
                localStorage.setItem(CURRENT_USER, result.data.login.user);
                this.props.refreshToken(token);
                this.setState({ loading: false });
                if (user.completedProfile === 1) {
                    this.props.history.replace('/add/profile');
                } else {
                    this.props.history.replace('/');
                }
            })
            .catch((err) => {
                this.setState({ loading: false });
                UIkit.notification(`Error: ${err.message}`, { status: 'danger', pos: 'top-right' });
            });
    }

    canBeSubmitted() {
        const errors = validateLogin(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }

    render() {
        const errors = validateLogin(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);

        return (
            <div
                className="uk-flex uk-flex-stretch"
                // tslint:disable-next-line:jsx-boolean-value
                data-uk-grid
                style={{ height: '100vh', backgroundColor: '#ffffff' }}
            >
                <Helmet>
                    <title>Unizonn | Login</title>
                    <meta name="an inclusive community" content="Unizonn login" />
                </Helmet>
                <div className="uk-width-2-5 sideBg uk-visible@m" id="sideBg">
                    <div className="uk-flex uk-flex-stretch uk-flex-middle">.</div>
                </div>
                <div
                    className="uk-container uk-width-3-5@m uk-width-1-1@s uk-flex
          uk-flex-stretch uk-flex-middle uk-box-shadow-small"
                >
                    <form
                        className="uk-form-vertical uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="uk-margin">
                            <h3 className="uk-heading-primary uk-align-center">Login </h3>
                        </div>
                        <div className="uk-margin">
                            <div className="uk-inline uk-width-1-1">
                                <span className="uk-form-icon" uk-icon="icon: user" />
                                <input
                                    className={`uk-input ${errors.password ? 'uk-form-danger' : ''} `}
                                    type="email"
                                    value={this.state.email}
                                    required={true}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-inline uk-width-1-1">
                                <span className="uk-form-icon" uk-icon="icon: lock" />
                                <input
                                    className={`uk-input ${errors.password ? 'uk-form-danger' : ''} `}
                                    type="password"
                                    value={this.state.password}
                                    required={true}
                                    onChange={this.handlePasswordChange}
                                />
                            </div>
                        </div>
                        <div className="uk-margin">
                            <a className={`uk-button uk-button-text}`}>Forgot password?</a>
                        </div>
                        <div className="uk-margin">
                            {this.state.loading ? (
                                <div
                                    className="uk-spinner uk-icon"
                                    data-uk-spinner="ratio: 1"
                                    style={{ color: 'green' }}
                                />
                            ) : (
                                <button
                                    className={`uk-button uk-button-primary uk-width-1-1
                    uk-align-right ${isDisabled ? 'disabled' : 'disabled'}`}
                                    type="submit"
                                >
                                    LOGIN
                                </button>
                            )}
                        </div>
                        <br />
                        <hr className="uk-divider-icon" />
                        <div className="uk-margin">
                            <p className={`uk-button uk-button-text}`}>Don't have an account?</p>
                            <Link
                                className={`uk-button uk-button-secondary
                 uk-align-right`}
                                to="/signup"
                            >
                                Sign up now
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(
    compose(
        withApollo,
        graphql<Response, InputProps, Props>(LOGIN_USER, {
            name: 'login',
        }),
    )(Login),
);
