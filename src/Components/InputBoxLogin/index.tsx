import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import { ChildProps } from 'react-apollo/types';
import { USER_EXIST } from 'Graphql/Query';

// import { Link } from 'react-router-dom';

type Props = {
  // tslint:disable-next-line:no-any
  userExist: any,
  // tslint:disable-next-line:no-any
  client?: any
};

type InputProps = {
  email: string
};

// tslint:disable-next-line:no-any
class InputBoxLogin extends React.Component<RouteComponentProps & Props & ChildProps<boolean, InputProps>, {}> {
  state = {
    text: '',
    loading: false
  };

  checkUser = (e) => {
    e.preventDefault();
    this.setState({loading: true});
    this.props.client.query({
      query: USER_EXIST,
      variables: {
        email: this.state.text
      }
    }).then(({ data }) => {
      data.userExist ? 
        this.props.history.push({
          pathname: '/login',
          email: this.state.text
        }) : 
        this.props.history.push({
          pathname: '/signup',
          email: this.state.text
        });
      this.setState({loading: false});
    }).catch((error) => {
      this.setState({loading: false});
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="">
        <h1 className="uk-heading-primary uk-text-bold uk-text-uppercase">Welcome <br/>to unizonn</h1>
        <p style={{marginTop: 20, marginBottom: 15}}>Friendly and inclusive community for students and academia</p>
        <div className="uk-flex-stretch">
          <form 
            onSubmit={this.checkUser} 
            className="uk-margin uk-flex-stretch" 
            // tslint:disable-next-line:jsx-boolean-value
            uk-margin
          >
            <div 
              className="uk-margin uk-flex uk-width-1-1" 
              // tslint:disable-next-line:jsx-boolean-value
              uk-margin
            >
              <div 
                uk-form-custom="target: true"
                className="uk-width-3-4@m uk-width-1-1@s"
              >
                <input
                  type="email" 
                  onChange={e => this.setState({text: e.target.value})}
                  value={this.state.text}
                  required={true}
                  className="uk-input uk-box-shadow-hover-small uk-responsive-width uk-form-large"
                  placeholder="Enter email to signin or signup"
                />
              </div>
              <div
                className="uk-width-1-4@m uk-width-1-1@s"
              >
            { loading ?
              <div 
                data-uk-spinner="ratio: 1"
                style={{ marginLeft: 15, color: 'green'}}
              /> :
              <button 
                className="uk-button uk-button-primary uk-button-large"
                type="submit"
              >
                GETSTARTED
              </button>}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
}

export default withRouter(compose(
  withApollo,
  graphql<boolean, InputProps, Props>(USER_EXIST, {
    name: 'userExist',
    options: { variables: { email: '' } },
  })
)(InputBoxLogin));
