import * as React from 'react';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import queryString from 'query-string';
import compose from 'recompose/compose';
import Icon from 'Components/Icons';
// import { updateNotificationsCount } from '../../../actions/notifications';
import { NotificationDropdown } from './notificationDropdown';
// import getNotifications from 'shared/graphql/queries/notification/getNotifications';
// import type { GetNotificationsType } from 'shared/graphql/queries/notification/getNotifications';
// import markNotificationsSeenMutation from 'shared/graphql/mutations/notification/markNotificationsSeen';
// import { markSingleNotificationSeenMutation } from 'shared/graphql/mutations/notification/markSingleNotificationSeen';
import { Tab, NotificationTab, Label } from '../style';
import { User } from 'CustomTypings/schema';

interface Props {
  active: boolean;
  currentUser: User;
  isLoading: boolean;
  hasError: boolean;
  isRefetching: boolean;
  markAllNotificationsSeen: any;
  activeInboxThread?: string;
  hideText?: boolean;
  count: number;
}

interface State {
  notifications?: any[];
  subscription?: any;
  shouldRenderDropdown: boolean;
}

class NotificationsTab extends React.Component<any, any> {
  state = {
    notifications: null,
    subscription: null,
    shouldRenderDropdown: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    const prevProps = this.props;
    const prevState = this.state;

    const prevLocation = prevProps.location;
    const nextLocation = nextProps.location;
    const { thread: prevThreadParam } = queryString.parse(prevLocation.search);
    const { thread: nextThreadParam } = queryString.parse(nextLocation.search);
    const prevActiveInboxThread = prevProps.activeInboxThread;
    const nextActiveInboxThread = nextProps.activeInboxThread;
    const prevParts = prevLocation.pathname.split('/');
    const nextParts = nextLocation.pathname.split('/');

    // changing slider
    if (prevThreadParam !== nextThreadParam) { return true; }

    // changing inbox thread
    if (prevActiveInboxThread !== nextActiveInboxThread) { return true; }

    // changing thread detail view
    if (prevParts[2] !== nextParts[2]) { return true; }

    // if a refetch completes
    if (prevProps.isRefetching !== nextProps.isRefetching) { return true; }

    // once the initial query finishes loading
    /*if (!prevProps.data.notifications && nextProps.data.notifications) {
      return true;
    }*/

    // after refetch
    if (prevProps.isRefetching !== nextProps.isRefetching) { return true; }

    // if a subscription updates the number of records returned
    if (
      prevProps.data &&
      prevProps.data.notifications &&
      prevProps.data.notifications.edges &&
      nextProps.data.notifications &&
      nextProps.data.notifications.edges &&
      prevProps.data.notifications.edges.length !==
        nextProps.data.notifications.edges.length
    ) {
      return true;
    }

    // if the user clicks on the notifications tab
    if (prevProps.active !== nextProps.active) { return true; }

    // when the notifications get set for the first time
    if (!prevState.notifications && nextState.notifications) { return true; }

    // when hovered
    if (!prevState.shouldRenderDropdown && nextState.shouldRenderDropdown) {
      return true;
    }

    // any time the count changes
    if (prevProps.count !== nextProps.count) { return true; }

    // any time the count changes
    if (
      prevState.notifications &&
      nextState.notifications &&
      prevState.notifications.length !== nextState.notifications.length
    ) {
      return true;
    }

    return false;
  }

  componentDidUpdate(prevProps) {
    const {
      data: prevData,
      location: prevLocation,
      activeInboxThread: prevActiveInboxThread,
    } = prevProps;
    const curr = this.props;

    const { notifications } = this.state;

    // if (!notifications && curr.data.notifications) {
      // this.subscribe();
      // return this.processAndMarkSeenNotifications();
    // }

    // never update the badge if the user is viewing the notifications tab
    // set the count to 0 if the tab is active so that if a user loads
    // /notifications view directly, the badge won't update
    if (curr.active) {
      // return curr.dispatch(updateNotificationsCount('notifications', 0));
    }

    /* if the component updates for the first time
    if (!prevData.notifications && curr.data.notifications) {
      // return this.processAndMarkSeenNotifications();
    }

    // if the component updates with changed or new notifications
    // if any are unseen, set the counts
    if (
      curr.data.notifications &&
      curr.data.notifications.edges &&
      prevData.notifications &&
      prevData.notifications.edges &&
      curr.data.notifications.edges.length > 0 &&
      curr.data.notifications.edges.length !==
        prevData.notifications.edges.length
    ) {
      // return this.processAndMarkSeenNotifications();
    }

    const { thread: prevThreadParam } = queryString.parse(prevLocation.search);
    const { thread: thisThreadParam } = queryString.parse(curr.location.search);
    const prevParts = prevLocation.pathname.split('/');
    const thisParts = prevLocation.pathname.split('/');

    // changing slider
    if (prevThreadParam !== thisThreadParam) {
      // return this.processAndMarkSeenNotifications(notifications);
    }

    // changing inbox thread
    if (prevActiveInboxThread !== curr.activeInboxThread) {
      // return this.processAndMarkSeenNotifications(notifications);
    }

    // changing thread detail view
    if (prevParts[2] !== thisParts[2]) {
      // return this.processAndMarkSeenNotifications();
    }

    // when the component finishes a refetch
    if (prevProps.isRefetching && !curr.isRefetching) {
      // return this.processAndMarkSeenNotifications();
    }*/
  }

  componentWillUnmount() {
    // this.unsubscribe();
  }

  setHover = () => {
    return this.setState({
      shouldRenderDropdown: true,
    });
  }

  render() {
    const { active, currentUser, isLoading, count } = this.props;
    const { notifications, shouldRenderDropdown } = this.state;

    return (
      <NotificationTab padOnHover onMouseOver={this.setHover}>
        <Tab
          data-active={active}
          to="/notifications"
          rel="nofollow"
        >
          <Icon
            glyph={count > 0 ? 'notification-fill' : 'notification'}
            withCount={count > 10 ? '10+' : count > 0 ? count : false}
          />
          {!this.props.hideText ? <Label hideOnDesktop>Notifications</Label> : null}
        </Tab>

        {shouldRenderDropdown && (
          <NotificationDropdown
            rawNotifications={notifications}
            count={count}
            currentUser={currentUser}
            width={'480px'}
            loading={isLoading}
            error={false}
          />
        )}
      </NotificationTab>
    );
  }
}

export default compose(
  withApollo
)(NotificationsTab);
