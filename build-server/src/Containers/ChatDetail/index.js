"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_helmet_1 = require("react-helmet");
const message_list_1 = require("anchor-ui/message-list");
const message_input_1 = require("anchor-ui/message-input");
const message_1 = require("anchor-ui/message");
const button_1 = require("anchor-ui/button");
const icon_emoji_1 = require("anchor-ui/icons/icon-emoji");
const emoji_menu_1 = require("anchor-ui/emoji-menu");
// import emojione from 'emojione';
/*const createMarkup = text => ({
  __html: emojione.toImage(text)
});*/
class ChatDetail extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            open: false,
            emoji: ''
        };
        this.toggleMenu = () => this.setState({ open: !this.state.open });
        this.sendEmoji = (emoj) => {
            let tempStr = this.state.emoji + emoj.shortname;
            this.setState({ emoji: tempStr });
        };
        this.handleChange = (evt) => {
            this.setState({ emoji: evt.target.value });
        };
        // This is called by both enter and click
        this.handleSendMessage = () => {
            // Assuming there is a function/prop which actually sends the message
            // const { sendMessage } = this.props;
            // Grab input value from state. This is set by handleChange
            // const { emoji } = this.state;
            // sendMessage(value);
        };
    }
    render() {
        const { open, emoji } = this.state;
        return (React.createElement(React.Fragment, null,
            React.createElement(react_helmet_1.Helmet, null,
                React.createElement("title", null, "Unizonn | Chat"),
                React.createElement("meta", { name: "an inclusive community", content: "Unizonn community" })),
            React.createElement("div", { className: "uk-width-1-1" },
                React.createElement(message_list_1.default, { style: { height: '77vh', flex: 1, backgroundColor: 'aliceblue' } },
                    React.createElement(message_1.default, { body: "Helloo man" }),
                    React.createElement(message_1.default, { body: "Helloo man" }),
                    React.createElement(message_1.default, { body: "Helloo man" }),
                    React.createElement(message_1.default, { body: "Helloo man" }),
                    React.createElement(message_1.default, { body: "Helloo man" }),
                    React.createElement(message_1.default, { body: "Helloo man" }),
                    React.createElement(message_1.default, { body: "Helloo man" }),
                    React.createElement(message_1.default, { body: "Helloo man" }),
                    React.createElement(message_1.default, { body: "Helloo man" })),
                React.createElement("div", { className: "input-box uk-width-auto" },
                    React.createElement(message_input_1.default, { placeholder: "Enter message", multiLine: true, style: { margin: 0 }, value: emoji, sendMessage: this.handleSendMessage, onChange: event => this.handleChange(event), leftButton: React.createElement(button_1.default
                        // tslint:disable-next-line:jsx-boolean-value
                        , { 
                            // tslint:disable-next-line:jsx-boolean-value
                            iconButton: true, onClick: this.toggleMenu },
                            React.createElement(icon_emoji_1.default, null)) }),
                    React.createElement("section", null,
                        React.createElement(emoji_menu_1.default, { sendEmoji: (event, emoj) => this.sendEmoji(emoj), open: open, hideMenu: this.toggleMenu }))))));
    }
}
exports.default = ChatDetail;
//# sourceMappingURL=index.js.map