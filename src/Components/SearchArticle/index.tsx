import * as React from 'react';
import ArticleItem from 'Components/ArticleItem';
import { graphql, QueryProps, Query } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';
import { ErrorComponent, LoadingComponent, EmptyComponent } from 'Components/EmptyStates';
import { ARTICLES, SEARCH_ARTICLE } from 'Graphql/Query';
import { Article, User } from 'CustomTypings/schema';
import ContentLoader from 'react-content-loader';
import { cookies } from 'link';
import { CURRENT_USER } from '../../constants';
import { NullState } from 'Components/Upsell';
import { Loading } from 'Components/Loading';

// const user = cookies.get(CURRENT_USER) as User;

interface Props {
  searchString: string;
}

const SearchArticle = (props: Props) => (
  <Query
    query={SEARCH_ARTICLE}
    variables={{text: props.searchString }}
    pollInterval={5000}
  >
  {({ loading, error, data: { searchArticle }, fetchMore, networkStatus, refetch }) => {
    if (loading) {
      return (
        <div className="uk-width-1-1 uk-padding-small" style={{ backgroundColor: '#fff' }}>
          <Loading />
        </div>
      );
    }
    if (error) {
        return <NullState heading="There was an error in the process, try again" />;
    }
    if (searchArticle.edges.length < 1) {
      return (<NullState heading="No article found for you, please search something else or join and write on gueva" />);
    }
    return (
        <InfiniteScroll
          pageStart={0}
          hasMore={searchArticle.pageInfo.hasNextPage}
          loadMore={() =>
            fetchMore({
              variables: {
                text: props.searchString,
                cursor: searchArticle.pageInfo.endCursor
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.searchArticle.edges;
                const pageInfo = fetchMoreResult.searchArticle.pageInfo;
  
                return newEdges.length
                  ? {
                    searchArticle: {
                        __typename: previousResult.searchArticle.__typename,
                        edges: [...previousResult.searchArticle.edges, ...newEdges],
                        pageInfo
                      }
                    }
                  : previousResult;
              }
            })}
          loader={
            <div className="uk-padding-small" style={{ backgroundColor: '#fff' }}>
              <Loading />
            </div>
          // tslint:disable-next-line:jsx-curly-spacing
          }
        >
          {searchArticle.edges.map((article) => (
            <div key={article.node.id}>
                <ArticleItem article={article.node} hideFooter={true} />
            </div>
          ))}
        </InfiniteScroll>
    );
    }}
  </Query>
);

export default SearchArticle;