import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { compose, withApollo, graphql } from 'react-apollo';
import { ChildProps } from 'react-apollo/types';
import { SIGNUP_USER } from 'Graphql/Mutation';
import { User } from 'CustomTypings/schema';
import { validateSignup } from 'Utils/helpers';
import * as UIkit from 'uikit';
import { AUTH_TOKEN, CURRENT_USER } from '../../../constants';
import './style.css';

type InputProps = {
  email: string,
  password: string
};

type Response = {
  token: string,
  user: User
};

type Props = {
  // tslint:disable-next-line:no-any
  signup: any,
  // tslint:disable-next-line:no-any
  refreshToken?: any,
  // tslint:disable-next-line:no-any
  client?: any
};

class Signup extends React.Component<RouteComponentProps & Props & ChildProps<Response, InputProps>, {}> {
  
  state = { 
    show: false,
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
    userType: '',
    firstname: '',
    lastname: '',
    everFocusedEmail: false,
    everFocusedPassword: false,
    inFocus: '',
    loading: false
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

  handleUsernameChange = (evt) => {
    this.setState({ username: evt.target.value });
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
    this.setState({loading: true});
    const { email, password, username, firstname, lastname, gender, userType } = this.state;
    this.props.signup({
      variables: {
        email,
        password,
        username,
        firstname,
        lastname,
        userType,
        gender
      }
    }).then( result => {
      const token = result.data.signup.token;
      localStorage.setItem(AUTH_TOKEN, token);
      localStorage.setItem(CURRENT_USER, result.data.signup.user);
      this.props.refreshToken(token);
      this.setState({loading: false});
      this.props.history.replace('/add/profile');
    }).catch( err => {
      this.setState({loading: false}); 
      UIkit.notification(`${err.message}`, {status: 'danger', pos: 'top-right'});
    });
  }
  
  canBeSubmitted() {
    const errors =  validateSignup(
      this.state.email, this.state.password, this.state.username, this.state.confirmPassword, 
      this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  componentWillMount() {
    const email = this.props.location.email;
    if (email) {
      this.setState({email: email});
    }
  }
  
  render() {

    const errors = validateSignup(
      this.state.email, this.state.password, this.state.username, this.state.confirmPassword, 
      this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    
    return(
      <div 
        className="uk-flex uk-flex-stretch" 
        // tslint:disable-next-line:jsx-boolean-value
        data-uk-grid
        style={{ backgroundColor: '#ffffff'}}
      >
        <div className="uk-width-2-5 uk-visible@m sideBg uk-flex uk-flex-middle " id="sideBg">
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
        <div 
          className="uk-container uk-width-3-5@m uk-width-1-1@s uk-flex 
          uk-flex-stretch uk-flex-middle uk-box-shadow-small"
        >
          <form 
            className="uk-form-horizontal uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical"
            onSubmit={this.handleSubmit}
          >
            <div className="uk-margin" style={{marginTop: 40}}>
              <h3 className="uk-heading-primary uk-align-center">Signup </h3>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="firstname">Username</label>
              <div className="uk-form-controls">
                <input 
                  id="firstname"
                  className={`uk-input ${errors.username ? 'uk-form-danger' : ''} `} 
                  type="text"
                  value={this.state.username}
                  required={true}
                  onChange={this.handleUsernameChange}
                />
              </div>
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
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
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
                  <option value="Student">Student</option>
                  <option value="Lecturer">Lecturer</option>
                </select>
              </div>
            </div>
            <div className="uk-margin">
              { this.state.loading ? 
                <div
                  data-uk-spinner="ratio: 1"
                />
              :
                <button 
                  className={`uk-button uk-button-primary uk-width-1-1 ${isDisabled ? 'disabled' : 'disabled'}`}
                  type="submit"
                >
                Sign Up
                </button>
              }
            </div>
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