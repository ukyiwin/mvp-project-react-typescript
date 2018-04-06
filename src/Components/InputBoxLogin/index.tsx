import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import { ChildProps } from 'react-apollo/types';
import { USER_EXIST } from 'Graphql/Query';
import * as jquery from 'jquery';

// import { Link } from 'react-router-dom';

interface Props {
    // tslint:disable-next-line:no-any
    userExist: any;
    // tslint:disable-next-line:no-any
    client?: any;
    history?: any;
}

interface InputProps {
    email: string;
}

// tslint:disable-next-line:no-any
class InputBoxLogin extends React.Component<RouteComponentProps<any> & Props & ChildProps<boolean, InputProps>, {}> {
    state = {
        text: '',
        loading: false,
    };

    checkUser = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        this.props.client
            .query({
                query: USER_EXIST,
                variables: {
                    email: this.state.text,
                },
            })
            .then(({ data }) => {
                data.userExist
                    ? this.props.history.push({
                          pathname: '/login',
                          email: this.state.text,
                      })
                    : this.props.history.push({
                          pathname: '/signup',
                          email: this.state.text,
                      });
                this.setState({ loading: false });
            })
            .catch((error) => {
                this.setState({ loading: false });
            });
    }

    componentDidMount() {
      // ghg

    }

    render() {
        const { loading } = this.state;
        return (
          <>
          <div className="uk-hidden@s">
              <h1 className="uk-heading-primary uk-text-bold uk-text-uppercase" style={{fontSize: '15vw', color: '#fff'}}>unizonn</h1>
              <p className=" uk-margin uk-text-bold" style={{fontSize: '2.5vw', color: '#fff'}}>
                Friendly and inclusive community for students and academia
              </p>
              <div className="ui uk-flex-stretch">
                <form
                  onSubmit={this.checkUser}
                  className="uk-margin"
                  // tslint:disable-next-line:jsx-boolean-value
                  uk-margin
                >
                  <div>
                    <div className="ui big input fluid">
                      <input 
                        type="email"
                        onChange={(e) => this.setState({ text: e.target.value })}
                        value={this.state.text}
                        required={true}
                        placeholder="Enter email to signin or signup"
                      />
                    </div>
                    <div className="ui big labeled">
                    {loading ? (
                        <div data-uk-spinner="ratio: 1" className="ui center middle" style={{ marginLeft: 15, color: 'green' }} />
                    ) : (
                        <button className="ui label fluid big positive button" type="submit" style={{marginTop: 5}}>
                          GET STARTED
                        </button>
                    )}
                    </div>
                  </div>
                </form>
              </div>
          </div>
          <div className="uk-visible@s">
              <h1 className="uk-heading-primary uk-text-bold uk-text-uppercase" style={{fontSize: '8vw', color: '#fff'}}>unizonn</h1>
              <p className=" uk-margin uk-text-bold" style={{fontSize: '1.3vw', color: '#fff'}}>
                Friendly and inclusive community for students and academia
              </p>
              <div className="ui uk-flex-stretch">
                <form
                  onSubmit={this.checkUser}
                  className="uk-margin uk-flex-stretch"
                  // tslint:disable-next-line:jsx-boolean-value
                  uk-margin
                >
                  <div className="ui big right labeled input fluid">
                    <input 
                      type="email"
                      onChange={(e) => this.setState({ text: e.target.value })}
                      value={this.state.text}
                      required={true}
                      placeholder="Enter email to signin or signup"
                    />
                    
                    {loading ? (
                        <div data-uk-spinner="ratio: 1" className="ui center middle" style={{ marginLeft: 15, color: 'green' }} />
                    ) : (
                        <button className="ui label positive button" type="submit">
                          GET STARTED
                        </button>
                    )}
                  </div>
                </form>
              </div>
          </div>
          </>
        );
    }
}

export default withRouter(
    compose(
        withApollo,
        graphql<boolean, Props>(USER_EXIST, {
            name: 'userExist',
            options: {
              variables: {
                email: '',
              }
            }
        }),
    )(InputBoxLogin),
);