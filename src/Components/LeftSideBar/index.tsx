import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, Query, withApollo } from 'react-apollo';
import { User } from 'CustomTypings/schema';
import Label from 'Components/Label';
import TopInterest from 'Components/TopInterest';
import glamorous from 'glamorous';
import { ME } from 'Graphql/Query';
import { UserProfile } from 'Components/Profile';

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
          <Query query={ME}>
          {({data, loading, error}) => {
            if (loading) {
              return null;
            }

            if (error) {
              return null;
            }

            return (
              <div className=" uk-width-1-1">
                <div className="uk-width-1-1 raised uk-card card" data-uk-sticky="offset: 100" style={{ marginBottom: 10}}>
                  <UserProfile
                    user={data.me}
                    username={data.me.username}
                    profileSize="simple"
                  />
                </div>
                <div className="uk-width-1-1 raised card" style={{ marginBottom: 10, padding: 0 }}>
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
          }}
          </Query>
        );
    }
}

export default withRouter(
    compose(
        withApollo,
    )(LeftSideBar),
);
