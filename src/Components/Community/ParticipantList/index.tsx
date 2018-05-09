import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBox from 'anchor-ui/search-box';
import List from 'anchor-ui/list';
import ListItem from 'anchor-ui/list-item';
import * as UIkit from 'uikit';
import { Query } from 'react-apollo';
import { GET_COMMUNITY_CHANNELS, GET_COMMUNITY_CHANNELS_BY_SLUG, GET_PARTICIPANTS } from 'Graphql/Query/Community';
import { cookies } from 'link';
import { User } from 'CustomTypings/schema';
import { CURRENT_USER } from '../../../constants';
import { Button } from 'semantic-ui-react';
import Icon from 'Components/Icons';
import CreateChannelForm from '../CreateChannelForm';

interface Props {
  client?: any;
  history?: any;
  communityId?: string;
}

class ParticipantList extends React.Component<Props> {
  
  user: User;
  constructor(props) {
    super(props);
    this.user = cookies.get(CURRENT_USER) as User;
  }

  componentDidMount() {
    /*let channel = pusher.subscribe('users')
    channel.bind('newUser', (user) => {
      this.props.receiveUser(user)
    })*/
  }
  
  render() {
    // const serverId = this.props.location.pathname.includes('channels') ? this.getServerId() : '';
    return (
      <div id="chat-list" className="uk-width-1-5@m uk-width-auto@s un-border-right" style={{backgroundColor: '#ffffff'}}>
        <div className="uk-flex uk-flex-between uk-text-center" style={{ height: 50, padding: 2, backgroundColor: '#212'}}>
          <div 
            className="uk-text-capitalize uk-text-medium uk-text-bold uk-text-truncate"
            style={{ marginLeft: 5, color: '#fff' }}
          >
            Community Participants
          </div>
        </div>
        <SearchBox placeholder="Search for channels and chat" />
        <Query query={GET_PARTICIPANTS} variables={{ slug: this.props.communityId}}>
          {({ data, loading, error, networkStatus }) => {

            if (loading || networkStatus === 2 || networkStatus === 4) {
              return <div>loading</div>;
            }

            if (error) {
              return <div className="uk-padding-small">Error loading channels</div>;
            }

            if (data.getParticipants.length < 1) {
              return <div className="uk-padding-small">Empty channel list</div>;
            }
            
            return(
              <List
                id="chat-list"
                style={{ flex: 1}}
              >
              {
                data.getParticipants.map((user) => (
                  <Link to={`/n/${user.username}`}>
                    <ListItem
                      key={user.id}
                      primaryText={user.firstname + ' ' + user.lastname}
                      secondaryText={user.username}
                      avatar={user.avatar}
                    />
                  </Link>
                ))
              }
            </List>
            );
          }}
        </Query>
      </div>
    );
  }
}
/*
{this.props.channels.getAllChat ? this.props.channels.getAllChat.map((item: Channels, index) => (
  <ListItemac
    key={index}
    primaryText={item.title}
    avatar={item.avatar}
  />
)) : */

export default withRouter(ParticipantList);

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