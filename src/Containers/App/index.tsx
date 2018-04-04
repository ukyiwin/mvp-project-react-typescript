import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CookiesProvider, CookieBannerUniversal } from 'react-cookie-banner';
import { Helmet } from 'react-helmet';
import { withApollo, graphql, compose, ChildProps } from 'react-apollo';
import Loadable from 'react-loadable';
import { asyncComponent } from 'react-async-component';
import { PublicLayout, PrivateLayout, EmptyLayout, ConnectLayout } from 'Components/Layouts/MainLayout';
import { isTokenExpired } from 'Utils/jwtHelper';
import { AUTH_TOKEN } from '../../constants';
import { PrivateHeader } from 'Components/Layouts/Header';
import LoadingComponent from 'Components/Loading';
import SideBar from 'Components/Layouts/SideBar';
import { User } from 'CustomTypings/schema';
import { ME } from 'Graphql/Query';
import 'Theme/application.scss';
// import 'Theme/theme.less';
// import '../semantic-ui-theme';
import { cookies } from 'link';
// import { cookies } from '../../link';

const Home = asyncComponent({
  resolve: () => System.import('Containers/Home'),
  LoadingComponent: () => <LoadingComponent />
});

const NotFound = asyncComponent({
  resolve: () => System.import('Containers/NotFound'),
  LoadingComponent: () => <LoadingComponent />,
});

const Profile = asyncComponent({
  resolve: () => System.import('Containers/Profile'),
  LoadingComponent: () => <LoadingComponent />,
});

const PublicHome = asyncComponent({
  resolve: () => System.import('Containers/HomePublic'),
  LoadingComponent: () => <LoadingComponent />,
});
const Login = asyncComponent({
  resolve: () => System.import('Containers/Auth/Login'),
  LoadingComponent: () => <LoadingComponent />,
});

const Signup = asyncComponent({
  resolve: () => System.import('Containers/Auth/Signup'),
  LoadingComponent: () => <LoadingComponent />,
});
const ArticleDetail = asyncComponent({
  resolve: () => System.import('Containers/ArticleDetail'),
  LoadingComponent: () => <LoadingComponent />,
});

const Interest = asyncComponent({
  resolve: () => System.import('Containers/Auth/Signup/interest'),
  LoadingComponent: () => <LoadingComponent />,
});
const Maps = asyncComponent({
  resolve: () => System.import('Containers/Maps'),
  LoadingComponent: () => <LoadingComponent />,
});

const Compose = asyncComponent({
  resolve: () => System.import('Containers/ComposeArticle'),
  LoadingComponent: () => <LoadingComponent />,
});

const Message = asyncComponent({
  resolve: () => System.import('Containers/Message'),
  LoadingComponent: () => <LoadingComponent />,
});

const Forum = asyncComponent({
  resolve: () => System.import('Containers/Forum'),
  LoadingComponent: () => <LoadingComponent />,
});

const Connections = asyncComponent({
  resolve: () => System.import('Containers/Connection'),
  LoadingComponent: () => <LoadingComponent />,
});

const Search = asyncComponent({
  resolve: () => System.import('Containers/Connection'),
  LoadingComponent: () => <LoadingComponent />,
});

const FinishSignup = asyncComponent({
  resolve: () => System.import('Containers/Auth/Signup/finishSignup'),
  LoadingComponent: () => <LoadingComponent />,
});

const SignupProfile = asyncComponent({
  resolve: () => System.import('Containers/Auth/Signup/signupProfile'),
  LoadingComponent: () => <LoadingComponent />,
});

interface Props {
    // tslint:disable-next-line:no-any
    client?: any;
    // tslint:disable-next-line:no-any
    history?: any;
    // tslint:disable-next-line:no-any
    allInterest: any;
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

class App extends React.Component<Props & ChildProps<Response, {}>, State> {
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

        return (
            <div className="uk-offcanvas-content bg-muted" style={{ backgroundColor: '#e1eaf1' }}>
                
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
                                exact={false} 
                                me={this.state.me} 
                                component={Home} 
                                isAuthenticated={isAuthenticated} 
                                logout={this._logout} 
                              />
                          ) : (
                              <PublicLayout 
                                exact={false} 
                                me={this.state.me}
                                component={PublicHome}
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
                      exact={false} 
                      isAuthenticated={isAuthenticated} 
                      logout={this._logout} 
                    />
                    <EmptyLayout 
                      me={this.state.me} 
                      exact={true} 
                      component={Profile} 
                      path="/:username/" 
                      isAuthenticated={isAuthenticated} 
                      logout={this._logout} 
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
                    <EmptyLayout 
                      component={FinishSignup} 
                      path="/signup/complete" 
                      exact={true} 
                      isAuthenticated={isAuthenticated}
                      logout={this._logout}
                      me={this.state.me}
                    />
                    <EmptyLayout 
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
                    <EmptyLayout 
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
                      component={Message} 
                      path="/message" 
                      exact={true} 
                      isAuthenticated={isAuthenticated}
                      logout={this._logout}
                      me={this.state.me}
                    />
                    <EmptyLayout 
                      component={Forum} 
                      path="/forum" 
                      exact={true} 
                      isAuthenticated={isAuthenticated}
                      logout={this._logout}
                      me={this.state.me}
                    />
                    <ConnectLayout 
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
                      path="/forum/:id" 
                      isAuthenticated={isAuthenticated}
                      logout={this._logout}
                      me={this.state.me}
                    />
                    <EmptyLayout 
                      component={Compose} 
                      path="/write" 
                      exact={true} 
                      isAuthenticated={isAuthenticated}
                      logout={this._logout}
                      me={this.state.me}
                    />
                    <EmptyLayout 
                      component={Compose} 
                      path="/write/:id" 
                      exact={true} 
                      isAuthenticated={isAuthenticated}
                      logout={this._logout}
                      me={this.state.me}
                    />
                    <EmptyLayout 
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
                    <Route exact={true} path="/:url" />
                    <PrivateLayout 
                      path="/logout"
                      exact={true} 
                      isAuthenticated={isAuthenticated} 
                      render={() => this._logout()}
                      logout={this._logout}
                      me={this.state.me}
                    />
                </Switch>
                <SideBar />
            </div>
        );
    }
}

export default withRouter(compose(withApollo)(App));
