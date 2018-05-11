import * as React from 'react';

const UserContext = React.createContext({
  currentUser: {}
});

export const withCurrentUser = (Component) => {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(currentUser) => <Component {...props} currentUser={currentUser}/>}
      </UserContext.Consumer>
    );
  };
};

interface Props {
  currentUser?: any;
  children?: any;
}

export const CurrentUserProvider = (props: Props) => {
  return (
    <UserContext.Provider value={props.currentUser}>
      {props.children}
    </UserContext.Provider>
  );
};
