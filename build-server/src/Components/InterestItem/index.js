"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// tslint:disable-next-line:typedef
const InterestItem = (props) => {
    return (React.createElement("div", { key: props.key, className: "uk-tile uk-tile-secondary", style: { backgroundImage: props.url } },
        React.createElement("button", { className: `uk-button ${props.checked ? 'uk-button-secondary uk-light' : 'uk-button-default uk-dark'} 
        uk-button-small uk-align-center`, onClick: () => props.onClickAdd(props.id) }, props.name)));
};
exports.default = InterestItem;
//# sourceMappingURL=index.js.map