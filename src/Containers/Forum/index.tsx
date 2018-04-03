import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { asyncComponent } from 'react-async-component';
import { LoadingComponent } from 'Components/EmptyStates';
import ThemeProvider from 'anchor-ui/theme-provider';
import SearchBox from 'anchor-ui/search-box';
import List from 'anchor-ui/list';
import ListItem from 'anchor-ui/list-item';
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
import { compose, withApollo, graphql } from 'react-apollo';
import './style.css';
import { CREATE_MESSAGE } from 'Graphql/Mutation';
import { GET_ALL_MY_CHANNEL } from 'Graphql/Query';
import { Channels } from 'CustomTypings/schema';

const ChatDetail = asyncComponent({
  resolve: () => System.import('../ChatDetail'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});

const items = [{
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}];

// tslint:disable-next-line:no-empty-interface
interface Props {
  channels: any;
}

interface Response {
  getAllChat: Channels[];
}

class Forum extends React.Component<Props> {
  
  state = {
    channelId: '',
    text: '',
    currentChannel: {} as any,
    open: false
  };

  openModal() {
    const value = !this.state.open;
    this.setState({open: value});
  }

  renderContent() {
    return(
      <div 
        style={{height: '91vh', width: '100vw'}}
        className="uk-width-1-1 uk-flex"
      >
        <div id="chat-list" className="uk-width-1-4 un-border-right" style={{backgroundColor: '#ffffff'}}>
            <SearchBox placeholder="Search for channels and chat" />
            <List
                id="chat-list"
                header="Channels"
                style={{height: '43.1vh'}}
            >
              {this.props.channels.getAllChat ? this.props.channels.getAllChat.map((item, index) => (
                <ListItem
                  key={index}
                  primaryText={item.primaryText}
                  avatar={item.image}
                />
              )) : <div className="uk-padding-small">Empty channel conversation</div>}
            </List>
            <List
              id="chat-list"
              header="Direct Chat"
              style={{height: '40vh'}}
            >
              {this.props.channels.getAllChat ? this.props.channels.getAllChat.map((item, index) => (
                <ListItem
                  key={index}
                  primaryText={item.primaryText}
                  secondaryText={item.secondaryText}
                  avatar={item.image}
                />
              )) : <div className="uk-padding-small">Empty Direct Chat</div>}
            </List>
        </div>
        <div className="uk-width-expand">
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
    console.log(this.props.channels);
    return (
      <ThemeProvider color="#f2912c">
        <div className="App">
          <Helmet>
            <title>Unizonn | Lounge</title>
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
  graphql<Response, {}, Props>(GET_ALL_MY_CHANNEL, {
      name: 'channels',
  }),
  graphql(CREATE_MESSAGE, {name: 'sendMessage'})
)(Forum));

/*
Modal.propTypes = {
  actions: _propTypes2.default.node.isRequired,
  /** Override the style of the root element *
  style: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  /** Override the style of the content element *
  contentStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  /** Override the style of the footer element *
  footerStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the overlay element *
  overlayStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  color: _propTypes2.default.string.isRequired
};
*/