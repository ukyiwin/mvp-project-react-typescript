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
import { Divider } from 'Components/Pricing/style';
import { Query } from 'react-apollo';
import { ErrorComponent } from 'Components/EmptyStates';
import { DropdownHeader } from 'Components/Layouts/Header/style';
import { TextButton } from 'Components/Buttons';
import Icon from 'Components/Icons';
import SavedList from 'Components/SavedList';

export default class Saved extends React.Component {

  render() {
    return (
      <FlexCol style={{ flex: '1 1 auto', maxHeight: 'calc(100% - 48px)' }}>
        <Titlebar title={'Saved'} provideBack={false} noComposer />
        <AppViewWrapper>
          <Column type="only">
            <h1 style={{ padding: 10, marginBottom: 20 }}>Saved Articles</h1>
            <SavedList />
          </Column>
        </AppViewWrapper>
      </FlexCol>
    );
  }
}