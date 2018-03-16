"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ListViewRow extends React.Component {
    constructor(props) {
        super(props);
        this._selectChat = this._selectChat.bind(this);
    }
    _selectChat() {
        this.props.selectChat();
    }
    render() {
        return (React.createElement("div", { onClick: this._selectChat, className: "list-row " },
            React.createElement("div", { className: "flex" },
                React.createElement("div", { className: "flex avatar-container flex-15" },
                    React.createElement("figure", { className: "avatar avatar-xl" },
                        React.createElement("img", { src: "https://picturepan2.github.io/spectre/img/avatar-1.png", alt: "..." }))),
                React.createElement("div", { className: "chat-body flex-85 flex flex-direction-column justify-content-center" },
                    React.createElement("div", { className: "flex justifiy-content-space-between alignItems-center" },
                        React.createElement("span", null, "Mepco Guys"),
                        React.createElement("span", null, "10.33 PM")),
                    React.createElement("div", { className: "flex alignItems-center " },
                        React.createElement("span", null, "+91 9839403049 HI this is renga"),
                        React.createElement("span", null))))));
    }
}
exports.default = ListViewRow;
//# sourceMappingURL=listViewRow.js.map