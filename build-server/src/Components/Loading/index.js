"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
var Spinner = require('react-spinkit');
exports.LoadingComponent = () => {
    return (React.createElement("div", { style: { width: '100vw', height: '100vh' } },
        React.createElement(Spinner, { name: "double-bounce" })));
};
exports.default = exports.LoadingComponent;
//# sourceMappingURL=index.js.map