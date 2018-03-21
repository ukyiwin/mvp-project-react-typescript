import * as React from 'react';

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
            <form action="/search" acceptCharset="UTF-8" method="get" className="uk-search">
                <input name="utf8" type="hidden" value="√" />
                <button name="button" type="submit" className="uk-text-center">
                    <i className="fa fa-search" />
                </button>
                <input
                    onFocus={() => this.props.showDropdown()}
                    onBlur={() => this.props.hideDropdown()}
                    value={this.props.term}
                    onChange={event => {
                        this.handleInputChange(event.target.value);
                    }}
                    placeholder="Search on unizonn"
                    autoComplete="off"
                    type="search"
                    name="search[q]"
                    id="search_q"
                />
            </form>
        );
    }

    // tslint:disable-next-line:typedef
    handleInputChange(term) {
        this.props.onSearchTermChange(term);
    }
}
