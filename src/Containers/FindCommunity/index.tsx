import * as React from 'react';
// import InfiniteList from 'react-infinite-scroller-with-scroll-element';
import { Link } from 'react-router-dom';
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
import PublishList from 'Components/PublishList';
import SearchArticle from 'Components/SearchArticle';

export default class FindCommunity extends React.Component {

  state = {
    value: ''
  };

  onChangeText = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <FlexCol style={{ flex: '1 1 auto', maxHeight: 'calc(100% - 48px)', backgroundColor: '#fff' }}>
        <Titlebar title={'Find Community'} provideBack={false} noComposer />
        <AppViewWrapper>
          <Column type="only">
            <form className="uk-search uk-width-1-1 uk-search-large uk-search-default uk-margin-bottom">
              <span data-uk-search-icon />
              <input
                className="uk-search-input"
                type="search"
                value={value}
                onChange={this.onChangeText}
                style={{ fontSize: 20 }}
                placeholder="Search articles and topics on unizonn"
              />
            </form>
            <h5>Top trending communities</h5>
            <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center uk-margin-bottom" data-uk-grid>
              <Link to="/connections">
                <div>
                  <div className="uk-card uk-card-default uk-card-body">Find students</div>
                </div>
              </Link>
              <Link to="/find/communities">
                <div>
                  <div className="uk-card uk-card-default uk-card-body">Find communities</div>
                </div>
              </Link>
              <Link to="/library">
                <div>
                  <div className="uk-card uk-card-default uk-card-body">Find Library</div>
                </div>
              </Link>
            </div>
            {value.length > 2 && <SearchArticle searchString={value} />}
            
          </Column>
        </AppViewWrapper>
      </FlexCol>
    );
  }
}