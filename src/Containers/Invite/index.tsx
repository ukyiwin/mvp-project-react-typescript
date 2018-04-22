import * as React from 'react';
// import InfiniteList from 'react-infinite-scroller-with-scroll-element';
// import { withInfiniteScroll } from 'Components/infiniteScroll';
import { Column } from 'Components/column';
import AppViewWrapper from 'Components/AppViewWrapper';
import Titlebar from 'Components/Titlebar';
import { FlexCol } from 'Components/Globals';
import { sortByDate } from 'Utils/utils';
import WebPushManager from 'Utils/webPushManager';
// import { addToastWithTimeout } from '../../actions/toasts';
// import { UpsellSignIn, UpsellNullNotifications } from 'Components/Upsell';
import ViewError from 'Components/ErrorView/viewError';

export default class Invite extends React.Component {
  render() {
    return (
      <FlexCol style={{ flex: '1 1 auto', maxHeight: 'calc(100% - 48px)' }}>
        <Titlebar title={'Notifications'} provideBack={false} noComposer />
        <AppViewWrapper>
          <Column type={'primary'}>
            hghghhh
          </Column>
        </AppViewWrapper>
      </FlexCol>
    );
  }
}