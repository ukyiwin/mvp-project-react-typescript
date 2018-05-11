import * as React from 'react';
// import UIkit from 'uikit/src/js/uikit';
import { Link, withRouter } from 'react-router-dom';
import { User } from 'CustomTypings/schema';
import SearchContainer from 'Components/SearchContainer';
import NotificationsTab from '../Components/notificationsTab';
import {
  Nav,
  Logo,
  HomeTab,
  ExploreTab,
  ProfileDrop,
  ProfileTab,
  SupportTab,
  PricingTab,
  Tab,
  LibraryTab,
  Label,
  Navatar,
  ConnectionTab,
} from '../style';
import Icon from 'Components/Icons';
import { compose } from 'react-apollo';

// import * as Logo from 'Assets/main/unizonn.png';
interface Props {
  classes?: object;
  isAuthenticated: boolean;
  me: User;
  avatar?: string;
  logout: any;
  match?: any;
  history?: any;
}

class BottomNav extends React.Component<Props> {
  render() {
    const props = this.props;

    return (
        <div
          className="uk-hidden@m"
          style={{
            marginBottom: 0,
            bottom: 0,
            overflow: 'hidden',
            position: 'absolute',
            left: 0,
            right: 0,
            height: '60px'
          }} 
        >
          <div 
            className="mdc-elevation--z2 uk-margin uk-background-secondary uk-dark" 
            // tslint:disable-next-line:jsx-boolean-value
            style={{marginBottom: 0, backgroundColor: '#020202'}}
          >
            <ul className="uk-navbar-nav uk-flex-between">
              <li>
                <HomeTab data-active={props.match.url === '/' && props.match.isExact} to="/">
                  <Icon glyph="home" />
                </HomeTab>
              </li>
              <li>
                <LibraryTab data-active={props.match.url === '/community' && props.match.isExact} to="/community">
                  <Icon glyph="message" />
                </LibraryTab>
              </li>
              <li>
                <LibraryTab data-active={props.match.url === '/library' && props.match.isExact} to="/library">
                  <Icon glyph="library" />
                </LibraryTab>
              </li>
              <li>
                <ConnectionTab data-active={props.match.url === '/connections' && props.match.isExact} to="/connections">
                  <Icon glyph="explore" />
                </ConnectionTab>
              </li>
              <li>
                <ConnectionTab data-active={props.match.url === `/n/${props.me.username}` && props.match.isExact} to={`/n/${props.me.username}`}>
                  <Icon glyph="profile" />
                </ConnectionTab>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}
export default compose(
  withRouter
)(BottomNav);