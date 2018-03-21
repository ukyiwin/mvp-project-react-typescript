import * as React from 'react';
import { Helmet } from 'react-helmet';
import MessageList from 'anchor-ui/message-list';
import MessageInput from 'anchor-ui/message-input';
import Message from 'anchor-ui/message';
import Button from 'anchor-ui/button';
import IconEmoji from 'anchor-ui/icons/icon-emoji';
import EmojiMenu from 'anchor-ui/emoji-menu';
// import emojione from 'emojione';

/*const createMarkup = text => ({
  __html: emojione.toImage(text)
});*/

export default class ChatDetail extends React.Component {

  state = {
    open: false,
    emoji: ''
  };

  toggleMenu = () => this.setState({ open: !this.state.open });

  sendEmoji = (emoj) => {
    const tempStr = this.state.emoji + emoj.shortname;
    this.setState({ emoji: tempStr });

  }

  handleChange = (evt) => {
    this.setState({emoji: evt.target.value});
  }

  // This is called by both enter and click
  handleSendMessage = () => {
    // Assuming there is a function/prop which actually sends the message
    // const { sendMessage } = this.props;

    // Grab input value from state. This is set by handleChange
    // const { emoji } = this.state;

    // sendMessage(value);
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
          <MessageList  style={{height: '77vh', flex: 1, backgroundColor: 'aliceblue'}}>
            <Message body="Helloo man" />
            <Message body="Helloo man" />
            <Message body="Helloo man" />
            <Message body="Helloo man" />
            <Message body="Helloo man" />
            <Message body="Helloo man" />
            <Message body="Helloo man" />
            <Message body="Helloo man" />
            <Message body="Helloo man" />
          </MessageList>

          <div
            className="input-box uk-width-auto"
          >
            <MessageInput
              placeholder="Enter message"
              multiLine={true}
              style={{margin: 0}}
              value={emoji}
              sendMessage={this.handleSendMessage}
              onChange={event => this.handleChange(event)}
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
