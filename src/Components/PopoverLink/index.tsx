import * as React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'CustomTypings/schema';
import FollowButton from 'Components/FollowButton';
import Avatar from 'Components/Avatar';
import { cookies } from 'link';
import { CURRENT_USER } from '../../constants';

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
          <Link to={`/${this.props.user.username}`} className="uk-text-bold " style={styleIt}>
              {this.props.children}
          </Link>
          {user.id === me.id ?
            null :
            <div uk-drop="boundary: .boundary; animation: uk-animation-slide-top-small; duration: 500">
              <div className="uk-card uk-card-body uk-card-default">
                <div className="uk-text-center content">
                  <div className="uk-background-primary uk-width-1-1 uk-position-top" style={{height: 80}} />
                  <Avatar 
                    size={60} 
                    url={user.avatar ? user.avatar.url : ''} presence={false}
                  />
                  <p className="uk-text-bold" style={{fontSize: 16, paddingBottom: 1, marginBottom: 1}}>{user.firstname} {user.lastname}</p>
                  <p className="" style={{fontSize: 12}}>@{user.username}</p>
                  <p style={{fontSize: 12}}>
                  Founder at Gueva Technologies. Geek, programmer, interest in AI and Machine Learning, Big Data, love basketball.
                  </p>
                  <p className="uk-text-bold ui label">{user.type}</p>
                  <hr />
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
