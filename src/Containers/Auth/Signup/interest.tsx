import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, withApollo } from 'react-apollo';
// import { ChildProps } from 'react-apollo/types';
// import { SIGNUP_USER } from 'Graphql/Mutation';
// import { User } from 'CustomTypings/schema';
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

class Interest extends React.Component<RouteComponentProps & Props> {
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

    this.setState({loading: true});
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
      this.setState({loading: false});
      this.props.history.replace('/');
    }).catch( err => {
      this.setState({loading: false}); 
      UIkit.notification(`Error: ${err.message}`, {status: 'danger', pos: 'top-right'});
    });
  }
  
  componentWillMount() {
    const email = this.props.location.email;
    if (email) {
      this.setState({email: email});
    }
  }
  
  render() {

    return(
      <div 
        className="uk-flex uk-flex-stretch" 
        // tslint:disable-next-line:jsx-boolean-value
        data-uk-grid
        style={{height: '100vh', backgroundColor: '#ffffff'}}
      >
      hjhjhj
      </div>
    );
  }
}

export default withRouter(compose(
  withApollo
)(Interest));