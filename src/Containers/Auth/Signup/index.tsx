import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import { ChildProps } from 'react-apollo/types';
import { SIGNUP_USER } from 'Graphql/Mutation';
import { User } from 'CustomTypings/schema';
import { validateSignup } from 'Utils/helpers';
import * as UIkit from 'uikit';

import { AUTH_TOKEN, CURRENT_USER } from '../../../constants';
import './style.css';

type Props = {
  // tslint:disable-next-line:no-any
  signup: any,
  // tslint:disable-next-line:no-any
  refreshToken?: any,
  // tslint:disable-next-line:no-any
  client?: any
};

type InputProps = {
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  userType: string,
  gender: string 
};

type Response = {
  token: string,
  user: User
};

class Signup extends React.Component<RouteComponentProps & Props & ChildProps<Response, InputProps>, {}> {
  state = { 
    show: false,
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    userType: '',
    firstname: '',
    lastname: '',
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
  
  handleConPasswordChange = (evt) => {
    this.setState({ confirmPassword: evt.target.value });
  }

  handleFnameChange = (evt) => {
    this.setState({ firstname: evt.target.value });
  }
  
  handleLnameChange = (evt) => {
    this.setState({ lastname: evt.target.value });
  }

  handleUserTypeChange = (evt) => {
    this.setState({ userType: evt.target.value });
  }
  
  handleGenderChange = (evt) => {
    this.setState({ gender: evt.target.value });
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!this.canBeSubmitted()) {
      return;
    }
    const { email, password, firstname, lastname, gender, userType } = this.state;
    this.props.signup({
      variables: {
        email,
        password,
        firstname,
        lastname,
        userType,
        gender
      }
    }).then( result => {
      localStorage.setItem(AUTH_TOKEN, result.data.login.token);
      localStorage.setItem(CURRENT_USER, result.data.login.user);
      this.props.refreshToken(result.data.login.token);
      this.props.history.replace('/');
    }).catch( err => {
      alert(err);
      UIkit.notification(`Error: ${err.message}`, 'error');
    });
  }
  
  canBeSubmitted() {
    const errors =  validateSignup(
      this.state.email, this.state.password, this.state.confirmPassword, 
      this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {

    const errors = validateSignup(
      this.state.email, this.state.password, this.state.confirmPassword, 
      this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    
    return(
      <div 
        className="uk-flex uk-flex-stretch" 
        // tslint:disable-next-line:jsx-boolean-value
        data-uk-grid
        style={{height: '100vh', backgroundColor: '#ffffff'}}
      >
        <div className="uk-width-2-5 sideBg uk-flex uk-flex-middle " id="sideBg">
          <div 
            className="uk-position-relative uk-visible-toggle uk-light"
            data-uk-slideshow="animation: scale"
          >
          <ul className="uk-slideshow-items">
            <li>
              <img 
                src="https://getuikit.com/docs/images/photo.jpg" 
                alt="" 
                // tslint:disable-next-line:jsx-boolean-value
                uk-cover 
              />
            </li>
            <li>
              <img 
                  src="https://getuikit.com/docs/images/dark.jpg" 
                  alt="" 
                  // tslint:disable-next-line:jsx-boolean-value
                  data-uk-cover 
              />
            </li>
            <li>
              <img 
                  src="https://getuikit.com/docs/images/light.jpg" 
                  alt="" 
                  // tslint:disable-next-line:jsx-boolean-value
                  data-uk-cover 
              />
            </li>
          </ul>
            <a 
              className="uk-position-center-left uk-position-small uk-hidden-hover" 
              href="#" 
              // tslint:disable-next-line:jsx-boolean-value
              data-uk-slidenav-previous 
              data-uk-slideshow-item="previous" 
            />
            <a 
              className="uk-position-center-right uk-position-small uk-hidden-hover" 
              href="#" 
              // tslint:disable-next-line:jsx-boolean-value
              data-uk-slidenav-next 
              data-uk-slideshow-item="next" 
            />
          </div>
        </div>
        <div className="uk-container uk-width-3-5 uk-flex uk-flex-stretch uk-flex-middle uk-box-shadow-small">
          <form 
            className="uk-form-horizontal uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical"
            onSubmit={this.handleSubmit}
          >
            <div className="uk-margin">
              <h3 className="uk-article-title">Signup </h3>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="firstname">Firstname</label>
              <div className="uk-form-controls">
                <input 
                  id="firstname"
                  className={`uk-input ${errors.firstname ? 'uk-form-danger' : ''} `} 
                  type="text"
                  value={this.state.firstname}
                  required={true}
                  onChange={this.handleFnameChange}
                />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="lastname">Lastname</label>
              <div className="uk-form-controls">
                <input 
                  id="lastname"
                  className={`uk-input ${errors.lastname ? 'uk-form-danger' : ''} `} 
                  type="text"
                  value={this.state.lastname}
                  required={true}
                  onChange={this.handleLnameChange}
                />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="email">Email</label>
              <div className="uk-form-controls">
                <input 
                  id="email"
                  className={`uk-input ${errors.email ? 'uk-form-danger' : ''} `} 
                  type="email"
                  value={this.state.email}
                  required={true}
                  onChange={this.handleEmailChange}
                />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-horizontal-text">Password</label>
              <div className="uk-form-controls">
                <input 
                  className={`uk-input ${errors.password ? 'uk-form-danger' : ''} `} 
                  type="password" 
                  id="password"
                  value={this.state.password}
                  required={true}
                  onChange={this.handlePasswordChange}
                />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="confirmPassword">Confirm Password</label>
              <div className="uk-form-controls">
                <input 
                  className={`uk-input ${errors.confirmPassword ? 'uk-form-danger' : ''} `} 
                  type="password" 
                  id="confirmPassword"
                  value={this.state.confirmPassword}
                  required={true}
                  onChange={this.handleConPasswordChange}
                />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-horizontal-text">Gender</label>
              <div className="uk-form-controls">
                <select 
                  className="uk-select"
                  value={this.state.gender}
                  required={true}
                  onChange={this.handleGenderChange}
                >
                  <option value="">Select sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-horizontal-text">I am a</label>
              <div className="uk-form-controls">
                <select 
                  className="uk-select"
                  value={this.state.userType}
                  required={true}
                  onChange={this.handleUserTypeChange}
                >
                  <option value="">Select one</option>
                  <option value="student">Student</option>
                  <option value="lecturer">Lecturer</option>
                </select>
              </div>
            </div>
            <div className="uk-margin">
              <button 
                className={`uk-button uk-button-primary uk-width-1-1
                 uk-align-right ${isDisabled ? 'disabled' : 'disabled'}`}
                type="submit"
              >
              Sign Up
              </button>
            </div>
            <br/>
            <hr className="uk-divider-icon" />
            <div className="uk-margin">
              <p 
                className={`uk-button uk-button-text}`}
              >
              Already have an account?
              </p>
              <Link 
                className={`uk-button uk-button-secondary
                 uk-align-right`}
                to="/login"
              >
              Login now
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
  graphql<Response, InputProps, Props>(SIGNUP_USER, {
    name: 'signup',
    options: { variables: { email: '', password: '' } },
  })
)(Signup));