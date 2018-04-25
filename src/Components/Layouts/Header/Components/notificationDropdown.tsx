import React from 'react';
import compose from 'recompose/compose';
import { withRouter } from 'react-router';
import InfiniteScroll from 'react-infinite-scroller';
import Link from 'Components/Link';
import Icon from 'Components/Icons';
import Dropdown from 'Components/Dropdown';
import { Loading } from 'Components/Loading';
import { NullState } from 'Components/Upsell';
import { TextButton } from 'Components/Buttons';
import { DropdownHeader, DropdownFooter } from '../style';
import { Query } from 'react-apollo';
import { NotificationItem } from 'Components/Notifications';
import { NOTIFICATION } from 'Graphql/Query';
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

  return(
    <Query query={NOTIFICATION} pollInterval={5000} >
    {({ loading, error, data, fetchMore, networkStatus, refetch }) => {
      if (loading) {
        return (
          <div style={{ margin: '32px 0' }}>
            <Loading />
          </div>
        );
      }
      if (error) {
        return <NullNotifications />;
      }
      if (data.articles === null) {
        return <NullNotifications />;
      }
      return (
          <InfiniteScroll
            pageStart={0}
            hasMore={true}
            loadMore={() =>
              fetchMore({
                variables: {
                  limit: 10,
                  offset: data.notifications.length
                },
                updateQuery: (prev, { fetchMoreResult }) =>  {
                  if (!fetchMoreResult) {
                    // this.set;
                    return prev;
                  }
                  return {...prev, notifications: [...prev.notifications, ...fetchMoreResult.notifications]};
                },
              })}
            loader={
              <div className="uk-padding-small" style={{ backgroundColor: '#fff' }}>
                <Loading />
              </div>
            // tslint:disable-next-line:jsx-curly-spacing
            }
          >
              {data.notifications ? data.notifications.map((notif) => (
                  <div key={notif.id}>
                      <NotificationItem notification={notif} />
                  </div>
              )) : null}
          </InfiniteScroll>
      );
      }}
  </Query>
  );
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
