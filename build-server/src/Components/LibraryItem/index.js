"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
// tslint:disable-next-line:typedef
const LibraryItem = (props) => {
    return (React.createElement("a", { href: "#", className: "grid__item grid__item--c1" },
        React.createElement("div", { className: "stack" },
            React.createElement("div", { className: "stack__deco" }),
            React.createElement("div", { className: "stack__deco" }),
            React.createElement("div", { className: "stack__deco" }),
            React.createElement("div", { className: "stack__deco" }),
            React.createElement("div", { className: "stack__figure" },
                React.createElement("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
        React.createElement("div", { className: "grid__item-caption uk-card uk-card-default uk-padding-small" },
            React.createElement("h3", { className: "grid__item-title" }, "anaerobic"),
            React.createElement("div", { className: "column column--left" },
                React.createElement("span", { className: "column__text" }, "Distance"),
                React.createElement("span", { className: "column__text" }, "Review")),
            React.createElement("div", { className: "column column--right" },
                React.createElement("span", { className: "column__text" }, "2045"),
                React.createElement("span", { className: "column__text" }, "133456")))));
};
exports.default = LibraryItem;
//# sourceMappingURL=index.js.map