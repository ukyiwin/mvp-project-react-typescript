import * as React from 'react';
import Avatar from 'Components/Avatar/avatar';
import FollowButton from 'Components/FollowButton';

interface Props {
    url: string;
    name: string;
    user: any;
}

// tslint:disable-next-line:typedef
class PersonItem extends React.Component<Props> {

  connectTo = () => {
    alert('hoho');
  }

  disConnectTo = () => {
    alert('hoho');
  }

  render() {
    const { name, url, user } = this.props;
    return (
        <div className="card uk-flex uk-flex-stretch">
          <div className="tile-icon">
            <Avatar
              user={user}
              size={40}
              onlineSize={'large'}
              src={user.avatar ? user.avatar : ''}
              noLink
              style={{
                boxShadow: '0 0 0 2px #fff',
                marginRight: '0',
              }}
            />
          </div>
          <div className="tile-content">
            <div className="tile-title">{user.firstname} {user.lastname}</div>
            <div className="tile-subtitle text-gray">{user.bio ? user.bio : user.username}</div>
          </div>
          <div className="tile-action">
            <Link to={`/n/${user.username}`}>See</Link>
          </div>
        </div>
    );
  }   
}

export default PersonItem;

// <FollowButton liked={false} small={true} followClick={() => this.connectTo()} unFollowClick={() => this.disConnectTo()}/>
