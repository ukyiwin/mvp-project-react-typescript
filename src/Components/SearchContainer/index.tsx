// tslint:disable
import * as React from 'react';
import SearchBar from 'Components/SearchBar';

export default class SearchContainer extends React.Component {
  state = { 
    preventHideDropdown: false, 
    showDropdown: false, 
    term: '', 
    posts: [], 
    users: [], 
    tags: [] 
  };
    
  // tslint:disable-next-line:typedef
  constructor(props) {
    super(props);
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

  render () {
    return (
      <div>
        <SearchBar 
          showDropdown={this.showDropdown}
          hideDropdown={this.hideDropdown}
          term={this.state.term} 
          onSearchTermChange={(term) => {this.search(term); }}
        />
        {this.renderSearchResults()}
      </div>
    );
  }

  renderSearchResults() {
    if (!this.state.showDropdown ||
       (this.state.posts.length === 0 && this.state.users.length === 0 
        && this.state.tags.length === 0)) {
      return;
    }

    return (
      null
    );
  }
}