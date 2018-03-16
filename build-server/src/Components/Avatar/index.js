"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// tslint:disable-next-line:typedef
const Avatar = (props) => {
    return (React.createElement("figure", null,
        React.createElement("img", { className: `uk-border-${props.square ? 'square' : 'circle'}
         uk-animation-kenburns uk-animation-fast`, src: props.url, width: props.size, height: props.size, alt: "img" }),
        props.presence ? React.createElement("i", { className: "avatar-presence online" }) : null));
};
exports.default = Avatar;
//# sourceMappingURL=index.js.map