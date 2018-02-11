import * as React from 'react';
import SearchIcon from 'material-ui-icons/Search';

type Props = {
    classes?: object,
    width?: string,
};

class SearchBar extends React.Component<Props> {
  // initDocsearch();

    render() {
        // p = width;
        // if (!isWidthUp('sm', p)) {
            // removeDocsearch();
          //  return null;
        // }
        return (
            <div >
                <div>
                    <SearchIcon />
                </div>
                <input id="docsearch-input"/>
            </div>
        );
    }
}

export default SearchBar;