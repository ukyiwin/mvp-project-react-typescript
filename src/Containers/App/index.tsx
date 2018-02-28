import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from '../Home';
import PublicHome from '../HomePublic';
import NotFound from '../NotFound';
import { PublicLayout, PrivateLayout, EmptyLayout, ProfileLayout } from 'Components/Layouts/MainLayout';
import Maps from 'Containers/Maps';
import Forum from 'Containers/Forum';
import Message from 'Containers/Message';
import Signup from 'Containers/Auth/Signup';
import SignupPhoto from 'Containers/Auth/Signup/signupPhoto';
import SignupProfile from 'Containers/Auth/Signup/signupProfile';
import Interest from 'Containers/Auth/Signup/interest';
import Login from 'Containers/Auth/Login';
import { isTokenExpired } from 'Utils/jwtHelper';
import { AUTH_TOKEN } from '../../constants';
import { PrivateHeader } from 'Components/Layouts/Header';
import SideBar from 'Components/Layouts/SideBar';
import Compose from 'Containers/ComposeArticle';
import { User } from 'CustomTypings/schema';
import { ME } from 'Graphql/Query';
import { withApollo, graphql, compose, ChildProps } from 'react-apollo';
import Profile from 'Containers/Profile';
import './style.css';
// const customHistory = createBrowserHistory();

type Props = {
  // tslint:disable-next-line:no-any
  client?: any
};

const supportsHistory = 'pushState' in window.history;

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
    }
  }

  _logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    this.setState({isAuthenticated: false});
    this.setState({token: ''});
    this.setState({expireToken: false});
  }

  // tslint:disable-next-line:typedef
  onStorage(data) {
      // Receive changes in the localStorage
  }
  // tslint:disable-next-line:typedef
  componentDidUpdate(prevProps, prevState, prevContext) {
    // jhjhjhj
  }

  loadMe() {
    this.props.client.query({
      query: ME
    }).then(({ data }) => {

      // tslint:disable-next-line:no-console
      console.log(data);
      this.setState({me: data.me});

      if (data.me.completedProfile === 1 || data.me.completedProfile === null) {
        // ghghgh
      }

    }).catch((error) => {
      // tslint:disable-next-line:no-console
      console.log(JSON.stringify(error));
    });
  }

  render() {
    const { isAuthenticated } = this.state;
    // const userAuthed = token ? true : false;
    // tslint:disable-next-line:no-unused-expression
    isAuthenticated ? this.loadMe() : null;

    return (
      <BrowserRouter
        forceRefresh={!supportsHistory}
      >
        <div className="uk-offcanvas-content uk-background-muted">
          <Helmet>
            <title>Unizonn</title>
            <meta name="an inclusive community" content="Unizonn community" />
          </Helmet>
          <PrivateHeader isAuthenticated={isAuthenticated} />
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
            <EmptyLayout component={SignupPhoto} path="/signup/photo" isAuthenticated={isAuthenticated} />
            <EmptyLayout component={SignupProfile} path="/signup/profile" isAuthenticated={isAuthenticated}/>
            <EmptyLayout component={Interest} path="/signup/interest" isAuthenticated={isAuthenticated} />
            <EmptyLayout component={Maps} path="/library" isAuthenticated={isAuthenticated} />
            <EmptyLayout component={Message} path="/message" isAuthenticated={isAuthenticated} />
            <PrivateLayout component={Forum} path="/Forum" isAuthenticated={isAuthenticated} />
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
      </BrowserRouter>
    );
  }
}

export default compose(
  withApollo,
  graphql<Response, {}>(ME)
)(App);
