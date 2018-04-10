import * as React from 'react';
import Link from 'Components/Link';
import Card from '../Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import addProtocolToString from 'Utils/normalizeUrl';
import Icon from '../Icons';
import { CoverPhoto } from './coverPhoto';
// import GithubProfile from '../../components/githubProfile';
import { ProfileSizeProps } from './index';
import Avatar from '../Avatar/avatar';
// import { displayLoadingCard } from '../loading';
import Reputation from '../Reputation';
import {
  FullProfile,
  ProfileHeader,
  ProfileHeaderLink,
  ProfileHeaderNoLink,
  ProfileHeaderMeta,
  ProfileHeaderAction,
  CoverLink,
  CoverTitle,
  CoverSubtitle,
  CoverDescription,
  FullTitle,
  Subtitle,
  FullDescription,
  Title,
  ExtLink,
} from './style';
import { User } from 'CustomTypings/schema';

interface Props {
  profileSize: ProfileSizeProps;
  currentUser: User;
  history: any;
  user: User;
}
const UserWithData = (
  { user, profileSize, currentUser, history }: Props): any => {
  const componentSize = profileSize || 'mini';

  if (!user) {
    return null;
  }

  const initMessage = () => {
    // dispatch(initNewThreadWithUser(user));
    history.push('/messages/new');
  };

  switch (componentSize) {
    case 'full':
      return (
        <FullProfile>
          <Avatar
            user={user}
            size={128}
            onlineSize={'large'}
            src={user.avatar ? user.avatar : ''}
            noLink
            style={{
              boxShadow: '0 0 0 2px #fff',
              marginRight: '0',
            }}
          />
          <FullTitle>{user.firstname + ' ' + user.lastname}</FullTitle>
          <Subtitle>
            @{user.username}
          </Subtitle>
          {(user.firstname || user.lastname) && (
            <FullDescription> 
              {user.bio ? user.bio : 'Your bio is empty please go to profile settings to enter it'}
              <Reputation
                reputation={
                  0
                }
              />
              {user.department && (
                <ExtLink>
                  <Icon glyph="link" size={24} />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={addProtocolToString(user.department.name)}
                  >
                    {user.department.name}
                  </a>
                </ExtLink>
              )}
              {user.institution && (
                <ExtLink>
                  <Icon glyph="link" size={24} />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={addProtocolToString(user.institution.title)}
                  >
                    {user.institution.title}
                  </a>
                </ExtLink>
              )}
            </FullDescription>
          )}
        </FullProfile>
      );
    case 'simple':
      return (
        <Card>
          <CoverPhoto
            user={user}
            onClick={() => initMessage()}
            currentUser={currentUser}
          />
          <CoverLink to={`/n/${user.username}`}>
            <Avatar
              user={user}
              size={64}
              radius={64}
              onlineSize={'large'}
              isOnline={false}
              src={`${user.avatar ? user.avatar : ''}`}
              noLink
              style={{
                boxShadow: '0 0 0 2px #fff',
                flex: '0 0 64px',
                marginRight: '0',
              }}
            />
            <CoverTitle>{user.firstname + ' ' + user.lastname}</CoverTitle>
          </CoverLink>
          <CoverSubtitle center>
            {user.username && `@${user.username}`}
            <Reputation
              tipText={'Total reading score'}
              size={'large'}
              reputation={
                0
              }
            />
          </CoverSubtitle>
          <CoverDescription>
            <p>{user.bio ? user.bio : 'Your bio is empty please go to profile settings to enter it'}</p>
          </CoverDescription>
        </Card>
      );
    case 'default':
    default:
      return (
        <Card>
          <ProfileHeader>
            {user.username ? (
              <ProfileHeaderLink to={`/n/${user.username}`}>
                <Avatar
                  user={user}
                  size={32}
                  radius={32}
                  isOnline={false}
                  src={user.avatar ? user.avatar : ''}
                  noLink
                  style={{ marginRight: '16px' }}
                />
                <ProfileHeaderMeta>
                  <Title>{user.firstname + ' ' + user.lastname}</Title>
                  {user.username && (
                    <Subtitle>
                      @{user.username}
                    </Subtitle>
                  )}
                </ProfileHeaderMeta>
              </ProfileHeaderLink>
            ) : (
              <ProfileHeaderNoLink>
                <Avatar
                  user={user}
                  size={32}
                  radius={32}
                  isOnline={false}
                  src={user.avatar ? user.avatar : ''}
                  noLink
                  style={{ marginRight: '16px' }}
                />
                <ProfileHeaderMeta>
                  <Title>{user.firstname + ' ' + user.lastname}</Title>
                  {user.username && (
                    <Subtitle>
                      @{user.username}
                      <Reputation
                        tipText={'Total reading score'}
                        size={'large'}
                        reputation={
                          90
                        }
                      />
                    </Subtitle>
                  )}
                </ProfileHeaderMeta>
              </ProfileHeaderNoLink>
            )}
            <CoverDescription>
              <p>{user.bio ? user.bio : 'Your bio is empty please go to profile settings to enter it'}</p>
            </CoverDescription>
            {currentUser && currentUser.id === user.id ? (
              <Link to={`../n/${currentUser.username}/settings`}>
                <ProfileHeaderAction
                  glyph="settings"
                  tipText={'Edit profile'}
                  tipLocation={'top-left'}
                />
              </Link>
            ) : (
              <ProfileHeaderAction
                glyph="message-fill"
                color="text.alt"
                hoverColor="brand.alt"
                onClick={() => initMessage()}
                tipText={`Message ${user.firstname + ' ' + user.lastname}`}
                tipLocation={'top-left'}
              />
            )}
          </ProfileHeader>
        </Card>
      );
  }
};

const User = compose(withRouter)(UserWithData);

export default User;
