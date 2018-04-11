import React from 'react';
import compose from 'recompose/compose';
import { withRouter } from 'react-router';
import Link from 'Components/Link';
import Icon from 'Components/Icons';
import Dropdown from 'Components/Dropdown';
import { Loading } from 'Components/Loading';
import { NullState } from 'Components/Upsell';
import { TextButton } from 'Components/Buttons';
import { DropdownHeader, DropdownFooter } from '../style';
// import { NotificationDropdownList } from 'Component/Notifications/components/notificationDropdownList';

const NullNotifications = () => (
  <NullState
    bg="notification"
    heading={`No notifications`}
    copy={`You're all good! 🎉`}
  />
);

const NotificationContainer = (props) => {
  const {
    rawNotifications,
    currentUser,
    history,
    loading,
    markSingleNotificationAsSeenInState,
  } = props;

  if (rawNotifications && rawNotifications.length > 0) {
    return (
      <div>{/*<NotificationDropdownList
        rawNotifications={rawNotifications}
        currentUser={currentUser}
        history={history}
        markSingleNotificationAsSeenInState={
          markSingleNotificationAsSeenInState
        }
      />*/}
      ghgh
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ margin: '32px 0' }}>
        <Loading />
      </div>
    );
  }

  return <NullNotifications />;
};

const NotificationDropdownPure = (props) => {
  const {
    rawNotifications,
    currentUser,
    history,
    markAllAsSeen,
    count,
    markSingleNotificationAsSeenInState,
    loading,
  } = props;

  return (
    <Dropdown style={{ width: '400px', zIndex: 5 }}>
      <DropdownHeader>
        <Link to={`/n/${currentUser.username}/settings`}>
          <Icon glyph="settings" />
        </Link>
        <TextButton
          color={count > 0 ? 'brand.alt' : 'text.alt'}
          onClick={markAllAsSeen}
        >
          Mark all as seen
        </TextButton>
      </DropdownHeader>

      <NotificationContainer
        {...props}
        loading={loading}
        markSingleNotificationAsSeenInState={
          markSingleNotificationAsSeenInState
        }
      />

      {rawNotifications &&
        rawNotifications.length > 0 && (
          <DropdownFooter>
            <TextButton
              color={'text.alt'}
              onClick={() => history.push('/notifications')}
            >
              View all
            </TextButton>
          </DropdownFooter>
        )}
    </Dropdown>
  );
};

export const NotificationDropdown = compose(withRouter)(
  NotificationDropdownPure
);
