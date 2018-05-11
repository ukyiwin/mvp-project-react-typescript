import * as React from 'react';
// import InfiniteList from 'react-infinite-scroller-with-scroll-element';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { Column } from 'Components/Column';
import AppViewWrapper from 'Components/AppViewWrapper';
import ArticleItem from 'Components/ArticleItem';
import Titlebar from 'Components/Titlebar';
import { FlexCol } from 'Components/Globals';
import { sortByDate } from 'Utils/utils';
import ContentLoader from 'react-content-loader';
import WebPushManager from 'Utils/webPushManager';
import { GET_ARTICLES_BY_INTEREST } from 'Graphql/Query';
import ViewError from 'Components/ErrorView/viewError';
import { Divider } from 'Components/Pricing/style';
import { Query } from 'react-apollo';
import { ErrorComponent } from 'Components/EmptyStates';
import { DropdownHeader } from 'Components/Layouts/Header/style';
import { TextButton } from 'Components/Buttons';
import Icon from 'Components/Icons';
import { withCurrentUser } from 'Utils/withCurrentUser';
import { MyLoader } from 'Components/ArticleList';
import { NullState } from 'Components/Upsell';

class Interest extends React.Component<any> {

  state = {
    slug: ''
  };

  onChangeText = (e) => {
    this.setState({ value: e.target.value });
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    if (params.slug) {
        // this.fetchArticleandOthers(params.slug);
        this.setState({slug: params.slug});
    } else {
        // this.props.history.goBack();
    }
  }
    // tslint:disable-next-line:typedef
  componentDidUpdate(prevProps) {
    const oldId = prevProps.match.params.slug;
    const newId = this.props.match.params.slug;
    
    if (newId !== oldId) {
      this.setState({slug: oldId});
    }
  }

  render() {
    const { slug } = this.state;
    const { currentUser } = this.props;

    const user = currentUser;
    
    return (
      <FlexCol style={{ flex: '1 1 auto', maxHeight: 'calc(100% - 48px)', backgroundColor: '#fff' }}>
        <Titlebar title={'Search'} provideBack={false} noComposer />
        <AppViewWrapper>
          <Column type="only">
            <Query
              query={GET_ARTICLES_BY_INTEREST}
              variables={{text: slug, myUsername: user.username ?  user.username : ''  }}
              notifyOnNetworkStatusChange
            >
            {({ loading, error, data: { getArticleByInterest }, fetchMore, subscribeToMore, networkStatus, refetch }) => {
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
              if (!getArticleByInterest) {
                return (
                  <NullState
                    heading="There is no article that matches this interest at the moment"
                  />
                );
              }
              if (getArticleByInterest.edges.length < 1) {
                return (
                  <NullState
                    heading="There is no article that matches this interest at the moment"
                  />
                );
              }

              /*subscribeToMore({
                document: ARTICLE_SUBSCRIPTION,
                variables: {
                  myUsername: user.username ?  user.username : ''
                },
                updateQuery: (prev, { subscriptionData }) => {
                  if (!subscriptionData.data) return prev;
                  const newArticleItem = subscriptionData.data.articleAdded;

                  return Object.assign({}, prev, {
                    entry: {
                      articles: [newFeedItem, ...prev.entry.comments]
                    }
                  });
                }
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
              });*/
              return (
                  <InfiniteScroll
                    pageStart={0}
                    hasMore={getArticleByInterest.pageInfo.hasNextPage}
                    loadMore={() =>
                      fetchMore({
                        variables: {
                          text: slug,
                          myUsername: user.username ?  user.username : '' ,
                          cursor: getArticleByInterest.pageInfo.endCursor
                        },
                        updateQuery: (previousResult, { fetchMoreResult }) => {
                          const newEdges = fetchMoreResult.articles.edges;
                          const pageInfo = fetchMoreResult.articles.pageInfo;
            
                          return newEdges.length
                            ? {
                              getArticleByInterest: {
                                  __typename: previousResult.getArticleByInterest.__typename,
                                  edges: [...previousResult.getArticleByInterest.edges, ...newEdges],
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
                    {getArticleByInterest.edges.map((article) => (
                      <div key={article.node.id}>
                          <ArticleItem article={article.node} />
                      </div>
                    ))}
                  </InfiniteScroll>
              );
              }}
            </Query>
          </Column>
        </AppViewWrapper>
      </FlexCol>
    );
  }
}

export default withCurrentUser(Interest);