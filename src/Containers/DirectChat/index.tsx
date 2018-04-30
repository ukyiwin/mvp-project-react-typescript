import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { asyncComponent } from 'react-async-component';
import { LoadingComponent } from 'Components/EmptyStates';
import CommunitySidebar from 'Components/Community/CommunitySidebar';
import ChannelList from 'Components/Community/ChannelList';
import DirectChatList from 'Components/Community/DirectChatList';
import ThemeProvider from 'anchor-ui/theme-provider';
import ChannelHeader from 'anchor-ui/channel-header';
import IconChannels from 'anchor-ui/icons/icon-channels';
import IconPeople from 'anchor-ui/icons/icon-people';
import IconEdit from 'anchor-ui/icons/icon-edit';
import IconDelete from 'anchor-ui/icons/icon-delete';
import IconInfo from 'anchor-ui/icons/icon-info';
import IconRemoveFriend from 'anchor-ui/icons/icon-remove-friend';
import IconSettings from 'anchor-ui/icons/icon-settings';
import Modal from 'anchor-ui/modal';
import IconAddFriend from 'anchor-ui/icons/icon-add-friend';
import IconConversation from 'anchor-ui/icons/icon-conversation';
import { compose, withApollo, graphql, Query } from 'react-apollo';
import { Channels } from 'CustomTypings/schema';
// import * as UIkit from 'uikit';
import './style.scss';
import { Button } from 'semantic-ui-react';
import Icon from 'Components/Icons';

const DirectChatDetail = asyncComponent({
  resolve: () => import('../DirectChatDetail'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});

// tslint:disable-next-line:no-empty-interface
interface Props {
  channels: any;
  match: any;
  history: any;
}

interface Response {
  getAllChat: Channels[];
}

class DirectChat extends React.Component<Props> {
  
  state = {
    channelCommunity: '',
    text: '',
    currentChannel: {} as any,
    open: false,
    openParticipantSide: false,
    channelId: ''
  };

  openModal() {
    const value = !this.state.open;
    this.setState({open: value});
  }

  componentWillMount() {

    const { match: { params } } = this.props;

    if (params.username) {
        this.setState({ channelId: params.username });
    } else {
        // this.props.history.goBack();
    }

  }
    // tslint:disable-next-line:typedef
  componentDidUpdate(prevProps) {
    const oldId = prevProps.match.params.username;
    const newId = this.props.match.params.username;
    
    if (newId !== oldId) {
      this.setState({ channelId: newId });
    }

  }

  selectCommunity = (value) => {
    this.setState({ channelCommunity: value });
  }

  renderContent() {
    return(
      <div 
        style={{height: '91vh', width: '100vw'}}
        className="uk-width-1-1 uk-flex"
      >
        <CommunitySidebar itemClick={this.selectCommunity} />
        <DirectChatList />
        <div className="uk-width-expand uk-visible@s">
          <div 
            className="uk-flex uk-flex-between uk-align-center uk-text-center mdc-elevation--z2"
            style={{ height: 50, padding: 2, backgroundColor: '#fff'}}
          >
            <Button.Content
              circular
              style={{ marginRight: 10 }}
              compact
            >
              .
            </Button.Content>
            <div 
              className="uk-text-capitalize uk-text-medium uk-text-bold uk-text-truncate"
              style={{ marginLeft: 5 }}
            >{this.state.channelId}
            </div>
            <Button.Content
              circular
              style={{ marginRight: 10 }}
              compact
              onClick={() => {
                const value = !this.state.openParticipantSide;
                this.setState({ openParticipantSide: value });
              }}
            >
              <Icon glyph="plus" />
            </Button.Content>
          </div>
          <DirectChatDetail channelId={this.state.channelId} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <ThemeProvider color="#f2912c">
        <div className="App">
          <Helmet>
            <title>Unizonn | Community</title>
            <meta name="an inclusive community" content="Unizonn community" />
          </Helmet>
          {this.renderContent()}
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(compose(
  withApollo
)(DirectChat));