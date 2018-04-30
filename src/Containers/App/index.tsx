import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CookiesProvider, CookieBannerUniversal } from 'react-cookie-banner';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import Maintenance from 'Components/Maintenance';
import { withApollo, graphql, compose, ChildProps } from 'react-apollo';
import Loadable from 'react-loadable';
import { asyncComponent } from 'react-async-component';
import { PublicLayout, PrivateLayout, EmptyLayout, ConnectLayout, LoungeLayout } from 'Components/Layouts/MainLayout';
import { isTokenExpired } from 'Utils/jwtHelper';
import { AUTH_TOKEN } from '../../constants';
import { PrivateHeader } from 'Components/Layouts/Header';
import LoadingComponent from 'Components/Loading';
import SideBar from 'Components/Layouts/SideBar';
import { User } from 'CustomTypings/schema';
import ErrorBoundary from 'react-error-boundary';
import { theme } from 'Components/Theme';
import { ME } from 'Graphql/Query';
import { FlexCol } from 'Components/Globals';
import ScrollManager from 'Components/ScrollManager';
import 'Theme/application.scss';
import { cookies } from 'link';
// import { cookies } from '../../link';

const Home = asyncComponent({
  resolve: () => import('Containers/Home'),
  LoadingComponent: () => <LoadingComponent />
});

const NotFound = asyncComponent({
  resolve: () => import('Containers/NotFound'),
  LoadingComponent: () => <LoadingComponent />,
});

const FindCommunity = asyncComponent({
  resolve: () => import('Containers/FindCommunity'),
  LoadingComponent: () => <LoadingComponent />,
});

const Profile = asyncComponent({
  resolve: () => import('Containers/Profile'),
  LoadingComponent: () => <LoadingComponent />,
});

const PublicHome = asyncComponent({
  resolve: () => import('Containers/HomePublic'),
  LoadingComponent: () => <LoadingComponent />,
});
const Login = asyncComponent({
  resolve: () => import('Containers/Auth/Login'),
  LoadingComponent: () => <LoadingComponent />,
});

const Terms = asyncComponent({
  resolve: () => import('Containers/Legal'),
  LoadingComponent: () => <LoadingComponent />,
});

const Signup = asyncComponent({
  resolve: () => import('Containers/Auth/Signup'),
  LoadingComponent: () => <LoadingComponent />,
});
const ArticleDetail = asyncComponent({
  resolve: () => import('Containers/ArticleDetail'),
  LoadingComponent: () => <LoadingComponent />,
});

const Interest = asyncComponent({
  resolve: () => import('Containers/Auth/Signup/interest'),
  LoadingComponent: () => <LoadingComponent />,
});
const Maps = asyncComponent({
  resolve: () => import('Containers/Maps'),
  LoadingComponent: () => <LoadingComponent />,
});

const Compose = asyncComponent({
  resolve: () => import('Containers/ComposeArticle'),
  LoadingComponent: () => <LoadingComponent />,
});

const Message = asyncComponent({
  resolve: () => import('Containers/Message'),
  LoadingComponent: () => <LoadingComponent />,
});

const Forum = asyncComponent({
  resolve: () => import('Containers/Forum'),
  LoadingComponent: () => <LoadingComponent />,
});

const DirectChat = asyncComponent({
  resolve: () => import('Containers/DirectChat'),
  LoadingComponent: () => <LoadingComponent />,
});

const Connections = asyncComponent({
  resolve: () => import('Containers/Connection'),
  LoadingComponent: () => <LoadingComponent />,
});

const Search = asyncComponent({
  resolve: () => import('Containers/Search'),
  LoadingComponent: () => <LoadingComponent />,
});

const ErrorView = asyncComponent({
  resolve: () => import('Components/ErrorView'),
  LoadingComponent: () => <LoadingComponent />,
});

const FinishSignup = asyncComponent({
  resolve: () => import('Containers/Auth/Signup/finishSignup'),
  LoadingComponent: () => <LoadingComponent />,
});

const Notification = asyncComponent({
  resolve: () => import('Containers/Notification'),
  LoadingComponent: () => <LoadingComponent />,
});

const Drafts = asyncComponent({
  resolve: () => import('Containers/Drafts'),
  LoadingComponent: () => <LoadingComponent />,
});

const Published = asyncComponent({
  resolve: () => import('Containers/Published'),
  LoadingComponent: () => <LoadingComponent />,
});

const Saved = asyncComponent({
  resolve: () => import('Containers/Saved'),
  LoadingComponent: () => <LoadingComponent />,
});
const Settings = asyncComponent({
  resolve: () => import('Containers/Settings'),
  LoadingComponent: () => <LoadingComponent />,
});

const SignupProfile = asyncComponent({
  resolve: () => import('Containers/Auth/Signup/signupProfile'),
  LoadingComponent: () => <LoadingComponent />,
});

const Invite = asyncComponent({
  resolve: () => import('Containers/Invite'),
  LoadingComponent: () => <LoadingComponent />,
});

interface Props {
    // tslint:disable-next-line:no-any
    client?: any;
    // tslint:disable-next-line:no-any
    history?: any;
    // tslint:disable-next-line:no-any
    allInterest: any;
    maintenanceMode: boolean;
}

interface Response {
    me: User;
}

interface State {
    isAuthenticated: boolean;
    token: string;
    expireToken: boolean;
    me: object;
    avatar: string;
}

const Body = styled(FlexCol)`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${(props: any) => props.theme.bg.wash};

  @media (max-width: 768px) {
    height: 100vh;
    max-height: 100vh;
  }
`;

// export const AppContext = React.c
class App extends React.Component<Props & ChildProps<Response & Props>, State> {
    state = {
        isAuthenticated: false,
        token: '',
        expireToken: false,
        avatar: '',
        // tslint:disable-next-line:no-object-literal-type-assertion
        me: {} as User,
    };

    componentWillMount() {
      this.props.client.query({
        query: ME
      }).then((res) => {
        console.log(res.data.me);
        this.setState({me: res.data.me});
      });
      const token = cookies.get(AUTH_TOKEN);
        /*cookies.set('test', 'a', {
          expires: new Date(2020-05-04),
          path: '/api',
          domain: '*.example.com',
          secure: true
        });*/
      if (token !== null && token !== undefined) {
            const expired = isTokenExpired(token);
            if (!expired) {
                this.setState({ isAuthenticated: true });
                this.setState({ token });
                this.setState({ expireToken: expired });
                this.loadMe();
            } else {
                cookies.remove(AUTH_TOKEN, '', -1);
                this.setState({ isAuthenticated: false });
                this.setState({ token: '' });
                this.setState({ expireToken: false });
            }
        }
    }

    componentDidMount() {
      const ele = document.getElementById('ipl-progress-indicator');
      if (ele) {
        setTimeout(() => {
          ele.classList.add('available');
          setTimeout(() => {
            ele.outerHTML = '';
          },         2000);
        },         1000);
      }
      console.log(this.props.me);
    }

    refreshToken = (token: string) => {
        this.setState({
            token,
        });

        if (token !== '' && token !== undefined) {
            this.setState({
                isAuthenticated: true,
            });
            this.loadMe();
        }
    }

    _logout = () => {
        cookies.remove(AUTH_TOKEN, '', -1);
        this.setState({ isAuthenticated: false });
        this.setState({ token: '' });
        this.setState({ expireToken: false });
    }

    loadMe() {
        this.props.client
            .query({
                query: ME,
            })
            .then(({ data }) => {
                // tslint:disable-next-line:no-console
                console.log(data.me);
                this.setState({ me: data.me });

                if (data.me.completedProfile === 1) {
                  this.props.history.replace('/add/profile');
                } else if (data.me.completedProfile === 2) {
                  this.props.history.replace('/add/interest');
                } else if (data.me.completedProfile === 3) {
                  this.props.history.push('/profile/complete');
                }

                if (data.me.avata) {
                  if (data.me.avata.url) {
                    this.setState({ avatar: data.me.avata.url });
                  }
                }
                // tslint:disable-next-line:no-console
                console.log(this.state.avatar);
            })
            .catch((error) => {
                // localStorage.removeItem(AUTH_TOKEN);
                if (error) {
                    // tslint:disable-next-line:no-console
                    console.log(error);
                    this._logout();
                }
            });
    }

    render() {
      const { isAuthenticated } = this.state;
      // const userAuthed = token ? true : false;
      // tslint:disable-next-line:no-console
      console.log(isAuthenticated);
      if (this.props.maintenanceMode) {
        return (
          <ThemeProvider theme={theme}>
            <ScrollManager>
              <Body>
                <Maintenance />
              </Body>
            </ScrollManager>
          </ThemeProvider>
        );
      } else {
        return (
          <ThemeProvider theme={theme}>
            <ErrorBoundary FallbackComponent={ErrorView}>
              <ScrollManager>
                <div className="bg-muted" style={{ backgroundColor: '#e1eaf1' }}>
                  <Helmet>
                      <title>Unizonn</title>
                      <meta name="an inclusive community" content="Unizonn community" />
                  </Helmet>
                  <Switch>
                          <Route
                              exact={true}
                              path="/"
                              render={() =>
                                isAuthenticated ? (
                                    <PrivateLayout 
                                      exact={true} 
                                      me={this.state.me} 
                                      component={Home} 
                                      isAuthenticated={isAuthenticated} 
                                      logout={this._logout} 
                                    />
                                ) : (
                                    <PublicLayout 
                                      exact={true} 
                                      me={this.state.me}
                                      component={PublicHome}
                                      refreshToken={this.refreshToken}
                                      isAuthenticated={isAuthenticated}
                                      logout={this._logout} 
                                    />
                                )
                              }
                              // tslint:disable-next-line:jsx-alignment
                          />
                          <PrivateLayout 
                            me={this.state.me} 
                            component={Home} 
                            path="/home" 
                            exact={true} 
                            isAuthenticated={isAuthenticated} 
                            logout={this._logout} 
                          />
                          <EmptyLayout 
                            me={this.state.me} 
                            exact={true}
                            component={Profile} 
                            path="/n/:username"
                            isAuthenticated={isAuthenticated} 
                            logout={this._logout} 
                          />

                          <EmptyLayout 
                            component={Settings} 
                            path="/n/:username/settings"
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />

                          <EmptyLayout 
                            component={Search} 
                            path="/n/:username/connections"
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />

                          <PublicLayout 
                            component={Login}
                            refreshToken={this.refreshToken}
                            path="/login"
                            exact={true} 
                            isAuthenticated={isAuthenticated}  
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <Route 
                            component={Terms}
                            path="/terms"
                            exact={true} 
                          />
                          <Route 
                            component={Invite}
                            path="/invite"
                            exact={true} 
                          />
                          <Route 
                            component={Notification}
                            path="/notif"
                            exact={true} 
                          />
                          <Route 
                            component={Terms}
                            path="/about"
                            exact={true}
                          />
                          <PublicLayout 
                            component={Login}
                            exact={true}
                            refreshToken={this.refreshToken}
                            path="/login/:email"
                            isAuthenticated={isAuthenticated}  
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <PublicLayout 
                            component={Signup}
                            refreshToken={this.refreshToken}
                            path="/signup" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}  
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <PublicLayout 
                            component={Signup}
                            exact={true}
                            refreshToken={this.refreshToken}
                            path="/signup/:email" 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <LoungeLayout 
                            component={FinishSignup} 
                            path="/profile/complete" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <LoungeLayout 
                            exact={true} 
                            component={SignupProfile}
                            path="/add/profile" 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            path="/article/:slug"
                            isAuthenticated={isAuthenticated} 
                            component={ArticleDetail}
                            exact={true} 
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <LoungeLayout 
                            component={Interest} 
                            path="/add/interest" 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            exact={true} 
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Maps} 
                            path="/library" 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            exact={true} 
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Drafts} 
                            path="/drafts" 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            exact={true} 
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Published} 
                            path="/published" 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            exact={true} 
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Saved} 
                            path="/saved" 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            exact={true} 
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Message} 
                            path="/message" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Forum} 
                            path="/community" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Connections} 
                            path="/connections" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Forum} 
                            exact={true} 
                            path="/community/:id" 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Forum} 
                            exact={true} 
                            path="/community/:id/:channel" 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={DirectChat} 
                            exact={true} 
                            path="/conversation"
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={FindCommunity} 
                            exact={true} 
                            path="/find/community"
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={DirectChat} 
                            exact={true} 
                            path="/conversation/:username"
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <LoungeLayout 
                            component={Compose} 
                            path="/write" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <LoungeLayout 
                            component={Compose} 
                            path="/write/:id" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Notification} 
                            path="/notifications" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <LoungeLayout 
                            component={Search} 
                            path="/search/:school" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Search} 
                            path="/search/:interest" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <Route 
                            component={Search} 
                            path="/search"
                            exact={true}
                          />
                          <EmptyLayout 
                            component={Search} 
                            path="/search/:library"
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Search} 
                            path="/search/:user"
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Search} 
                            path="/search"
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Search} 
                            path="/search/:tags" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Profile} 
                            path="/profile" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <EmptyLayout 
                            component={Profile} 
                            path="/profile/:id" 
                            exact={true} 
                            isAuthenticated={isAuthenticated}
                            logout={this._logout}
                            me={this.state.me}
                          />
                          <Route component={NotFound} path="*" />
                  </Switch>
                  <SideBar />
                </div>
              </ScrollManager>
            </ErrorBoundary>
          </ThemeProvider>
        );
      }
    }
}

export default withRouter(compose(withApollo)(App));
