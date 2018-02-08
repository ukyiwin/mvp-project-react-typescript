import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import PublicHome from '../Home';
import NotFound from '../NotFound';

const customHistory = createBrowserHistory();

const App = () => (
  <Router history={customHistory}>
    <Switch>
      <Route component={PublicHome} path="/" />
      <Route component={NotFound} path="/not-found" />
    </Switch>
  </Router>
);

/*<Route exact path="/" render={() =>(
          loggedin ? ( <Route  component={ValidUser} />)
          : (<Route component={InValidUser} />)
        )} />*/

export default App;
