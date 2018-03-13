import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './style.css';

type Props = {
  // tslint:disable-next-line:no-any
  me: any,
  // tslint:disable-next-line:no-any
  refreshToken?: any
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

export default withRouter(FinishPage);