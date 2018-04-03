// tslint:disable
import * as React from 'react';
import _ from 'lodash';
import SearchBar from 'Components/SearchBar';

export default class SearchContainer extends React.Component {

  state = {
    isLoading: false,
    results: [],
    value: '',
    showDropdown: false,
    posts: [],
    users: [],
    tags: []
  }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: 'klk'
      });
    }, 300);
  };

  render () {
    const { isLoading, value, results } = this.state;
    return (
      <SearchBar
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={() => _.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={results}
        noResultsDescription={"Course not available"}
        value={value}
        className="uk-width-1-1"
        {...this.props}
      />
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