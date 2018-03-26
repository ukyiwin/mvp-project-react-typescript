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
  paddingLeft: 5,
  paddingRight: 5,
  fontWeight: 'bold',
  textAlign: 'center',
  alignSelf: 'center'
});

// tslint:disable-next-line:no-any
class LeftSideBar extends React.Component<RouteComponentProps & Props> {

    render() {
        // const { loading } = this.state;
        return (
          <div className=" uk-width-1-1">
            <div className="uk-width-1-1 raised ui card" style={{ paddingTop: 30, marginBottom: 10 }}>
              <UserProfileBox me={this.props.user} />
            </div>
            <div className="uk-width-1-1 raised ui card" style={{ marginBottom: 10, padding: 0 }}>
              <Label text="Top Interests" />
              <TopInterest />
              <hr/>
              <div className="fluid uk-padding-small">
                <div className="ui mini celled horizontal list">
                  <a className="item">
                    About Us
                  </a>
                  <a className="item">
                    Terms & Terms
                  </a>
                  <a className="item">
                    Privacy
                  </a>
                  <a className="item">
                    Career
                  </a>
                  <a className="item">
                    Support
                  </a>
                </div>
                <div>
                    <p>Copyright @ 2018, Unizonn</p>
                </div>
            </div>
            </div>
            <hr />
            
          </div>
        );
    }
}

export default withRouter(
    compose(
        withApollo,
    )(LeftSideBar),
);
