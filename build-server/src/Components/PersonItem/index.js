"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Avatar_1 = require("Components/Avatar");
require("./style.scss");
// tslint:disable-next-line:typedef
const PersonItem = (props) => {
    return (React.createElement("div", { className: "uk-flex boxit" },
        React.createElement(Avatar_1.default, { url: props.url, size: 40, presence: false }),
        React.createElement("div", { className: "", style: { marginLeft: 10 } },
            React.createElement("span", null, props.name),
            " ",
            React.createElement("br", null),
            React.createElement("span", null, "I like to eat alot everyday with"))));
};
exports.default = PersonItem;
//# sourceMappingURL=index.js.map