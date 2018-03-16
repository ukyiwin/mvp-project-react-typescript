"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Avatar_1 = require("Components/Avatar");
require("./style.scss");
// tslint:disable-next-line:typedef
const ChatItem = (props) => {
    return (React.createElement("div", { className: "uk-flex uk-flex-stretch un-highlight uk-text-center", style: { paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5 } },
        React.createElement(Avatar_1.default, { url: "", size: 35, presence: true }),
        React.createElement("div", { style: { display: 'flex', alignSelf: 'center', marginLeft: 15 } },
            React.createElement("h5", { className: "un-block-display" }, props.name))));
};
exports.default = ChatItem;
//# sourceMappingURL=index.js.map