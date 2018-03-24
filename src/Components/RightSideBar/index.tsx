import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, withApollo } from 'react-apollo';
import { User } from 'CustomTypings/schema';

// import { Link } from 'react-router-dom';

interface Props {
    // tslint:disable-next-line:no-any
    client?: any;
    user?: User;
}

// tslint:disable-next-line:no-any
class RightSideBar extends React.Component<RouteComponentProps & Props> {

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

export default withRouter(
    compose(
        withApollo,
    )(RightSideBar),
);
