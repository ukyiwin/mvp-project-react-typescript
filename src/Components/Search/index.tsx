// @flow
import * as React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Titlebar from '../Titlebar';
import { View } from './style';
import { InboxScroller } from 'Components/Dashboard/style';
import SearchInput from './searchInput';

// tslint:disable-next-line:no-empty-interface
interface Props {}
interface State {
  searchQueryString?: string;
}
class Search extends React.Component<Props, State> {
  state = { searchQueryString: '' };

  handleSubmit = (searchQueryString: string) => {
    if (searchQueryString.length > 0) {
      this.setState({ searchQueryString });
    }
  }

  render() {
    const { searchQueryString } = this.state;
    const searchFilter = { everythingFeed: true };

    return (
      <View>
        <Titlebar
          provideBack
          noComposer
          title={'Search'}
          style={{ gridArea: 'header' }}
        />

        <SearchInput handleSubmit={this.handleSubmit} />

        <InboxScroller id="scroller-for-inbox">
          {searchQueryString &&
            searchQueryString.length > 0 &&
            searchFilter && (
              <div />
            )}
        </InboxScroller>
      </View>
    );
  }
}

export default Search;
