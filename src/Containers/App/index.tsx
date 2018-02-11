import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import glamorous from 'glamorous';
import createBrowserHistory from 'history/createBrowserHistory';
import PublicHome from '../Home';
import NotFound from '../NotFound';
import Header from '../../Components/Layouts/Header';

const customHistory = createBrowserHistory();

const AppWrapper = glamorous('div')({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
});

const App = () => (
  <AppWrapper>
    <Router history={customHistory}>
      <div className="App">
        <Header />
        <Grid container={true} spacing={24} alignContent={'space-between'}>
          <Switch>
            <Route component={PublicHome} path="/" />
            <Route component={NotFound} path="/not-found" />
          </Switch>
        </Grid>
      </div>
    </Router>
  </AppWrapper>
);

/*<Route exact path="/" render={() =>(
          loggedin ? ( <Route  component={ValidUser} />)
          : (<Route component={InValidUser} />)
        )} />*/

export default App;
