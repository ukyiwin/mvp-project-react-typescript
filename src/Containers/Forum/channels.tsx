import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { asyncComponent } from 'react-async-component';
import { LoadingComponent } from 'Components/EmptyStates';
import CommunitySidebar from 'Components/Community/CommunitySidebar';
import ChannelList from 'Components/Community/ChannelList';
import ThemeProvider from 'anchor-ui/theme-provider';
import ChannelHeader from 'anchor-ui/channel-header';
import Button from 'anchor-ui/button';
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
import { CREATE_MESSAGE } from 'Graphql/Mutation';
import { GET_ALL_MY_CHANNEL } from 'Graphql/Query';
import { Channels } from 'CustomTypings/schema';
import './style.scss';

const ChatDetail = asyncComponent({
  resolve: () => import('../ChatDetail'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});

// tslint:disable-next-line:no-empty-interface
interface Props {
  channels: any;
}

interface Response {
  getAllChat: Channels[];
}

class Forum extends React.Component<Props> {
  
  state = {
    channelCommunity: '',
    text: '',
    currentChannel: {} as any,
    open: false
  };

  openModal() {
    const value = !this.state.open;
    this.setState({open: value});
  }

  selectCommunity = (value) => {
    alert('hi');
    this.setState({ channelCommunity: value });
  }

  renderContent() {
    return(
      <div 
        style={{flex: 1, width: '100vw'}}
        className="uk-width-1-1 uk-flex"
      >
        <CommunitySidebar itemClick={this.selectCommunity} />
        <ChannelList communityId={this.state.channelCommunity} />
        <div className="uk-width-expand uk-visible@s">
          <ChannelHeader
            name="Channel"
            rightButton={
                  <div className="uk-flex">
                    <Button iconButton>
                      <IconPeople />
                    </Button>
                  </div>
            }
            leftButton={
                // tslint:disable-next-line:jsx-boolean-value
                <Button iconButton onClick={() => this.openModal()}>
                  <IconAddFriend />
                </Button>}
            style={{backgroundColor: '#454d5d'}}
          />
          <div className="uk-width-1-1 uk-flex" style={{}}>
            <ChatDetail />
          </div>
        </div>
        <Modal 
          open={this.state.open} 
          color="grey"
          actions={
            <div className="uk-flex uk-flex-between">
              <button className="uk-button uk-button-small uk-button-default" onClick={() => this.openModal()}>Close</button>
              <button className="uk-button uk-button-small uk-button-primary">Create</button>
            </div>
          }
        >
          <div>
            <input placeholder="Channel name" className="uk-input"/>
          </div>
        </Modal>
      </div>
    );
  }

  renderLoading() {
    return <div>Loading</div>;
  }
  render() {
    return (
      <ThemeProvider color="#f2912c">
        <div className="App">
          <Helmet>
            <title>Unizonn | Community</title>
            <meta name="an inclusive community" content="Unizonn community" />
          </Helmet>
          {this.props.channels.Loading ? this.renderLoading() : this.renderContent()}
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(compose(
  withApollo,
  graphql<Response, Props>(GET_ALL_MY_CHANNEL, {
      name: 'channels',
  }),
  graphql(CREATE_MESSAGE, {name: 'sendMessage'})
)(Forum));