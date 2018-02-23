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
    text: ''
  };

  checkUser = (e) => {
    e.preventDefault();
    this.props.client.query({
      query: USER_EXIST,
      variables: {
        email: this.state.text
      }
    }).then(({ data }) => {
      // tslint:disable-next-line:no-console
      this.props.history.push({pathname: '/login'});
    }).catch((error) => {
        // console.log('there was an error sending the query', error);
    });
  }

  render() {
    const { loading } = this.props.userExist;
    return (
      <div className="">
        <h1 className="uk-heading-primary uk-text-bold uk-text-uppercase">Welcome <br/>to unizonn</h1>
        <p style={{marginTop: 20}}>Friendly and inclusive community for students and academia</p>
        <div style={{ display: 'table' }}>
          <form 
            onSubmit={this.checkUser} 
            className="uk-margin" 
            // tslint:disable-next-line:jsx-boolean-value
            uk-margin
          >
            <div 
              className="uk-margin uk-width-1-1" 
              // tslint:disable-next-line:jsx-boolean-value
              uk-margin
            >
              <div uk-form-custom="target: true">
                <input
                  type="email" 
                  onChange={e => this.setState({text: e.target.value})}
                  value={this.state.text}
                  required={true}
                  className="uk-input uk-box-shadow-hover-small uk-responsive-width uk-form-large"
                  placeholder="Enter email to signin or signup"
                />
              </div>
            { loading ? <div data-uk-spinner={true}/> :
              <button 
                className="uk-button uk-button-primary uk-button-large"
                type="submit"
              >
                GET STARTED
              </button>}
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
