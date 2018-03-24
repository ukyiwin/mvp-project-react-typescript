import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import { User } from 'CustomTypings/schema';
import Label from 'Components/Label';
import TopInterest from 'Components/TopInterest';
import glamorous from 'glamorous';
import UserProfileBox from 'Components/UserProfileBox';

// import { Link } from 'react-router-dom';

interface Props {
    // tslint:disable-next-line:no-any
    client?: any;
    user?: User;
}

const A = glamorous.a({
  fontFamily: 'brandon-grotesque',
  color: '#000000',
});

// tslint:disable-next-line:no-any
class LeftSideBar extends React.Component<RouteComponentProps & Props> {

    render() {
        // const { loading } = this.state;
        return (
          <div className=" uk-width-1-1">
            <div className="uk-width-1-1 mdc-elevation--z4 uk-card uk-card-default" style={{ paddingTop: 30, marginBottom: 10 }}>
              <UserProfileBox me={this.props.user} />
            </div>
            <div className="uk-width-1-1 mdc-elevation--z4 uk-card uk-card-default" style={{ marginBottom: 10, padding: 0 }}>
              <Label text="Top Interests" />
              <TopInterest />
            </div>
            <hr />
            <div className="uk-width-1-1 uk-padding-small">
                <div>
                    <p>Copyright @ 2018, Unizonn</p>
                </div>
                <ul className="listItem uk-text-center">
                    <li>
                        <A href="#">Terms</A>
                    </li>
                    <li>
                        <A color={'#000'} href="#">
                            Privacy
                        </A>
                    </li>
                    <li>
                        <A href="#">About</A>
                    </li>
                    <li>
                        <A href="#">Support</A>
                    </li>
                </ul>
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
