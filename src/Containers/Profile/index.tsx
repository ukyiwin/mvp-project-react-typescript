import * as React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import ArticleItem from 'Components/ArticleItem';
import InfiniteScroll from 'react-infinite-scroller';
import Avatar from 'Components/Avatar';
import { compose, graphql, withApollo, QueryProps, Query } from 'react-apollo';
import { ME, GET_USER_BY_USERNAME, ACTIVITY } from 'Graphql/Query';
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

interface Response {
  me: User;
}

type UserResponse = Response & QueryProps;

interface Props {
  match: any;
  history: any;
}

export default class Profile extends React.Component<Props> {
  state = {
    messages: [],
    is_typing: false,
    username: '',
    hasNoThreads: false,
    selectedView: 'search',
    hasThreads: true,
  };

  componentWillMount() {
    const { match: { params } } = this.props;
    // tslint:disable-next-line:no-console
    console.log(params);
    if (params.username) {
        this.setState({username: params.username});
    } else {
        this.props.history.goBack('*');
    }
}
// tslint:disable-next-line:typedef
componentDidUpdate(prevProps) {
    // tslint:disable-next-line:no-console
    console.log(prevProps);
    const oldId = prevProps.match.params.username;
    const newId = this.props.match.params.username;
    if (newId !== oldId) {
      this.setState({username: newId});
    }
}

  render() {
    const { username, hasNoThreads, selectedView, hasThreads } = this.state;
  
    return (
      <Query pollInterval={3000} query={GET_USER_BY_USERNAME} variables={{ username }} >
        {({loading, error, data}) => {
          if (loading) { return null; }
          if (error) { return `Error!: ${error}`; }
          console.log(data);
          const currentUser = cookies.get(CURRENT_USER) as User;
          const user = data.getUserByUsername as User;
          const { username } = user;
          return(
          <AppViewWrapper data-cy="user-view">
            <SeoMaker title={user.firstname + ' ' + user.lastname} />
            <Titlebar
              title={data.firstname + ' ' + data.lastname}
              subtitle={'Posts By'}
              provideBack={true}
              backRoute={'/'}
              noComposer
            />
            <Grid  style={{backgroundColor: ''}}>
              <CoverPhoto src={user.headerImage ? user.headerImage : ''} style={{ backgroundColor: '#fff' }}/>
              <Meta style={{ backgroundColor: '#fff' }}>
                <UserProfile
                  user={user}
                  username={username}
                  profileSize="full"
                />
  
                {currentUser &&
                  user.id !== currentUser.id && (
                    <LoginButton onClick={() => alert('hi')}>
                      Message {user.username}
                    </LoginButton>
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
                    segmentLabel="search"
                    onClick={() => this.handleSegmentClick('search')}
                    selected={selectedView === 'search'}
                  >
                  {user.articles ? user.articles.length : ''}  Articles
                  </DesktopSegment>
  
                  <DesktopSegment
                    segmentLabel="participant"
                    onClick={() => this.handleSegmentClick('participant')}
                    selected={selectedView === 'participant'}
                  >
                   {user.connectTo ? user.connectTo.length : ''} Connections
                  </DesktopSegment>
  
                  <DesktopSegment
                    segmentLabel="creator"
                    onClick={() => this.handleSegmentClick('creator')}
                    selected={selectedView === 'creator'}
                  >
                    Media
                  </DesktopSegment>
                  <MobileSegment
                    segmentLabel="search"
                    onClick={() => this.handleSegmentClick('search')}
                    selected={selectedView === 'search'}
                  >
                    Articles
                  </MobileSegment>
                  <MobileSegment
                    segmentLabel="participant"
                    onClick={() => this.handleSegmentClick('participant')}
                    selected={selectedView === 'participant'}
                  >
                   {user.connectTo ? user.connectTo.length : ''} Connections
                  </MobileSegment>
                  <MobileSegment
                    segmentLabel="creator"
                    onClick={() => this.handleSegmentClick('creator')}
                    selected={selectedView === 'creator'}
                  >
                    Media
                  </MobileSegment>
                </SegmentedControl>
  
                {hasThreads &&
                  (selectedView === 'creator' ||
                    selectedView === 'participant') && (
                    <div className="uk-width-1-1 uk-padding-small" style={{backgroundColor: '#e1eaf1'}}>
                      <ArticleList />
                    </div>
                  )}
  
                {selectedView === 'search' && 
                  <div className="uk-width-1-1 uk-padding-small" style={{backgroundColor: '#e1eaf1'}}>
                      <Query pollInterval={3000} query={ACTIVITY} variables={{ myUsername: currentUser.username }} >
                        {({loading, error, data}) => {
                          if (loading) {
                            return (
                              <div>
                                <MyLoader />
                                <br/>
                                <br/>
                                <MyLoader />
                                <br/>
                              </div>
                              );
                          }
                          if (loading) {
                            return <ErrorComponent />;
                          }

                          if (data.activity === null) {
                            return(
                              <div className="uk-padding-small" style={{ backgroundColor: '#fff' }}>
                                <EmptyComponent title="Empty activity" subtitle="Try joining a community and writing content" />
                              </div>
                            );
                          }

                          return (
                            <InfiniteScroll
                              pageStart={0}
                              hasMore={true || false}
                              loader={
                                  <div className="uk-padding-small" style={{ backgroundColor: '#fff' }}>
                                    <Loading />
                                  </div>
                              // tslint:disable-next-line:jsx-curly-spacing
                              }
                            >
                              {data.activity ? data.activity.map((article) => (
                                  <div key={article.id}>
                                    <ArticleItem article={article} />
                                  </div>
                              )) : null}
                            </InfiniteScroll>
                          );
                        }}
                      </Query>
                  </div>
                }
  
                {!hasThreads && <NullState bg="null" heading={'Write'} />}
              </Content>
            </Grid>
          </AppViewWrapper>); }}
      </Query>
    );
  }
}