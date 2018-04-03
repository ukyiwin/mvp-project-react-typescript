import * as React from 'react';
import Avatar from 'Components/Avatar';
import FollowButton from 'Components/FollowButton';

interface Props {
    url: string;
    name: string;
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
    const { name, url } = this.props;
    return (
        <div className="tile tile-centered px-2">
          <div className="tile-icon">
            <Avatar url={url} size={40} presence={false} />
          </div>
          <div className="tile-content">
            <div className="tile-title">{name}</div>
            <div className="tile-subtitle text-gray">I like to eat alot everyday with</div>
          </div>
          <div className="tile-action">
            <FollowButton liked={false} small={true} followClick={() => this.connectTo()} unFollowClick={() => this.disConnectTo()}/>
          </div>
        </div>
    );
  }   
}

export default PersonItem;
