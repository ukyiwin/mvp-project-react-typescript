import * as React from 'react';
// import InfiniteList from 'react-infinite-scroller-with-scroll-element';
// import { withInfiniteScroll } from 'Components/infiniteScroll';
import { Column } from 'Components/Column';
import AppViewWrapper from 'Components/AppViewWrapper';
import Titlebar from 'Components/Titlebar';
import { FlexCol } from 'Components/Globals';
import { sortByDate } from 'Utils/utils';
import ContentLoader from 'react-content-loader';
import WebPushManager from 'Utils/webPushManager';
import ViewError from 'Components/ErrorView/viewError';
import { NotificationItem } from 'Components/Notifications';
import { Divider } from 'Components/Pricing/style';
import { Query } from 'react-apollo';
import { ErrorComponent } from 'Components/EmptyStates';
import { DropdownHeader } from 'Components/Layouts/Header/style';
import { TextButton } from 'Components/Buttons';
import Icon from 'Components/Icons';
import DraftsList from 'Components/DraftList';

export default class Search extends React.Component {

  render() {
    return (
      <FlexCol style={{ flex: '1 1 auto', maxHeight: 'calc(100% - 48px)' }}>
        <Titlebar title={'Drafs'} provideBack={false} noComposer />
        <AppViewWrapper>
          <Column type="only">
            <h1 style={{ padding: 10, marginBottom: 20 }}>My Drafts</h1>
          </Column>
        </AppViewWrapper>
      </FlexCol>
    );
  }
}