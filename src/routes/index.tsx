// import * as React from 'react';
/*
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/NotFound';
import { PublicLayout, PrivateLayout, EmptyLayout, ProfileLayout } from 'components/Layouts/MainLayout';
import { About, Counter, Stars } from 'containers';
import LoadingComponent from 'components/Loading';
import { asyncComponent } from 'react-async-component';
import Profile from 'containers/Profile';

const Login = asyncComponent({
  resolve: () => new Promise((resolve) =>
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/Auth/Login'));
      },
      'Login'
    )
  ),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const ArticleDetail = asyncComponent({
  resolve: () => System.import('containers/ArticleDetail'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Compose = asyncComponent({
  resolve: () => new Promise((resolve) =>
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/ComposeArticle'));
      },
      'Compose'
    )
  ),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Message = asyncComponent({
  resolve: () => System.import('containers/Message'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Interest = asyncComponent({
  resolve: () => System.import('containers/Auth/Signup/interest'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const SignupProfile = asyncComponent({
  resolve: () => System.import('containers/Auth/Signup/signupProfile'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const FinishSignup = asyncComponent({
  resolve: () => System.import('containers/Auth/Signup/finishSignup'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Signup = asyncComponent({
  resolve: () => System.import('containers/Auth/Signup'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Forum = asyncComponent({
  resolve: () => System.import('containers/Forum'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Maps = asyncComponent({
  resolve: () => System.import('containers/Maps'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const PublicHome = asyncComponent({
  resolve: () => new Promise((resolve) =>
    // Webpack's code splitting API w/naming
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/HomePublic'));
      },
      'HomePublic'
    )
  ),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});
const Home = asyncComponent({
  resolve: () => new Promise((resolve) =>
    // Webpack's code splitting API w/naming
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/Home'));
      },
      'Home'
    )
  ),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});

const routes = (isAuthenticated, refreshToken, _logout) => (
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
    <PublicLayout
      component={Login}
      refreshToken={refreshToken}
      path="/login"
      isAuthenticated={isAuthenticated}
    />
    <Route path="about" component={About} />
    <Route path="counter" component={Counter} />
    <Route path="stars" component={Stars} />
    <PublicLayout
      component={Login}
      exact={true}
      refreshToken={refreshToken}
      path="/login/:email"
      isAuthenticated={isAuthenticated}
    />
    <PublicLayout
      component={Signup}
      refreshToken={refreshToken}
      path="/signup"
      isAuthenticated={isAuthenticated}
    />
    <PublicLayout
      component={Signup}
      exact={true}
      refreshToken={refreshToken}
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
      render={() => _logout()}
    />
  </Switch>
);
*/
const routes = [
  {path: '/', load: () => Promise},
  {path: '/home', load: () => Promise},
  {path: '/login', load: () => Promise},
  {path: '/signup', load: () => Promise},
  {path: '/about', load: () => Promise},
];
export default routes;
