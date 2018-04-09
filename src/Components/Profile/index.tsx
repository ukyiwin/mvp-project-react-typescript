import React from 'react';
import User from './user';
import { compose } from 'react-apollo';
import { User as UserType } from 'CustomTypings/schema';

const ProfilePure = (props: any): any => {
  const { type } = props;
  switch (type) {
    case 'user': {
      return <User {...props} />;
    }
    default: {
      return <User {...props} />;
    }
  }
};

export type ProfileSizeProps =
  | 'mini'
  | 'full'
  | 'miniWithAction'
  | 'upsell'
  | 'simple'
  | 'listItemWithAction';

interface ProfileProps {
  user: UserType;
  profileSize?: ProfileSizeProps;
}

/*
  Create exportables which just wrap a type prop, so in the UI we can Write
  <UserProfile /> and this file will handle the type declaration, which will
  then get passed to our switch statement above to return the right component.
*/
export const Profile = compose()(ProfilePure);
export const UserProfile = (props: ProfileProps) => (
  <Profile type="user" {...props} />
);
