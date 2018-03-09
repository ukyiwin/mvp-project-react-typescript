import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';
import { Helmet } from 'react-helmet';
import NotFound from '../NotFound';
import { PublicLayout, PrivateLayout, EmptyLayout, ProfileLayout } from 'Components/Layouts/MainLayout';
import { isTokenExpired } from 'Utils/jwtHelper';
import { AUTH_TOKEN } from '../../constants';
import { PrivateHeader } from 'Components/Layouts/Header';
import LoadingComponent from 'Components/Loading';
import SideBar from 'Components/Layouts/SideBar';
import Compose from 'Containers/ComposeArticle';
import { User } from 'CustomTypings/schema';
import { ME } from 'Graphql/Query';
import { withApollo, graphql, compose, ChildProps } from 'react-apollo';
import Profile from 'Containers/Profile';
import './style.css';
// const customHistory = createBrowserHistory();

const Login = asyncComponent({
  resolve: () => System.import('Containers/Auth/Login'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Message = asyncComponent({
  resolve: () => System.import('Containers/Message'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Interest = asyncComponent({
  resolve: () => System.import('Containers/Auth/Signup/interest'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const SignupProfile = asyncComponent({
  resolve: () => System.import('Containers/Auth/Signup/signupProfile'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const FinishSignup = asyncComponent({
  resolve: () => System.import('Containers/Auth/Signup/finishSignup'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Signup = asyncComponent({
  resolve: () => System.import('Containers/Auth/Signup'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Forum = asyncComponent({
  resolve: () => System.import('Containers/Forum'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Maps = asyncComponent({
  resolve: () => System.import('Containers/Maps'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const PublicHome = asyncComponent({
  resolve: () => System.import('Containers/HomePublic'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Home = asyncComponent({
  resolve: () => System.import('Containers/Home'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});

type Props = {
  // tslint:disable-next-line:no-any
  client?: any,
  // tslint:disable-next-line:no-any
  history?: any
};

type Response = {
  me: User
};

interface State {
  isAuthenticated: boolean;
  token: string;
  expireToken: boolean;
  me: object;
}

class App extends React.Component<Props & ChildProps<Response, {}>, State> {

  state = {
    isAuthenticated: false,
    token: '',
    expireToken: false,
    me: {
      id: '',
      firstname: '',
      lastname: '',
      email: ''
    }
  };
  
  componentWillMount() {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token !== null && token !== undefined) {
      const expired = isTokenExpired(token);
      if (!expired) {
        this.setState({isAuthenticated: true});
        this.setState({token: token});
        this.setState({expireToken: expired});
        this.loadMe();
      } else {
        localStorage.removeItem(AUTH_TOKEN);
        this.setState({isAuthenticated: false});
        this.setState({token: ''});
        this.setState({expireToken: false});
      }
    }
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
        isAuthenticated : true,
      });
      this.loadMe();
    }
  }

  _logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    this.setState({isAuthenticated: false});
    this.setState({token: ''});
    this.setState({expireToken: false});
  }

  loadMe() {
    this.props.client.query({
      query: ME
    }).then(({ data }) => {

      // tslint:disable-next-line:no-console
      console.log(data.me);
      this.setState({me: data.me});

      if (data.me.completedProfile === 1) {
        this.props.history.replace('/add/profile');
      } else if (data.me.completedProfile === 2) {
        this.props.history.replace('/add/interest');
      }

    }).catch((error) => {
      localStorage.removeItem(AUTH_TOKEN);
      this.setState({isAuthenticated: false});
      this.setState({token: ''});
      this.setState({expireToken: false});
    });
  }

  render() {
    const { isAuthenticated } = this.state;
    // const userAuthed = token ? true : false;
    // tslint:disable-next-line:no-unused-expression

    return (
        <div className="uk-offcanvas-content uk-background-muted">
          <Helmet>
            <title>Unizonn</title>
            <meta name="an inclusive community" content="Unizonn community" />
          </Helmet>
          <PrivateHeader isAuthenticated={isAuthenticated} logout={this._logout} />
          <Switch>
            <Route 
              exact={true}
              path="/" 
              render={
                () => ( 
                  isAuthenticated ? ( <PrivateLayout component={Home} isAuthenticated={isAuthenticated} />)
                  : (<PublicLayout component={PublicHome} isAuthenticated={isAuthenticated}/>)
                )} 
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

export default  withRouter(compose(
  withApollo,
  graphql<Response, {}>(ME)
)(App));
