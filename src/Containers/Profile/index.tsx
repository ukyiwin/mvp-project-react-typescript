import * as React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import ArticleItem from 'Components/ArticleItem';
import InfiniteScroll from 'react-infinite-scroller';
import Avatar from 'Components/Avatar';
import { compose, graphql, withApollo, QueryProps, Query, Mutation } from 'react-apollo';
import { ME, GET_USER_BY_USERNAME, USER_CONNECTIONS, ACTIVITY } from 'Graphql/Query';
import { User } from 'CustomTypings/schema';
import SeoMaker from 'Components/SeoMaker';
import ArticleList, { MyLoader } from 'Components/ArticleList';
import FollowButton from 'Components/FollowButton';
import AppViewWrapper from 'Components/AppViewWrapper';
import Titlebar from 'Components/Titlebar';
import Link from 'Components/Link';
import { UserProfile } from 'Components/Profile';
import { Loading } from 'Components/Loading';
import { NullState } from 'Components/Upsell';
import { Button, ButtonRow } from 'Components/Buttons';
// import Search from './components/search';
import {
  SegmentedControl,
  DesktopSegment,
  MobileSegment,
} from 'Components/SegmentedControl';
import { CoverPhoto } from 'Components/Profile/coverPhoto';
import { Grid, Meta, Content, Extras, ColumnHeading } from './style';
import './style.scss';
import { LoginButton } from 'Components/MoreViews/style';
import { cookies } from 'link';
import { CURRENT_USER } from '../../constants';
import { ErrorComponent, EmptyComponent } from 'Components/EmptyStates';
import { UN_FOLLOW_USER, FOLLOW_USER } from 'Graphql/Mutation/user';
import { GET_COMMUNITY, MY_COMMUNITIES, USER_COMMUNITIES } from 'Graphql/Query/Community';
import ServerIndexItem from 'Components/Community/CommunitySidebar/serverName';
import { withCurrentUser } from 'Utils/withCurrentUser';
import PersonItem from 'Components/PersonItem';

interface Response {
  me: User;
}

type UserResponse = Response & QueryProps;

interface Props {
  match: any;
  history: any;
  currentUser?: any;
}

class Profile extends React.Component<Props> {
  state = {
    messages: [],
    is_typing: false,
    username: '',
    hasNoThreads: false,
    selectedView: 'article',
    hasThreads: true,
  };

  componentWillMount() {
    const { match: { params } } = this.props;
    
    if (params.username) {
        this.setState({username: params.username});
    } else {
        this.props.history.goBack('*');
    }
  }
  // tslint:disable-next-line:typedef
  componentDidUpdate(prevProps) {
      const oldId = prevProps.match.params.username;
      const newId = this.props.match.params.username;
      if (newId !== oldId) {
        this.setState({username: newId});
      }
  }

  handleSegmentClick(value) {
    this.setState({selectedView: value});
  }

  renderButtons(currentUser, user, isFollowing, isConnected) {
    if (currentUser && user.id !== currentUser.id) {
      if (isConnected.length < 1) {
        if (isFollowing.length < 1) {
          return (
            <Mutation 
              mutation={FOLLOW_USER}
              update={(cache, { data: { followUser } }) => {
                const { getUserByUsername } = cache.readQuery({ query: GET_USER_BY_USERNAME });
                cache.writeQuery({
                  query: GET_USER_BY_USERNAME,
                  data: { getUserByUsername: followUser }
                });
              }}
            >
            {(followUser, {loading, error}) => (
              <LoginButton onClick={() => {
                followUser({
                  variables: {
                    username: user.username
                  },
                  optimisticResponse: {
                    __typename: 'Mutation',
                    updateComment: {
                      id: user.id,
                      __typename: 'User',
                      isFollowing: [].push(currentUser.id)
                    }
                  }
                });
              }}>
                Follow
              </LoginButton>
            )}
            </Mutation>
          );
        } else {
          return(
            <Mutation 
              mutation={UN_FOLLOW_USER}
              update={(cache, { data: { unFollowUser } }) => {
                const { getUserByUsername } = cache.readQuery({ query: GET_USER_BY_USERNAME });
                cache.writeQuery({
                  query: GET_USER_BY_USERNAME,
                  data: { getUserByUsername: unFollowUser }
                });
              }}
            >
            {(unFollowUser, {loading, error}) => (
              <LoginButton isMember onClick={() => {
                unFollowUser({
                  variables: {
                    username: user.username
                  },
                  optimisticResponse: {
                    __typename: 'Mutation',
                    updateComment: {
                      id: user.id,
                      __typename: 'User',
                      isFollowing: []
                    }
                  }
                });
              }}>
                Unfollow
              </LoginButton>
            )}
            </Mutation>
          );
        }
      } else {
        return(
          <Link to={`/conversation/${user.username}`}>
            <LoginButton>
                Message {user.username}
            </LoginButton>
          </Link>
        );
      }
      
    }
  }

  render() {
    const { username, hasNoThreads, selectedView, hasThreads } = this.state;
    const { currentUser } = this.props;

    return (
      <Query query={GET_USER_BY_USERNAME} variables={{ username, myUsername: currentUser.username }} >
        {({loading, error, data}) => {
          if (loading) { return null; }
          if (error) { return `Error!: ${error}`; }
          const user = data.getUserByUsername as User;
          const { username } = user;
          return(
          <AppViewWrapper data-cy="user-view">
            <SeoMaker title={user.firstname + ' ' + user.lastname} />
            <Grid>
              <CoverPhoto src={user.headerImage ? user.headerImage : ''} style={{ backgroundColor: '#fff' }}/>
              <Meta style={{ backgroundColor: '#fff' }}>
                <UserProfile
                  user={user}
                  username={username}
                  profileSize="full"
                />
                {this.renderButtons(currentUser, user, user.isFollowing, user.isConnected)}
                {currentUser && user.id !== currentUser.id && (
                    <Link to={`/conversation/${user.username}`}>
                      <LoginButton>
                          Message {user.username}
                      </LoginButton>
                    </Link>
                  )}
                {currentUser &&
                  user.id === currentUser.id && (
                    <Link to={`/n/${username}/settings`}>
                      <LoginButton isMember>Edit Profile</LoginButton>
                    </Link>
                  )}
              </Meta>
              <Content>
                <SegmentedControl style={{ margin: '0 0 0 0', paddingTop: 16, backgroundColor: '#fff' }}>
                  <DesktopSegment
                    segmentLabel="article"
                    onClick={() => this.handleSegmentClick('article')}
                    selected={selectedView === 'article'}
                  >
                  {user.articles ? user.articles.length : ''}  Articles
                  </DesktopSegment>
  
                  <DesktopSegment
                    segmentLabel="connections"
                    onClick={() => this.handleSegmentClick('connections')}
                    selected={selectedView === 'connections'}
                  >
                   {user.connectTo ? user.connectTo.length : ''} Connections
                  </DesktopSegment>
  
                  <DesktopSegment
                    segmentLabel="community"
                    onClick={() => this.handleSegmentClick('community')}
                    selected={selectedView === 'community'}
                  >
                    Community
                  </DesktopSegment>
                  <MobileSegment
                    segmentLabel="article"
                    onClick={() => this.handleSegmentClick('article')}
                    selected={selectedView === 'article'}
                  >
                    Articles
                  </MobileSegment>
                  <MobileSegment
                    segmentLabel="connections"
                    onClick={() => this.handleSegmentClick('connections')}
                    selected={selectedView === 'connections'}
                  >
                   {user.connectTo ? user.connectTo.length : ''} Connections
                  </MobileSegment>
                  <MobileSegment
                    segmentLabel="community"
                    onClick={() => this.handleSegmentClick('community')}
                    selected={selectedView === 'community'}
                  >
                    Community
                  </MobileSegment>
                </SegmentedControl>
  
                {selectedView === 'article' && (
                    <div className="uk-width-1-1 uk-padding-small" style={{backgroundColor: '#e1eaf1'}}>
                      <Query query={ACTIVITY} variables={{ username: user.username }} >
                      {({ loading, error, data: { activity }, fetchMore, networkStatus, refetch }) => {
                        if (loading) {
                          return (
                            <div className="uk-width-1-1 uk-padding-small" style={{ backgroundColor: '#fff' }}>
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

                        if (activity.edges.length < 1) {
                          return (
                            <NullState bg="null" heading={'User has not published an article yet'} />
                          );
                        }

                        return (
                            <InfiniteScroll
                              pageStart={0}
                              hasMore={activity.pageInfo.hasNextPage}
                              loadMore={() =>
                                fetchMore({
                                  variables: {
                                    username: user.username,
                                    cursor: activity.pageInfo.endCursor
                                  },
                                  updateQuery: (previousResult, { fetchMoreResult }) => {
                                    const newEdges = fetchMoreResult.activity.edges;
                                    const pageInfo = fetchMoreResult.activity.pageInfo;
                      
                                    return newEdges.length
                                      ? {
                                        activity: {
                                            __typename: previousResult.activity.__typename,
                                            edges: [...previousResult.activity.edges, ...newEdges],
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
                              {activity.edges.map((article) => (
                                <div key={article.node.id}>
                                    <ArticleItem article={article.node} />
                                </div>
                              ))}
                            </InfiniteScroll>
                        );
                        }}
                      </Query>
                    </div>
                  )
                }
  
                {selectedView === 'connections' &&  (
                    <div className="uk-width-1-1 uk-padding-small" style={{backgroundColor: '#e1eaf1'}}>
                      <Query query={USER_CONNECTIONS} variables={{ username, myUsername: currentUser.username }} >
                      {({ loading, error, data: { userConnections }, fetchMore, networkStatus, refetch }) => {
                        if (loading) {
                          return (
                            <div className="uk-width-1-1 uk-padding-small" style={{ backgroundColor: '#fff' }}>
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

                        if (userConnections.length < 1) {
                          return (
                            <NullState bg="null" heading={'No connection yet'} />
                          );
                        }

                        return (
                            <InfiniteScroll
                              pageStart={0}
                              hasMore={false}
                              loader={
                                <div className="uk-padding-small" style={{ backgroundColor: '#fff' }}>
                                  <MyLoader />
                                </div>
                              // tslint:disable-next-line:jsx-curly-spacing
                              }
                            >
                              {userConnections.map((person) => (
                                <div key={person.id}>
                                    <PersonItem name={person.username} user={person} />
                                </div>
                              ))}
                            </InfiniteScroll>
                        );
                        }}
                      </Query>
                    </div>
                  )
                }

                {selectedView === 'community' &&  (
                    <div className="uk-width-1-1 uk-padding-small" style={{backgroundColor: '#e1eaf1'}}>
                      <Query
                        query={USER_COMMUNITIES}
                        variables={{ username, myUsername: currentUser.username }}
                      >
                      {({ loading, error, data: { userCommunities }, fetchMore, networkStatus, refetch }) => {
                        if (loading) {
                          return (
                            <div className="uk-width-1-1 uk-padding-small" style={{ backgroundColor: '#fff' }}>
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

                        if (userCommunities.length < 1) {
                          return (
                            <NullState bg="null" heading={'User has not join a community yet'} />
                          );
                        }

                        return (
                            <InfiniteScroll
                              pageStart={0}
                              hasMore={false}
                              loader={
                                <div className="uk-padding-small" style={{ backgroundColor: '#fff' }}>
                                  <MyLoader />
                                </div>
                              // tslint:disable-next-line:jsx-curly-spacing
                              }
                            >
                              {userCommunities.map((community) => (
                                <div key={community.id}>
                                  <ServerIndexItem community={community} />
                                </div>
                              ))}
                            </InfiniteScroll>
                        );
                        }}
                      </Query>
                    </div>
                  )
                }
              </Content>
            </Grid>
          </AppViewWrapper>); }}
      </Query>
    );
  }
}

export default withCurrentUser(Profile);