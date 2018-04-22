import React from 'react';
import User from './user';
import { compose } from 'react-apollo';
import { User as UserType } from 'CustomTypings/schema';
import Community from 'Components/Profile/Community';

const ProfilePure = (props: any): any => {
  const { type } = props;
  switch (type) {
    case 'user': {
      return <User {...props} />;
    }
    case 'community': {
      return <Community {...props} />;
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

export const Profile = compose()(ProfilePure);
export const UserProfile = (props: ProfileProps) => (
  <Profile type="user" {...props} />
);

export const CommunityProfile = (props: ProfileProps) => (
  <Profile type="community" {...props} />
);