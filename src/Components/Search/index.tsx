import * as React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import Titlebar from '../Titlebar';
import { View } from './style';
import { InboxScroller, CommunityListItem } from 'Components/Dashboard/style';
import SearchInput from './searchInput';
import { Loading } from 'Components/Loading';
import { cookies } from 'link';
import { User } from 'CustomTypings/schema';
import { CURRENT_USER } from '../../constants';
import { SEARCH_USER } from 'Graphql/Query';
import ListItem from 'anchor-ui/list-item';

const user = cookies.get(CURRENT_USER) as User;

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
        <SearchInput handleSubmit={this.handleSubmit} />
        <Query pollInterval={100000} query={SEARCH_USER} variables={{ text: searchQueryString, username: user.username}} >
        {({loading, error, data}) => {
          if (loading) { return <Loading />; }
          if (error) { return <div>Error loading</div>; }

          return (
            <InboxScroller id="scroller-for-inbox" style={{ zIndex: 5}}>
              {searchQueryString &&
                data.searchUser.length > 0 
                && 
                data.searchUser.map((user) => (
                  <Link to={`/n/${user.username}`}>
                    <ListItem
                      key={user.id}
                      primaryText={user.firstname + ' ' + user.lastname}
                      secondaryText={user.username}
                      avatar={user.avatar}
                    />
                  </Link>
                ))}
            </InboxScroller>
          );
        }}
        </Query>

      </View>
    );
  }
}

export default Search;
