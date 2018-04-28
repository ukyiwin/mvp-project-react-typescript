import React from 'react';
import { Link } from 'react-router-dom';
import { Community } from 'CustomTypings/schema';

interface Props {
  community: Community;
}

class ServerIndexItem extends React.Component<Props> {
  
  state = { status: 'hide' };

  constructor(props) {
    super(props);
  }

  hide = () => {
    this.setState({status: 'hide'});
  }

  show = () => {
    this.setState({status: 'show'});
  }

  render() {
    return (
      <div className="server-index-item-wrapper">
        <div className={`server-name-highlight`} />
        <Link to={`/community/${this.props.community.slug}/`}>
          <img className="server-avatar" src={this.props.community.avatar}
          onMouseEnter={this.show} onMouseLeave={this.hide} />
        </Link>
        <div className="tooltip server-name-tooltip" id={this.state.status} >
          {this.props.community.title}
        </div>
      </div>
    );
  }
}
export default ServerIndexItem;