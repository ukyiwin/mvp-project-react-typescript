import * as React from 'react';
import { Link } from 'react-router-dom';
// import InfiniteList from 'react-infinite-scroller-with-scroll-element';
// import { withInfiniteScroll } from 'Components/infiniteScroll';
import { Column } from 'Components/Column';
import AppViewWrapper from 'Components/AppViewWrapper';
import Titlebar from 'Components/Titlebar';
import { FlexCol } from 'Components/Globals';
import { sortByDate } from 'Utils/utils';
import ContentLoader from 'react-content-loader';
import WebPushManager from 'Utils/webPushManager';
// import { addToastWithTimeout } from '../../actions/toasts';
// import { UpsellSignIn, UpsellNullNotifications } from 'Components/Upsell';
import ViewError from 'Components/ErrorView/viewError';
import { NotificationItem } from 'Components/Notifications';
import { Divider } from 'Components/Pricing/style';
import { Query } from 'react-apollo';
import { ErrorComponent } from 'Components/EmptyStates';
import { DropdownHeader } from 'Components/Layouts/Header/style';
import { TextButton } from 'Components/Buttons';
import Icon from 'Components/Icons';
import { User } from 'CustomTypings/schema';
import { CURRENT_USER } from '../../constants';
import { cookies } from 'link';
import { SEARCH_USER } from 'Graphql/Query';

const currentUser = cookies.get(CURRENT_USER) as User;

export const NotLoader = () => (
  <ContentLoader height={200} width={400} speed={2} primaryColor={'#f3f3f3'} secondaryColor={'#ecebeb'}>
      <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
      <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
      <rect x="1" y="136" rx="3" ry="3" width="350" height="6.4" />
      <rect x="-1" y="118" rx="3" ry="3" width="380" height="6.4" />
      <rect x="0" y="150" rx="3" ry="3" width="201" height="6.4" />
      <circle cx="20" cy="20" r="30" />
      <rect x="-0.5" y="70.27" rx="0" ry="0" width="348" height="16" />
      <rect x="1.5" y="89.27" rx="0" ry="0" width="217" height="12" />
      <rect x="2.5" y="175" rx="0" ry="0" width="61" height="18" />
      <rect x="72.5" y="175" rx="0" ry="0" width="55" height="18" />
      <rect x="136.5" y="175.27" rx="0" ry="0" width="56" height="18" />
  </ContentLoader>
);

export default class Notification extends React.Component {

  markAllAsSeen = () => {
    // jsaukj
  }

  render() {
    return (
      <FlexCol style={{ flex: '1 1 auto', maxHeight: 'calc(100% - 48px)' }}>
        <Titlebar title={'Notifications'} provideBack={false} noComposer />
        <AppViewWrapper>
          <Column type="secondary" style={{backgroundColor: '#ffffff'}}>
            <DropdownHeader>
              <Link to={`/n/${currentUser.username ? user.username : ''}/settings`}>
                <Icon glyph="settings" />
              </Link>
              <TextButton
                color={currentUser.notifications && currentUser.notifications.length > 0 ? 'brand.alt' : 'text.alt'}
                onClick={this.markAllAsSeen}
              >
                Mark all as seen
              </TextButton>
            </DropdownHeader>
          </Column>
        </AppViewWrapper>
      </FlexCol>
    );
  }
}

/*
            <NotificationContainer
              {...this.props}
              loading={loading}
              markSingleNotificationAsSeenInState={
                markSingleNotificationAsSeenInState
              }
            />*/