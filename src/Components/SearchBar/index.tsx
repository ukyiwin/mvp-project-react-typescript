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
}

export default class SearchBar extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
          <form className="uk-search uk-search-default uk-width-1-1">
              <a 
                href="" 
                className="uk-search-icon-flip uk-background-primary"
                data-uk-icon="icon: search" 
                data-uk-search-icon 
                style={{color: '#ffffff'}}
              />
              <input className="uk-search-input uk-form-width-large uk-width-1-1" type="search" placeholder="Search..." />
          </form>
        );
    }

    // tslint:disable-next-line:typedef
    handleInputChange(term) {
        this.props.onSearchTermChange(term);
    }
}