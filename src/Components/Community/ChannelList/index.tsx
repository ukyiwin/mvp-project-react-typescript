import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBox from 'anchor-ui/search-box';
import List from 'anchor-ui/list';
import ListItem from 'anchor-ui/list-item';

class CommunitySidebar extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /*let channel = pusher.subscribe('users')
    channel.bind('newUser', (user) => {
      this.props.receiveUser(user)
    })*/
  }

  getServerId() {
    const regex = /\d+/g;
    const location = this.props.location.pathname;
    return location.match(regex)[0];
  }
  
  render() {
    // const serverId = this.props.location.pathname.includes('channels') ? this.getServerId() : '';
    return (
      <div id="chat-list" className="uk-width-1-5@m uk-width-auto@s un-border-right" style={{backgroundColor: '#ffffff'}}>
        <SearchBox placeholder="Search for channels and chat" />
        <List
          id="chat-list"
          header="Channels"
          style={{height: '81vh'}}
        >
          <div className="uk-padding-small">Empty channel conversation</div>
        </List>
      </div>
    );
  }
}
/*
{this.props.channels.getAllChat ? this.props.channels.getAllChat.map((item: Channels, index) => (
  <ListItem
    key={index}
    primaryText={item.title}
    avatar={item.avatar}
  />
)) : */

export default withRouter(CommunitySidebar);

/*
<ul className="index-item-wrapper">
          {Object.keys(servers).map((key) => {
            const selected = key === serverId ? 'selected-server' : '';
            return (
              <ServerIndexItem className="server-index-item" 
              key={key} server={servers[key]} selected={selected}/>
            ) ;
          })}
        </ul>
        */