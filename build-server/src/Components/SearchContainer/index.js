"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable
const React = require("react");
const SearchBar_1 = require("Components/SearchBar");
class SearchContainer extends React.Component {
    // tslint:disable-next-line:typedef
    constructor(props) {
        super(props);
        this.state = {
            preventHideDropdown: false,
            showDropdown: false,
            term: '',
            posts: [],
            users: [],
            tags: []
        };
        this.hideDropdown = this.hideDropdown.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.setPreventHideDropdown = this.setPreventHideDropdown.bind(this);
        this.resetPreventHideDropdown = this.resetPreventHideDropdown.bind(this);
    }
    // tslint:disable-next-line:typedef
    search(term) {
        this.setState({ term });
    }
    setPreventHideDropdown() {
        this.setState({ preventHideDropdown: true });
    }
    resetPreventHideDropdown() {
        this.setState({ preventHideDropdown: false });
    }
    hideDropdown() {
        if (!this.state.preventHideDropdown) {
            this.setState({ showDropdown: false });
        }
    }
    showDropdown() {
        this.setState({ showDropdown: true });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(SearchBar_1.default, { showDropdown: this.showDropdown, hideDropdown: this.hideDropdown, term: this.state.term, onSearchTermChange: (term) => { this.search(term); } }),
            this.renderSearchResults()));
    }
    renderSearchResults() {
        if (!this.state.showDropdown ||
            (this.state.posts.length === 0 && this.state.users.length === 0
                && this.state.tags.length === 0)) {
            return;
        }
        return (null);
    }
}
exports.default = SearchContainer;
//# sourceMappingURL=index.js.map