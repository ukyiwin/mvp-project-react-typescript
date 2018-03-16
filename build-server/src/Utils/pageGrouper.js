"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class PageGrouper extends React.Component {
    // tslint:disable-next-line:no-any
    constructor(props) {
        super(props);
        this.pg = this.props.pg;
        this.side = this.props.side;
        this._renderPage(this.pg, this.side);
    }
    // tslint:disable-next-line:no-any
    _renderPage(page, side) {
        switch (page) {
            case '1':
                if (side === 'left') {
                    return (this._page1Left());
                }
                else {
                    return (this._page1Right());
                }
            case '2':
                if (side === 'left') {
                    return (this._page2Left());
                }
                else {
                    return (this._page2Right());
                }
            case '3':
                return (this._page3Left());
            default:
                return (this._page3Left());
        }
    }
    _page1Left() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "title" }, "multiScro"),
            React.createElement("div", { className: "content" }, "Responsive divided")));
    }
    _page1Right() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "title" }, "ll.ReactJs"),
            React.createElement("div", { className: "content" }, "\u00A0multi-scroll pages!")));
    }
    _page2Left() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "title" }, "div"),
            React.createElement("div", { className: "content" }, "backgroun")));
    }
    _page2Right() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "title" }, "vide"),
            React.createElement("div", { className: "content" }, "d images")));
    }
    _page3Left() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "title" }, "...and create as many pages"),
            React.createElement("div", { className: "content" }, "as you want!")));
    }
    render() {
        const content = this._renderPage(this.props.pg, this.props.side);
        return (React.createElement("div", null, content));
    }
}
exports.default = PageGrouper;
//# sourceMappingURL=pageGrouper.js.map