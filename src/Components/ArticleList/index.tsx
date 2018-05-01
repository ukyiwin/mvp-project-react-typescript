import * as React from 'react';
import ArticleItem from 'Components/ArticleItem';
import { graphql, QueryProps, Query } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';
import { ErrorComponent, LoadingComponent, EmptyComponent } from 'Components/EmptyStates';
import { ARTICLES } from 'Graphql/Query';
import { Article, User } from 'CustomTypings/schema';
import ContentLoader from 'react-content-loader';
import { cookies } from 'link';
import { CURRENT_USER } from '../../constants';

// const MyFacebookLoader = () => <Facebook />;

export const MyLoader = () => (
    <ContentLoader height={200} width={400} speed={2} primaryColor={'#f3f3f3'} secondaryColor={'#ecebeb'}>
        <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
        <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
        <rect x="1" y="136" rx="3" ry="3" width="350" height="6.4" />
        <rect x="-1" y="118" rx="3" ry="3" width="380" height="6.4" />
        <rect x="0" y="150" rx="3" ry="3" width="201" height="6.4" />
        <circle cx="30" cy="30" r="30" />
        <rect x="-0.5" y="70.27" rx="0" ry="0" width="348" height="16" />
        <rect x="1.5" y="89.27" rx="0" ry="0" width="217" height="12" />
        <rect x="2.5" y="175" rx="0" ry="0" width="61" height="18" />
        <rect x="72.5" y="175" rx="0" ry="0" width="55" height="18" />
        <rect x="136.5" y="175.27" rx="0" ry="0" width="56" height="18" />
        <rect x="358.5" y="177.27" rx="0" ry="0" width="25" height="16" />
        <rect x="325.5" y="177.27" rx="0" ry="0" width="23" height="16" />
    </ContentLoader>
);

const ArticleList = () => {
  const user = cookies.get(CURRENT_USER) as User;
  return(
  <Query
    query={ARTICLES}
    variables={{myUsername: user.username ?  user.username : ''  }}
    pollInterval={5000}
  >
  {({ loading, error, data: { articles }, fetchMore, networkStatus, refetch }) => {
    if (loading) {
      return (
        <div className="uk-width-1-1 uk-padding-small" style={{ backgroundColor: '#fff' }}>
          <div><MyLoader /></div>
          <br />
          <div><MyLoader /></div>
          <br />
          <div><MyLoader /></div>
          <br />
          <div><MyLoader /></div>
        </div>
      );
    }
    if (error) {
        return <ErrorComponent />;
    }
    if (articles.edges.length < 1) {
      return (
        <EmptyComponent 
          title="There is no article for you" 
          subtitle="Connect to other students or update your interest in your profile settings"
        />);
    }
    return (
        <InfiniteScroll
          pageStart={0}
          hasMore={articles.pageInfo.hasNextPage}
          loadMore={() =>
            fetchMore({
              variables: {
                myUsername: user.username ?  user.username : '' ,
                cursor: articles.pageInfo.endCursor
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.articles.edges;
                const pageInfo = fetchMoreResult.articles.pageInfo;
  
                return newEdges.length
                  ? {
                      articles: {
                        __typename: previousResult.articles.__typename,
                        edges: [...previousResult.articles.edges, ...newEdges],
                        pageInfo
                      }
                    }
                  : previousResult;
              }
            })}
          loader={
            <div className="uk-padding-small" style={{ backgroundColor: '#fff' }}>
              <MyLoader />
            </div>
          // tslint:disable-next-line:jsx-curly-spacing
          }
        >
          {articles.edges.map((article) => (
            <div key={article.node.id}>
                <ArticleItem article={article.node} />
            </div>
          ))}
        </InfiniteScroll>
    );
    }}
  </Query>
); };

export default ArticleList;