import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MessageList from 'anchor-ui/message-list';
import MessageInput from 'anchor-ui/message-input';
import Message from 'anchor-ui/message';
import Button from 'anchor-ui/button';
import IconEmoji from 'anchor-ui/icons/icon-emoji';
import EmojiMenu from 'anchor-ui/emoji-menu';
import { Channels } from 'CustomTypings/schema';
import { withApollo, compose, graphql } from 'react-apollo';
import { CREATE_MESSAGE } from 'Graphql/Mutation';
import { GET_MESSAGES } from 'Graphql/Query';
// import emojione from 'emojione';

/*const createMarkup = text => ({
  __html: emojione.toImage(text)
});*/

interface Props {
  channelId: string;
  channel: Channels;
  sendMessage: any;
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

    this.props.sendMessage({
      variables: {
        channelId,
        text
      }
    }).then((result) => {
      // hjh
    });
  }

  getAllMessageForChanne() {
    this.props.client.query({
      query: GET_MESSAGES,
      variables: {
        channelId: this.props.channelId
      }
    }).then((result) => {
      // ghghg
    });
  }

  render() {
      const { open, emoji } = this.state;
      return (
          <React.Fragment>
            <Helmet>
                  <title>Unizonn | Chat</title>
                  <meta name="an inclusive community" content="Unizonn community" />
            </Helmet>
            <div className="uk-width-1-1">
                <MessageList style={{ height: '77vh', flex: 1, backgroundColor: 'aliceblue' }}>
                    <Message
                      body="Helloo man i am a very cold guy frome time to time :cowboy:"
                      type="text"
                      enableMultiline={true}
                      emoji={true}
                      username={'juicycleff'}
                      createdAt={'12/29/2018'}
                      enableLightbox={true}
                      enableLinks={true}
                      myMessage={true}
                      // tslint:disable-next-line:max-line-length
                      avatar="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                    />
                    <Message body="Helloo man" />
                    <Message body="Helloo man" />
                    <Message body="Helloo man" />
                    <Message body="Helloo man" />
                    <Message body="Helloo man" />
                    <Message body="Helloo man" />
                    <Message body="Helloo man" />
                    <Message body="Helloo man" />
                </MessageList>
                  <div className="input-box uk-width-auto">
                    <MessageInput
                        placeholder="Enter message"
                        multiLine={true}
                        style={{ margin: 0 }}
                        value={emoji}
                        sendMessage={this.handleSendMessage}
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
            </div>
          </React.Fragment>
      );
  }
}

export default withRouter(compose(
  withApollo,
  graphql<{}, {}, Props>(GET_MESSAGES, {name: 'getMessages',
    props({data, ownProps: Props, mutate}) {
      // ghg
    },
    options: {
      variables: {
        
      }
    }
  }),
  graphql(CREATE_MESSAGE, {name: 'sendMessage'})
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