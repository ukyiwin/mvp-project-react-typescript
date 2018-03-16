"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.ErrorComponent = (props) => (React.createElement("div", { className: "uk-flex uk-flex-stretch uk-width-1-1" },
    React.createElement("div", { className: "empty uk-text-center uk-width-1-1" },
        React.createElement("div", { className: "empty-icon" },
            React.createElement("i", { className: "icon icon-people" })),
        React.createElement("h5", { className: "empty-title h5" }, "There was an error loading content"),
        React.createElement("p", { className: "empty-subtitle" }, "Click the button to refresh."),
        React.createElement("div", { className: "empty-action" },
            React.createElement("button", { className: "uk-button uk-button-primary", onClick: () => props.refresh }, "Refresh")))));
exports.EmptyComponent = props => (React.createElement("div", { className: "empty uk-flex-stretch uk-align-center uk-width-1-1" },
    React.createElement("div", { className: "empty-icon" },
        React.createElement("i", { className: "icon icon-people" })),
    React.createElement("p", { className: "empty-title h5" }, "You have no new article"),
    React.createElement("p", { className: "empty-subtitle" }, "Click the button to find topics or people to connect to."),
    React.createElement("div", { className: "empty-action" },
        React.createElement("button", { className: "btn btn-primary" }, "Connect"))));
exports.LoadingComponent = props => (React.createElement("div", { className: " uk-flex-stretch uk-text-center uk-width-1-1", style: { justifyContent: 'center', alignSelf: 'center' } },
    React.createElement("div", { className: "loader uk-margin-small" },
        React.createElement("div", { className: "bullet" }),
        React.createElement("div", { className: "bullet" }),
        React.createElement("div", { className: "bullet" }),
        React.createElement("div", { className: "bullet" }))));
//# sourceMappingURL=index.js.map