import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, withApollo, graphql } from 'react-apollo';
import StackGrid from 'react-stack-grid';
import InterestItem from 'Components/InterestItem';
import { User } from 'CustomTypings/schema';
import { ME } from 'Graphql/Query';
import './style.css';

type Props = {
  // tslint:disable-next-line:no-any
  me: any,
  // tslint:disable-next-line:no-any
  refreshToken?: any,
  // tslint:disable-next-line:no-any
  client?: any
};

class FinishPage extends React.Component<RouteComponentProps & Props> {

  render() {
    return(
      <div
        className="uk-width-1-1"
        style={{height: '100vh', backgroundColor: 'teal'}}
      >
        Finihesd
      </div>
    );
  }
}

export default withRouter(compose(
  graphql<User, {}, Props>(ME, {name: 'me'}),
)(FinishPage));