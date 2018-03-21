import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// import { asyncComponent } from 'react-async-component';
import { Helmet } from 'react-helmet';
// import NotFound from '../NotFound';
import { PublicLayout, PrivateLayout } from 'Components/Layouts/MainLayout';
import { isTokenExpired } from 'Utils/jwtHelper';
import { AUTH_TOKEN } from '../../../constants';
import { PrivateHeader } from 'Components/Layouts/Header';
// import LoadingComponent from 'Components/Loading';
import SideBar from 'Components/Layouts/SideBar';
import { User } from 'CustomTypings/schema';
import PublicHome from 'Containers/HomePublic';
import Home from 'Containers/Home';
import { ME } from 'Graphql/Query';
import { withApollo, graphql, compose, ChildProps } from 'react-apollo';
// import Profile from '../Profile';
import 'Theme/application.css';
import './style.css';
// const customHistory = createBrowserHistory();

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
      email: ''
    }
  };

  componentWillMount() {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token !== null && token !== undefined) {
      const expired = isTokenExpired(token);
      if (!expired) {
        this.setState({isAuthenticated: true});
        this.setState({token});
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
      // this.loadMe();
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

      this.setState({avatar: data.me.avata.url});
      // tslint:disable-next-line:no-console
      console.log(this.state.avatar);

    }).catch((error) => {
      // localStorage.removeItem(AUTH_TOKEN);
      if (error) {
        // tslint:disable-next-line:no-console
        console.log('grooom');
        // this.setState({isAuthenticated: false});
        this.setState({token: ''});
        this.setState({expireToken: false});
      }
    });
  }

  render() {
    const { isAuthenticated } = this.state;
    // const userAuthed = token ? true : false;
    // tslint:disable-next-line:no-console
    console.log(isAuthenticated);

    return (
        <div className="uk-offcanvas-content bg-muted" style={{ minHeight: '90vh', backgroundColor: '#e4e6eb'}}>
          <Helmet>
            <title>Unizonn</title>
            <meta name="an inclusive community" content="Unizonn community" />
          </Helmet>
          <PrivateHeader avatar={this.state.avatar} isAuthenticated={isAuthenticated} logout={this._logout} />
          <Switch>
            <Route
              exact={true}
              path="/"
              render={
                () => (
                  isAuthenticated ? (<PrivateLayout component={Home} isAuthenticated={isAuthenticated} />)
                  : (<PublicLayout component={PublicHome} isAuthenticated={isAuthenticated}/>)
                )}
              // tslint:disable-next-line:jsx-alignment
            />
            <PrivateLayout component={Home} path="/home" isAuthenticated={isAuthenticated} />
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
