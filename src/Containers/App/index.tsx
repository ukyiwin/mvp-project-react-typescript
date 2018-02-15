import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import glamorous from 'glamorous';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../Home';
import PublicHome from '../HomePublic';
import NotFound from '../NotFound';
import Header from 'Components/Layouts/Header';
import Signup from 'Containers/Auth/Signup';
import SignupStepOne from 'Containers/Auth/Signup/SignupStepOne';
import SignupStepTwo from 'Containers/Auth/Signup/SignupStepTwo';
import SignupStepFinal from 'Containers/Auth/Signup/SignupStepThree';
import Login from 'Containers/Auth/Login';
const customHistory = createBrowserHistory();

const AppWrapper = glamorous('div')({
  border: 0,
  color: 'white',
  display: 'flex',
  flex: 1,
  paddingLeft: '70px',
  paddingRight: '70px',
});

let isAUthenticated = false;

const App = () => (
  <Router history={customHistory}>
    <div className="App">
      <Header />
      <AppWrapper>
        <Grid container={true} spacing={24} alignContent={'space-between'}>
          <Switch>
            <Route 
              exact={true}
              path="/" 
              render={
                () => ( 
                  isAUthenticated ? ( <Route  component={Home} />) : (<Route component={PublicHome} />)
                )} 
              // tslint:disable-next-line:jsx-alignment
              />
              <Route component={Login} path="/login" />
              <Route component={Signup} path="/signup" />
              <Route component={SignupStepOne} path="/signup_step_one/:id" />
              <Route component={SignupStepTwo} path="/signup_step_two/:id" />
              <Route component={SignupStepFinal} path="/signup_final/:id" />
            <Route component={NotFound} path="/not-found" />
          </Switch>
        </Grid>
      </AppWrapper>
    </div>
  </Router>
);

export default App;
