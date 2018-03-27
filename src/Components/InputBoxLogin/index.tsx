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
}

interface InputProps {
    email: string;
}

// tslint:disable-next-line:no-any
class InputBoxLogin extends React.Component<RouteComponentProps & Props & ChildProps<boolean, InputProps>, {}> {
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
          <div>
              <div className="anim-button">
              <a 
                className="circular ui big icon button"
                style={{marginTop: 120}}
              >
                <i className="icon settings" />
              </a>
              </div>
              <h1 className="uk-heading-primary white uk-text-bold uk-text-uppercase">unizonn</h1>
              <p className=" uk-text-center white uk-margin uk-text-bold">
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
                        <button className="ui tag label positive button" type="submit">
                          GET STARTED
                        </button>
                    )}
                  </div>
                </form>
              </div>
              <div className="ui horizontal divider">
                Or
              </div>
              <div className="column vertical">
                      <button className="ui facebook button">
                        <i className="facebook icon" />
                        Facebook
                      </button>
                      <button className="ui google plus button">
                        <i className="google plus icon" />
                        Google Plus
                      </button>
                      <button className="ui linkedin button">
                        <i className="linkedin icon" />
                        LinkedIn
                      </button>
              </div>
          </div>
        );
    }
}

export default withRouter(
    compose(
        withApollo,
        graphql<boolean, InputProps, Props>(USER_EXIST, {
            name: 'userExist',
            options: { variables: { email: '' } },
        }),
    )(InputBoxLogin),
);
