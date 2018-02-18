import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../Home';
import PublicHome from '../HomePublic';
import NotFound from '../NotFound';
import { PublicLayout, PrivateLayout, SignupLayout, EmptyLayout } from 'Components/Layouts/MainLayout';
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

let isAUthenticated = false;
const supportsHistory = 'pushState' in window.history;

const App = () => (
  <BrowserRouter
    forceRefresh={!supportsHistory}
  >
    <div className={'app'}>
      <Switch>
        <Route 
          exact={true}
          path="/" 
          render={
            () => ( 
              isAUthenticated ? ( <PrivateLayout component={Home} />) : (<PublicLayout component={PublicHome} />)
            )} 
          // tslint:disable-next-line:jsx-alignment
        />
        <EmptyLayout component={Login} path="/login" />
        <SignupLayout component={SignupStepOne} path="/signup" />
        <SignupLayout component={SignupStepOne} path="/signups/1/:id" />
        <SignupLayout component={SignupStepTwo} path="/signup/2/:id" />
        <SignupLayout component={SignupStepFinal} path="/signup/3/:id" />
        <PrivateLayout component={Maps} path="/library" />
        <PrivateLayout component={Message} path="/message" />
        <PrivateLayout component={Forum} path="/Forum" />
        <Route component={NotFound} path="*" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
