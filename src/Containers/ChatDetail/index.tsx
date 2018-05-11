import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MessageList from 'anchor-ui/message-list';
import MessageInput from 'anchor-ui/message-input';
import Message from 'anchor-ui/message';
import Button from 'anchor-ui/button';
import IconEmoji from 'anchor-ui/icons/icon-emoji';
import EmojiMenu from 'anchor-ui/emoji-menu';
import { Channels, User, Message as AMessage } from 'CustomTypings/schema';
import { withApollo, compose, graphql, Query, Mutation } from 'react-apollo';
import { SEND_MESSAGE_BY_SLUG } from 'Graphql/Mutation';
import { GET_MESSAGES, GET_MESSAGES_BY_SLUG } from 'Graphql/Query';
import { NullState } from 'Components/Upsell';
import { Loading } from 'Components/EditForm/style';
import SeoMaker from 'Components/SeoMaker';
// import emojione from 'emojione';
import { cookies } from 'link';
import { CURRENT_USER } from '../../constants';

const currentUser = cookies.get(CURRENT_USER) as User;

interface Props {
  channelId: string;
  channel?: Channels;
  sendMessage?: any;
  client?: any;
}
class ChatDetail extends React.Component<Props> {

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
      <Query pollInterval={100000} query={GET_MESSAGES_BY_SLUG} variables={{ slug: channelId }} >
      {({loading, error, data}) => {
        if (loading) { return <Loading />; }
        if (error) { return <NullState heading="Select a channel to start chatting" />; }

        return(
          <>
            <SeoMaker title={channelId} description={channelId} />
            <div className="un-chat-detail--box">
              <MessageList
                autoScroll 
                className="fill-height-or-more" style={{ height: '71vh', flex: 1, backgroundColor: 'aliceblue' }}
              >
              {data.getMessagesBySlug.map((message: AMessage) => (
                  <Message
                    body={message.text}
                    type="text"
                    enableMultiline={true}
                    emoji={true}
                    username={message.user.username}
                    createdAt={message.createdAt}
                    enableLightbox={true}
                    enableLinks={true}
                    avatar={message.user.avatar}
                  />
                ))}
              </MessageList>
              <div className="uk-width-auto">
                <Mutation mutation={SEND_MESSAGE_BY_SLUG}>
                {(sendMessageBySlug, { data }) => (
                  <div className="fill-height-or-more input-box">
                    <MessageInput
                      placeholder="Enter message"
                      multiLine={true}
                      style={{ margin: 0 }}
                      value={emoji}
                      sendMessage={() => {
                        sendMessageBySlug({ 
                          variables: { slug: channelId, text: emoji},
                          optimisticResponse: {
                            __typename: 'Mutation',
                            sendMessageBySlug: {
                              if: 1,
                              __typename: 'Message',
                              createdAt: new Date(),
                              text: emoji,
                              seen: false,
                              user: currentUser,
                              delivered: false,
                              sent: true,
                              channel: {
                                slug: channelId
                              }
                            }
                          },
                          update: (proxy, { data: { sendMessageBySlug } }) => {
                            // Read the data from our cache for this query.
                            const data = proxy.readQuery({ 
                              query: sendMessageBySlug, 
                              variables: {slug: channelId}
                            });
                            
                            data.getMessagesBySlug.push(sendMessageBySlug);
                            // Write our data back to the cache.
                            proxy.writeQuery({ query: sendMessageBySlug, data });
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
)(ChatDetail));

/*
/** Path to the user's profile image will only be rendered if provided *
avatar: _propTypes2.default.string,
/** The message's body text *
body: _propTypes2.default.node.isRequired,
/** Time when the message was created *
createdAt: _propTypes2.default.node.isRequired,
/** The sender's username *
username: _propTypes2.default.node.isRequired,
/** The message's type *
type: _propTypes2.default.oneOf(['text', 'image', 'sticker', 'giphy']),
/** Override the styles of the root element *
style: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
/** Override the styles of the header element *
messageHeaderStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
/** Override the styles of the body element *
messageBodyStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
/** Override the styles of the time element *
messageTimeStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
/** The message size. One of the following: ["small", "medium", "large"] *
fontSize: _propTypes2.default.oneOf(['small', 'medium', 'large']),
/** Flag used to change message styles. True if the message was sent by the current user *
myMessage: _propTypes2.default.bool,
/** Enable emojione for messages *
emoji: _propTypes2.default.bool,
/** Enables links in messages *
enableLinks: _propTypes2.default.bool,
/** Enables compact messages *
compact: _propTypes2.default.bool,
/** Enables Lighbox for image messages *
enableLightbox: _propTypes2.default.bool,
/** Collapse an image message *
collapsed: _propTypes2.default.bool,
/** Text to display for collapsed messages *
collapsedText: _propTypes2.default.node,
/** Text to display above giphy messages *
giphyDescription: _propTypes2.default.node,
/** Text to display for edited banner *
edited: _propTypes2.default.node,
/** Show a separator above the message *
separator: _propTypes2.default.node,
/**
 * Highlight text, must be an array of objects containing id, value, and prefix.
 *
 * Text matching '[prefix][value]' will be highlighted
 *
highlights: _propTypes2.default.arrayOf(String),
**
 * Callback fired when highlighted text is clicked
 *
 * function(event: object, highlight: object) => void
 *
onHighlightClick: _propTypes2.default.func,
** Badge to display next to username *
badge: _propTypes2.default.node,
/** Render an IconMenu in Message *
iconMenu: _propTypes2.default.node,
/** Enables multiline messages *
enableMultiline: _propTypes2.default.bool,
/** Image placeholder url *
imagePlaceholder: _propTypes2.default.string,
/** Image error url *
imageError: _propTypes2.default.string,
onImageLoad: _propTypes2.default.func,
**
 * Callback fired when an image or giphy throws an error while loading
 *
 * function(event: object) => void
 *
onImageError: _propTypes2.default.func,
color: _propTypes2.default.string.isRequired
*/