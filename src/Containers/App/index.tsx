import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CookiesProvider, CookieBannerUniversal } from 'react-cookie-banner';
import { Helmet } from 'react-helmet';
import { withApollo, graphql, compose, ChildProps } from 'react-apollo';
import Loadable from 'react-loadable';
import { PublicLayout, PrivateLayout, EmptyLayout, ProfileLayout } from 'Components/Layouts/MainLayout';
import { isTokenExpired } from 'Utils/jwtHelper';
import { AUTH_TOKEN } from '../../constants';
import { PrivateHeader } from 'Components/Layouts/Header';
import LoadingComponent from 'Components/Loading';
import SideBar from 'Components/Layouts/SideBar';
import { User } from 'CustomTypings/schema';
import { ME } from 'Graphql/Query';
import 'Theme/application.scss';
import './style.scss';
import { cookies } from '../../link';

const Home = Loadable({
  loader: () => import('Containers/Home'),
  loading: () => <LoadingComponent />,
});

const NotFound = Loadable({
  loader: () => import('Containers/NotFound'),
  loading: () => <LoadingComponent />,
});

const Profile = Loadable({
  loader: () => import('Containers/Profile'),
  loading: () => <LoadingComponent />,
});

const PublicHome = Loadable({
  loader: () => import('Containers/HomePublic'),
  loading: () => <LoadingComponent />,
});
const Login = Loadable({
  loader: () => import('Containers/Auth/Login'),
  loading: () => <LoadingComponent />,
});

const Signup = Loadable({
  loader: () => import('Containers/Auth/Signup'),
  loading: () => <LoadingComponent />,
});
const ArticleDetail = Loadable({
  loader: () => import('Containers/ArticleDetail'),
  loading: () => <LoadingComponent />,
});

const Interest = Loadable({
  loader: () => import('Containers/Auth/Signup/interest'),
  loading: () => <LoadingComponent />,
});
const Maps = Loadable({
  loader: () => import('Containers/Maps'),
  loading: () => <LoadingComponent />,
});

const Compose = Loadable({
  loader: () => import('Containers/ComposeArticle'),
  loading: () => <LoadingComponent />,
});

const Message = Loadable({
  loader: () => import('Containers/Message'),
  loading: () => <LoadingComponent />,
});

const Forum = Loadable({
  loader: () => import('Containers/Forum'),
  loading: () => <LoadingComponent />,
});

const FinishSignup = Loadable({
  loader: () => import('Containers/Auth/Signup/finishSignup'),
  loading: () => <LoadingComponent />,
});

const SignupProfile = Loadable({
  loader: () => import('Containers/Auth/Signup/signupProfile'),
  loading: () => <LoadingComponent />,
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
        me: {
            id: '',
            firstname: '',
            lastname: '',
            email: '',
        },
    };

    componentWillMount() {
        /*const token = cookies.get(AUTH_TOKEN);
        cookies.set('test', 'a', {
          expires: new Date(2020-05-04),
          path: '/api',
          domain: '*.example.com',
          secure: true
        });
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
        }*/
    }

    componentDidMount() {
        // this.props.
        // tslint:disable-next-line:no-console
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
            // this.loadMe();
        }
    }

    _logout = () => {
        // localStorage.removeItem(AUTH_TOKEN);
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

                this.setState({ avatar: data.me.avata.url });
                // tslint:disable-next-line:no-console
                console.log(this.state.avatar);
            })
            .catch((error) => {
                // localStorage.removeItem(AUTH_TOKEN);
                if (error) {
                    // tslint:disable-next-line:no-console
                    console.log('grooom');
                    // this.setState({isAuthenticated: false});
                    this.setState({ token: '' });
                    this.setState({ expireToken: false });
                }
            });
    }

    render() {
        const { isAuthenticated } = this.state;
        // const userAuthed = token ? true : false;
        // tslint:disable-next-line:no-console
        console.log(isAuthenticated);

        return (
            <div className="uk-offcanvas-content bg-muted" style={{ minHeight: '40vh', backgroundColor: '#e4e6eb' }}>
                <div>
                <CookiesProvider cookies={cookies}>
                  <CookieBannerUniversal
                    message="Yes, we use cookies. If you don't like it change website, we won't miss you!"
                    // tslint:disable-next-line:no-empty
                    onAccept={() => {}}
                    cookie="user-has-accepted-cookies" />
                </CookiesProvider>
                </div>
                <Helmet>
                    <title>Unizonn</title>
                    <meta name="an inclusive community" content="Unizonn community" />
                </Helmet>
                <PrivateHeader avatar={this.state.avatar} isAuthenticated={isAuthenticated} logout={this._logout} />
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        render={() =>
                            isAuthenticated ? (
                                <PrivateLayout component={Home} isAuthenticated={isAuthenticated} />
                            ) : (
                                <PublicLayout component={PublicHome} isAuthenticated={isAuthenticated} />
                            )
                        }
                        // tslint:disable-next-line:jsx-alignment
                    />
                    <PrivateLayout component={Home} path="/home" isAuthenticated={isAuthenticated} />
                    <PublicLayout 
                      component={Login}
                      refreshToken={this.refreshToken}
                      path="/login"
                      isAuthenticated={isAuthenticated}  
                    />
                    <PublicLayout 
                      component={Login}
                      exact={true}
                      refreshToken={this.refreshToken}
                      path="/login/:email"
                      isAuthenticated={isAuthenticated}  
                    />
                    <PublicLayout 
                      component={Signup}
                      refreshToken={this.refreshToken}
                      path="/signup" 
                      isAuthenticated={isAuthenticated}  
                    />
                    <PublicLayout 
                      component={Signup}
                      exact={true}
                      refreshToken={this.refreshToken}
                      path="/signup/:email" 
                      isAuthenticated={isAuthenticated}  
                    />
                    <EmptyLayout component={FinishSignup} path="/signup/complete" isAuthenticated={isAuthenticated} />
                    <EmptyLayout 
                      exact={true} 
                      component={SignupProfile} 
                      path="/add/profile" 
                      isAuthenticated={isAuthenticated}
                    />
                    <EmptyLayout 
                      path="/article/:slug"
                      isAuthenticated={isAuthenticated} 
                      component={ArticleDetail}
                    />
                    <EmptyLayout component={Interest} path="/add/interest" isAuthenticated={isAuthenticated} />
                    <EmptyLayout component={Maps} path="/library" isAuthenticated={isAuthenticated} />
                    <EmptyLayout component={Message} path="/message" isAuthenticated={isAuthenticated} />
                    <EmptyLayout component={Forum} path="/Forum" isAuthenticated={isAuthenticated} />
                    <EmptyLayout component={Compose} path="/write" isAuthenticated={isAuthenticated} />
                    <ProfileLayout component={Profile} path="/profile" isAuthenticated={isAuthenticated}/>
                    <ProfileLayout component={Profile} path="/profile/:id" isAuthenticated={isAuthenticated}/>
                    <Route component={NotFound} path="*" />
                    <PrivateLayout 
                      path="/logout"
                      isAuthenticated={isAuthenticated} 
                      render={() => this._logout()}  
                    />
                </Switch>
                <SideBar />
            </div>
        );
    }
}

export default withRouter(compose(withApollo, graphql<Response, {}>(ME))(App));
