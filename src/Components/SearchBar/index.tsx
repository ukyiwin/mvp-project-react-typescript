import * as React from 'react';
import './style.scss';

interface Props {
    // tslint:disable-next-line:no-any
    onSearchTermChange?: any;
    // tslint:disable-next-line:no-any
    showDropdown?: any;
    // tslint:disable-next-line:no-any
    hideDropdown?: any;
    term?: string;
    loading: boolean;
    onResultSelect: any;
    onSearchChange: any;
    results: any;
    noResultsDescription: string;
    value: string;
    className: string;
}

export default class SearchBar extends React.Component<Props> {
  constructor(props: Props) {
      super(props);
  }

  render() {
      return (
        <form 
          className={`uk-search uk-search-default uk-form-width-large ${this.props.className}`}
        >
          <a href="" className="uk-search-icon-flip" uk-search-icon="icon: search"/>
          <input className="uk-search-input uk-form-width-large" type="search" placeholder="Search..." />
        </form>
      );
  }

  // tslint:disable-next-line:typedef
  handleInputChange(term) {
      this.props.onSearchTermChange(term);
  }
}