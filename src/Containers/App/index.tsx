import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../Home';
import PublicHome from '../HomePublic';
import NotFound from '../NotFound';
import { PublicLayout, PrivateLayout, EmptyLayout } from 'Components/Layouts/MainLayout';
import Maps from 'Containers/Maps';
import Forum from 'Containers/Forum';
import Message from 'Containers/Message';
// import Signup from 'Containers/Auth/Signup';
import SignupStepOne from 'Containers/Auth/Signup/SignupStepOne';
import SignupStepTwo from 'Containers/Auth/Signup/SignupStepTwo';
import SignupStepFinal from 'Containers/Auth/Signup/SignupStepThree';
import Login from 'Containers/Auth/Login';
import { isTokenExpired } from 'Utils/jwtHelper';
// const customHistory = createBrowserHistory();

/* const AppWrapper = glamorous('div')({
  border: 0,
  color: 'white',
  display: 'flex',
  flex: 1,
  paddingLeft: '70px',
  paddingRight: '70px',
}); */

const supportsHistory = 'pushState' in window.history;

class App extends React.Component {

  state = {
    isAuthenticated: false,
    token: '',
    expireToken: false,
  };

  // tslint:disable-next-line:typedef
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({token: localStorage.getItem('token')});
    if (this.state.token !== null && this.state.token !== '') {
      this.setState({expireToken: isTokenExpired(this.state.token)});
      if (this.state.expireToken) {
        this.setState({isAuthenticated: this.state.expireToken});
      }
    }
    if (window.addEventListener) {
      window.addEventListener('storage', this.onStorage, false);
    } else {
      // window.attachEvent('onstorage', this.onStorage);
    }
  }

  componentDidMount() {
    // jhjhjhj
  }
  
  // tslint:disable-next-line:typedef
  onStorage(data) {
      // Receive changes in the localStorage
  }
  // tslint:disable-next-line:typedef
  componentDidUpdate(prevProps, prevState, prevContext) {
    // jhjhjhj
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <BrowserRouter
        forceRefresh={!supportsHistory}
      >
        <div className="ui-flex-stretch">
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
            <EmptyLayout component={Login} path="/login" isAuthenticated={isAuthenticated}  />
            <PublicLayout component={SignupStepOne} path="/signup" isAuthenticated={isAuthenticated} />
            <PublicLayout component={SignupStepOne} path="/signups/1/:id" isAuthenticated={isAuthenticated} />
            <PublicLayout component={SignupStepTwo} path="/signup/2/:id" isAuthenticated={isAuthenticated}/>
            <PublicLayout component={SignupStepFinal} path="/signup/3/:id" isAuthenticated={isAuthenticated} />
            <EmptyLayout component={Maps} path="/library" isAuthenticated={isAuthenticated} />
            <EmptyLayout component={Message} path="/message" isAuthenticated={isAuthenticated} />
            <PrivateLayout component={Forum} path="/Forum" isAuthenticated={isAuthenticated} />
            <Route component={NotFound} path="*" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
