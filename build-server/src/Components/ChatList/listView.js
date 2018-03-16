"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const listViewRow_1 = require("./listViewRow");
class ListView extends React.Component {
    selectItem() {
        // dshjdhsj
    }
    render() {
        const noOfItems = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 0, 12, 1, 2, 2, 2, 10];
        return (React.createElement("div", { className: "list-view" }, noOfItems.map((item, index) => React.createElement(listViewRow_1.default, { key: `${index}listRow`, selectChat: this.selectItem() }))));
    }
}
exports.default = ListView;
//# sourceMappingURL=listView.js.map