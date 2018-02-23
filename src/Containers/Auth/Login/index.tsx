import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import { ChildProps } from 'react-apollo/types';
import { LOGIN_USER } from 'Graphql/Mutation';
import { User } from 'CustomTypings/schema';
import { validateLogin } from 'Utils/helpers';
import * as UIkit from 'uikit';

import './style.css';
import { AUTH_TOKEN, CURRENT_USER } from '../../../constants';

type Props = {
  // tslint:disable-next-line:no-any
  login: any,
  // tslint:disable-next-line:no-any
  refreshToken?: any
  // tslint:disable-next-line:no-any
  client?: any
};

type InputProps = {
  email: string,
  password: string
};

type Response = {
  token: string,
  user: User
};

class Login extends React.Component<RouteComponentProps & Props & ChildProps<Response, InputProps>, {}> {
  state = { 
    show: false,
    email: '',
    password: '',
    everFocusedEmail: false,
    everFocusedPassword: false,
    inFocus: '',
  };

  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  }
  
  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!this.canBeSubmitted()) {
      return;
    }
    const { email, password } = this.state;
    this.props.login({
      variables: {
        email,
        password
      }
    }).then( result => {
      localStorage.setItem(AUTH_TOKEN, result.data.login.token);
      localStorage.setItem(CURRENT_USER, result.data.login.user);
      this.props.refreshToken(result.data.login.token);
      this.props.history.replace('/');
    }).catch( err => {
      UIkit.notification(`Error: ${err.message}`, 'error');
    });
  }
  
  canBeSubmitted() {
    const errors = validateLogin(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {

    const errors = validateLogin(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    
    return(
      <div 
        className="uk-flex uk-flex-stretch" 
        // tslint:disable-next-line:jsx-boolean-value
        data-uk-grid
        style={{height: '100vh', backgroundColor: '#ffffff'}}
      >
        <div className="uk-width-2-5 sideBg" id="sideBg">
          <div className="uk-flex uk-flex-stretch uk-flex-middle">
          .
          </div>
        </div>
        <div className="uk-container uk-width-3-5 uk-flex uk-flex-stretch uk-flex-middle uk-box-shadow-small">
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
                <a 
                  className={`uk-button uk-button-text}`}
                >
                Forgot password?
                </a>
                <button 
                  className={`uk-button uk-button-primary uk-width-1-1
                   uk-align-right ${isDisabled ? 'disabled' : 'disabled'}`}
                  type="submit"
                >
                LOGIN
                </button>
            </div>
            <br/>
            <hr className="uk-divider-icon" />
            <div className="uk-margin">
              <p 
                className={`uk-button uk-button-text}`}
              >
              Don't have an account?
              </p>
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

export default withRouter(compose(
  withApollo,
  graphql<Response, InputProps, Props>(LOGIN_USER, {
    name: 'login',
    options: { variables: { email: '', password: '' } },
  })
)(Login));