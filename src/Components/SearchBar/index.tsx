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
          <div className="ui fluid action input">
            <input type="text" placeholder="Search..." />
            <button className="ui icon button">
              <i className="inverted circular search link icon" />
            </button>
          </div>
        );
    }

    // tslint:disable-next-line:typedef
    handleInputChange(term) {
        this.props.onSearchTermChange(term);
    }
}