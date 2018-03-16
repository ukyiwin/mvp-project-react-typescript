"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("form", { action: "/search", acceptCharset: "UTF-8", method: "get", className: "uk-search" },
            React.createElement("input", { name: "utf8", type: "hidden", value: "\u221A" }),
            React.createElement("button", { name: "button", type: "submit", className: "uk-text-center" },
                React.createElement("i", { className: "fa fa-search" })),
            React.createElement("input", { onFocus: () => this.props.showDropdown(), onBlur: () => this.props.hideDropdown(), value: this.props.term, onChange: (event) => { this.handleInputChange(event.target.value); }, placeholder: "Search on unizonn", autoComplete: "off", type: "search", name: "search[q]", id: "search_q" })));
    }
    // tslint:disable-next-line:typedef
    handleInputChange(term) {
        this.props.onSearchTermChange(term);
    }
}
exports.default = SearchBar;
//# sourceMappingURL=index.js.map