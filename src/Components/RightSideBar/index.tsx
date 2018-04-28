import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, withApollo } from 'react-apollo';
import { User } from 'CustomTypings/schema';
import ConnectBox from 'Components/ConnectBox';
import SuggestedArticleList from 'Components/SuggestedArticleList';

// import { Link } from 'react-router-dom';

interface Props {
    // tslint:disable-next-line:no-any
    client?: any;
    user?: User;
}

// tslint:disable-next-line:no-any
class LeftSideBar extends React.Component<RouteComponentProps & Props> {

    render() {
        // const { loading } = this.state;
        return (
          <div className="uk-width-1-1">
            <div className="uk-width-1-1" style={{ marginBottom: 10, padding: 0 }}>
              <ConnectBox />
            </div>
            <div className="uk-width-1-1" style={{ marginBottom: 10, padding: 0 }}>
              <SuggestedArticleList />
            </div>
          </div>
        );
    }
}

export default withRouter(
    compose(
        withApollo,
    )(LeftSideBar),
);
