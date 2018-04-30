import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBox from 'anchor-ui/search-box';
import List from 'anchor-ui/list';
import ListItem from 'anchor-ui/list-item';
import * as UIkit from 'uikit';
import { Query } from 'react-apollo';
import { GET_COMMUNITY_CHANNELS, GET_COMMUNITY_CHANNELS_BY_SLUG } from 'Graphql/Query/Community';
import { cookies } from 'link';
import { User } from 'CustomTypings/schema';
import { CURRENT_USER } from '../../../constants';
import { Button } from 'semantic-ui-react';
import Icon from 'Components/Icons';
import CreateChannelForm from '../CreateChannelForm';

const user = cookies.get(CURRENT_USER) as User;

interface Props {
  client?: any;
  history?: any;
  communityId?: string;
}

class CommunitySidebar extends React.Component<Props> {
  constructor(props) {
    super(props);
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
        <div className="uk-flex uk-flex-between uk-text-center" style={{ height: 50, padding: 2}}>
          <div 
            className="uk-text-capitalize uk-text-medium uk-text-bold uk-text-truncate"
            style={{ marginLeft: 5 }}
          >Channels
          </div>
          <Button.Content
            circular
            style={{ marginRight: 10 }}
            compact
            onClick={() => UIkit.modal('#modal-add-channel').show()}>
            <Icon glyph="plus" />
          </Button.Content>
        </div>
        <SearchBox placeholder="Search for channels and chat" />
        <Query query={GET_COMMUNITY_CHANNELS_BY_SLUG} variables={{ slug: this.props.communityId, username: user.username}}>
          {({ data, loading, error, networkStatus }) => {

            if (loading || networkStatus === 2 || networkStatus === 4) {
              return <div>loading</div>;
            }

            if (error) {
              return <div className="uk-padding-small">Error loading channels</div>;
            }

            if (data.getCommunityChannelsBySlug < 1) {
              return <div className="uk-padding-small">Empty channel list</div>;
            }
            
            return(
              <List
                id="chat-list"
                style={{ flex: 1}}
              >
              {
                data.getCommunityChannelsBySlug.map((channels) => (
                  <Link to={`/community/${this.props.communityId}/${channels.slug}`}>
                    <div className="channel-name-highlight">
                      <span id="hashtag">#</span>  
                      <div className="channel-name">
                        {channels.title}
                      </div>
                    </div>
                  </Link>
                ))
              }
            </List>
            );
          }}
        </Query>
        <div id="modal-add-channel" className="uk-modal-full" style={{ flex: 1 }} data-uk-modal>
          <div className="uk-modal-dialog">
            <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close/>
            <div className="uk-flex uk-child-width-1-1@s uk-flex-middle" data-uk-grid>
                <div className="uk-padding-large" uk-height-viewport>
                    <h2>Create Channel</h2>
                    <p>Start a channel on some topics.</p>
                    <CreateChannelForm communityId={this.props.communityId}/>
                </div>
            </div>
          </div>
        </div>
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