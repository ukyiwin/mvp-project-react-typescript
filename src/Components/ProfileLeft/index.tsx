import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import { ChildProps } from 'react-apollo/types';
import { USER_EXIST } from 'Graphql/Query';
import { User } from 'CustomTypings/schema';

// import { Link } from 'react-router-dom';

interface Props {
  // tslint:disable-next-line:no-any
  client?: any;
  user?: User;
}

interface InputProps {
  userId: string;
}

interface Response {
  user?: User;
}

// tslint:disable-next-line:no-any
class ProfileLeft extends React.Component<RouteComponentProps & Props & ChildProps<Response, InputProps>, {}> {
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
    // const { loading } = this.state;
    return (
      <div>
        <div className="uk-card uk-card-default uk-width-1-1">
          <h1>Rex Raphael</h1>
          <h1>21 Connections</h1>
          <p>Xfullstack Engineer, Dev Ops Manager, with great love for javascript and nodejs</p>
        </div>
      </div>
    );
  }

}

export default withRouter(compose(
  withApollo,
  graphql<Response, InputProps, Props>(USER_EXIST, {
    name: 'user',
    options: { variables: { email: '' } },
  })
)(ProfileLeft));
