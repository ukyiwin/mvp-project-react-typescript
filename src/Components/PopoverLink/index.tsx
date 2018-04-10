import * as React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'CustomTypings/schema';
import FollowButton from 'Components/FollowButton';
import Avatar from 'Components/Avatar';
import { cookies } from 'link';
import { CURRENT_USER } from '../../constants';
import { UserProfile } from 'Components/Profile';

interface Props {
    link: string;
    bigger?: boolean;
    user: User;
}

export default class PopoverLink extends React.Component<Props> {

  state = {
    // tslint:disable-next-line:no-object-literal-type-assertion
    me: {} as User
  };

  componentWillMount() {
    const me = cookies.get(CURRENT_USER) as User;
    this.setState({me});
  }
  render() {
    const { user } = this.props;
    const { me } = this.state;
    const styleIt = this.props.bigger ? { fontSize: 17 } : {};
    return (
        <span className="boundary" >
          <p style={{ margin: 0}}>
          <Link to={`/n/${this.props.user.username}`} className="uk-text-bold " style={styleIt}>
              {this.props.children} {' '}
          </Link>
          @{user.username}
          </p>
          {user.id === me.id ?
            null :
            <div uk-drop="boundary: .boundary; animation: uk-animation-slide-top-small; duration: 500">
              <div className="uk-card uk-card-body uk-card-default" style={{padding: 0}}>
                <div className="uk-text-center content">
                  <UserProfile
                    user={user}
                    username={user.username}
                    profileSize="simple"
                  />
                  <div className="ui small two buttons">
                    <FollowButton liked={false} unFollowClick={() => alert('hj')} followClick={() => alert('hoS')} />
                  </div>
                </div>
              </div>
            </div>
          }
        </span>
    );
  }
}
