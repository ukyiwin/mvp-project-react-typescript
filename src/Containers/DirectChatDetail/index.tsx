import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MessageList from 'anchor-ui/message-list';
import MessageInput from 'anchor-ui/message-input';
import Message from 'anchor-ui/message';
import Button from 'anchor-ui/button';
import IconEmoji from 'anchor-ui/icons/icon-emoji';
import EmojiMenu from 'anchor-ui/emoji-menu';
import { Channels, User, Message as AMessage, DirectMessage } from 'CustomTypings/schema';
import { withApollo, compose, graphql, Query, Mutation } from 'react-apollo';
import { SEND_MESSAGE_BY_SLUG, SEND_DIRECT_MESSAGE } from 'Graphql/Mutation';
import { GET_MESSAGES, GET_MESSAGES_BY_SLUG } from 'Graphql/Query';
import { NullState } from 'Components/Upsell';
import { Loading } from 'Components/EditForm/style';
import SeoMaker from 'Components/SeoMaker';
// import emojione from 'emojione';
import { cookies } from 'link';
import { CURRENT_USER } from '../../constants';
import { GET_DIRECT_MESSAGES_BY_SENDER } from 'Graphql/Query/Community';

const currentUser = cookies.get(CURRENT_USER) as User;

interface Props {
  channelId: string;
  channel?: Channels;
  sendMessage?: any;
  client?: any;
}
class DirectChatDetail extends React.Component<Props> {

  state = {
      channelId: '',
      text: '',
      open: false,
      emoji: '',
      currentChannel: {} as any
  };

  toggleMenu = () => this.setState({ open: !this.state.open });

  sendEmoji = (emoj) => {
    const tempStr = this.state.emoji + emoj.shortname;
    this.setState({ emoji: tempStr });
  }

  handleChange = (evt) => {
      this.setState({ emoji: evt.target.value });
  }

  // This is called by both enter and click
  handleSendMessage = () => {
      // Assuming there is a function/prop which actually sends the message
      // const { sendMessage } = this.props;
      // Grab input value from state. This is set by handleChange
      // const { emoji } = this.state;
      // sendMessage(value);
  }

  sendMessage = () => {
    const channelId = this.state.channelId;
    const text = this.state.text;
  }

  componentWillReceiveProps() {
    //
  }

  render() {
    const { open, emoji, text } = this.state;
    const { channelId } = this.props;

    return (
      <Query pollInterval={100000} query={GET_DIRECT_MESSAGES_BY_SENDER} variables={{ username: channelId }} >
      {({loading, error, data}) => {
        if (loading) { return <Loading />; }
        if (error) { return <NullState heading="Select a user to start chatting" />; }

        return(
          <>
            <SeoMaker title={channelId} />
            <div className="uk-width-1-1 fill-height-or-more">
              <MessageList
                autoScroll 
                className="fill-height-or-more" style={{ height: '71vh', flex: 1, backgroundColor: 'aliceblue' }}
              >
              {data.getDirectMessagesBySender.map((message: DirectMessage) => (
                  <Message
                    body={message.text}
                    type="text"
                    enableMultiline={true}
                    emoji={true}
                    myMessage={message.from.username === currentUser.username ? true : false}
                    username={message.from.username}
                    createdAt={message.createdAt}
                    enableLightbox={true}
                    enableLinks={true}
                    avatar={message.from.avatar}
                  />
                ))}
              </MessageList>
              <Mutation mutation={SEND_DIRECT_MESSAGE}>
              {(sendDirectMessage, { data }) => (
                <div className="input-box uk-width-auto">
                  <MessageInput
                    placeholder="Enter message"
                    multiLine={true}
                    style={{ margin: 0 }}
                    value={emoji}
                    sendMessage={() => {
                      sendDirectMessage({ 
                        variables: { username: channelId, text: emoji},
                        optimisticResponse: {
                          __typename: 'Mutation',
                          sendDirectMessage: {
                            id: 1,
                            __typename: 'DirectMessage',
                            createdAt: new Date(),
                            text: emoji,
                            seen: false,
                            from: currentUser,
                            delivered: false,
                            sent: true
                          }
                        },
                        update: (proxy, { data: { sendDirectMessage } }) => {
                          // Read the data from our cache for this query.
                          const data = proxy.readQuery({ 
                            query: GET_DIRECT_MESSAGES_BY_SENDER
                           });
                           
                          data.getDirectMessagesBySender.push(sendDirectMessage);
                          // Write our data back to the cache.
                          proxy.writeQuery({ query: sendDirectMessage, data });
                        }
                      });
                      this.setState({ emoji: '' });
                    }}
                    onChange={(event) => this.handleChange(event)}
                    leftButton={
                      <Button
                        // tslint:disable-next-line:jsx-boolean-value
                        iconButton
                        onClick={this.toggleMenu}
                      >
                        <IconEmoji />
                      </Button>
                    }
                  />
                  <section>
                    <EmojiMenu
                      sendEmoji={(event, emoj) => this.sendEmoji(emoj)}
                      open={open}
                      hideMenu={this.toggleMenu}
                    />
                  </section>
                </div>
              )}
              </Mutation>
            </div>
          </>
        );
      }}
      </Query> 
    );
  }
}

export default withRouter(compose(
  withApollo
)(DirectChatDetail));