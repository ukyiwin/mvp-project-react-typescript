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
// const customHistory = createBrowserHistory();

/* const AppWrapper = glamorous('div')({
  border: 0,
  color: 'white',
  display: 'flex',
  flex: 1,
  paddingLeft: '70px',
  paddingRight: '70px',
}); */

let isAuthenticated = true;
const supportsHistory = 'pushState' in window.history;

const App = () => (
  <BrowserRouter
    forceRefresh={!supportsHistory}
  >
    <div className="app uk-height-1-1" >
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

export default App;
