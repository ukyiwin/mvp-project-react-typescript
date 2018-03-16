"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
// tslint:disable-next-line:typedef
const Label = (props) => {
    return (React.createElement("div", { className: "un-content uk-flex uk-flex-stretch" },
        React.createElement("div", { className: "un-min-content un-block-display" }),
        React.createElement("button", { className: "uk-button uk-button-text un-block-display", style: { display: 'flex', alignSelf: 'center', marginLeft: 15 } }, props.text)));
};
exports.default = Label;
//# sourceMappingURL=index.js.map