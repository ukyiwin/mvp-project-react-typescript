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
import './style.scss';
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

// tslint:disable-next-line:max-line-length
const maleP = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K';

class PrivateHeader extends React.Component<Props> {
  render() {
    const props = this.props;

    if (props.isAuthenticated) {
      return (
        <div
          data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;"
          style={{marginBottom: 0}}
        >
          <nav 
            className="uk-navbar-container mdc-elevation--z2 mdc-toolbar mdc-toolbar--fixed uk-margin uk-background-secondary uk-dark" 
            // tslint:disable-next-line:jsx-boolean-value
            uk-navbar
            style={{marginBottom: 0, backgroundColor: '#020202'}}
          >
            <div className="nav-overlay uk-navbar-left">
              <Link to="/" className="uk-navbar-item uk-logo uk-visible@m" href="#">
                <img 
                  src={require('../../../../Assets/unizonn/uni_green.svg')} 
                  style={{height: 40}}
                  // tslint:disable-next-line:jsx-boolean-value
                  uk-svg
                />
              </Link>
              <Link to="/" className="uk-navbar-item uk-logo uk-hidden@m" href="#">
                <img 
                  src={require('../../../../Assets/unizonn/uni_green_s.svg')} 
                  style={{height: 40}}
                  // tslint:disable-next-line:jsx-boolean-value
                  uk-svg
                />
              </Link>
              <ul className="uk-navbar-nav uk-visible@m">
                  <li>
                    <HomeTab data-active={props.match.url === '/' && props.match.isExact} to="/">
                      <Icon glyph="home" />
                      <Label>Articles</Label>
                    </HomeTab>
                  </li>
                  <li>
                    <LibraryTab data-active={props.match.url === '/community' && props.match.isExact} to="/community">
                      <Icon glyph="message" />
                      <Label>Community</Label>
                    </LibraryTab>
                  </li>
                  <li>
                    <LibraryTab data-active={props.match.url === '/library' && props.match.isExact} to="/library">
                      <Icon glyph="library" />
                      <Label>Library</Label>
                    </LibraryTab>
                  </li>
                  <li>
                    <ConnectionTab data-active={props.match.url === '/connections' && props.match.isExact} to="/connections">
                      <Icon glyph="explore" />
                      <Label>Connects</Label>
                    </ConnectionTab>
                  </li>
              </ul>
              <div className="uk-navbar-right uk-visible@s">
                <ul className="uk-iconnav">
                  <div className="uk-navbar-nav uk-padding-small">
                    <Link to="/search" className="" style={{color: '#fff'}}><Icon glyph="search" size={34} /></Link>
                  </div>
                  <div className="uk-navbar-nav uk-padding-small">
                    <NotificationsTab
                      location={props.history.location}
                      currentUser={props.me}
                      data-badge="8"
                      hideText={true}
                      active={props.history.location.pathname.includes('/notifications')}
                    />
                  </div>
                </ul>
                <ul className="uk-navbar-nav">
                  <li>
                    <a href="#">
                      <div className="uk-animation-toggle">
                      <img 
                        className="uk-border-circle round-avatar uk-animation-kenburns uk-border-small uk-animation-fast" 
                        src={props.me ? (props.me.avatar ? `${props.me.avatar}` : maleP) : ''} 
                        width="40" 
                        height="40" 
                        alt="img"
                      />
                      </div>
                    </a>
                    <div data-uk-dropdown="mode: hover" style={{padding: 0}}>
                      <div className="popover-container">
                        <div className="card mdc-menu__items mdc-list uk-dropdown-nav" style={{padding: 0}}>
                          <div className="card-header" style={{padding: 0, height: 70}}>
                            <li className="mdc-list-item" style={{ height: 70}} role="menuitem">
                              <Link to={`/n/${props.me.username}`} className="uk-text-bold simple-link-light">
                                <span className="uk-text-bold">{props.me.firstname} {props.me.lastname}</span>
                                <br/>
                                @{props.me.username}
                              </Link>
                            </li>
                          </div>
                          <div className="card-body" style={{padding: 0}}>
                            <li className="mdc-list-item " role="menuitem">
                              <Link to="/saved" className="uk-text-bold simple-link-light">
                                <span uk-icon="icon: bookmark; ratio: 1" /> Saved
                              </Link>
                            </li>
                            <li className="mdc-list-item " role="menuitem">
                              <Link to="/drafts" className="uk-text-bold simple-link-light">
                                <span uk-icon="icon: pencil; ratio: 1" /> Drafts
                              </Link>
                            </li>
                            <li className="mdc-list-item " role="menuitem">
                              <Link to="/published" className="uk-text-bold simple-link-light">
                                <span uk-icon="icon: check; ratio: 1" /> Published
                              </Link>
                            </li>
                            <li className="mdc-list-item " role="menuitem">
                              <Link to={`/n/${props.me.username}/settings`} className="uk-text-bold simple-link-light">
                                <span uk-icon="icon: cog; ratio: 1" /> Settings
                              </Link>
                            </li>
                          </div>
                          <div className="card-footer"  style={{padding: 0}}>
                            <li className="mdc-list-item" role="menuitem">
                              <Link to="/legal/privacy" className="uk-text-bold simple-link-light">
                                Privacy
                              </Link>
                            </li>
                            <li className="mdc-list-item" role="menuitem">
                              <Link to="/support" className="uk-text-bold simple-link-light">
                                Support
                              </Link>
                            </li>
                            <li className="mdc-list-item uk-text-bold" role="menuitem" onClick={props.logout}>
                              Logout                        
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="uk-navbar-nav uk-padding-small">
                  <Link to="/write" className="uk-button uk-button-primary uk-button-small">Write</Link>
                </div>
              </div>
              <div className="uk-navbar-right uk-hidden@s">
                <div className="uk-navbar-nav uk-padding-small">
                  <Link to="/search" className="" style={{color: '#fff'}}><Icon glyph="search" size={34} /></Link>
                </div>
                <NotificationsTab
                  location={props.history.location}
                  currentUser={props.me}
                  hideText={true}
                  data-badge="8"
                  active={props.history.location.pathname.includes('/notifications')}
                />
                <ul className="uk-navbar-nav">
                  <li>
                    <a href="#">
                      <div className="uk-animation-toggle">
                      <img 
                        className="uk-border-circle round-avatar uk-animation-kenburns uk-border-small uk-animation-fast" 
                        src={props.me.avatar ? `${props.me.avatar}` : maleP} 
                        width="40" 
                        height="40" 
                        alt="img"
                      />
                      </div>
                    </a>
                    <div data-uk-dropdown="mode: hover" style={{padding: 0}}>
                      <div className="popover-container">
                        <div className="card mdc-menu__items mdc-list uk-dropdown-nav" style={{padding: 0}}>
                          <div className="card-header" style={{padding: 0, height: 70}}>
                            <li className="mdc-list-item" style={{ height: 70}} role="menuitem">
                              <Link to={`/n/${props.me.username}`} className="uk-text-bold simple-link-light">
                                <span className="uk-text-bold">{props.me.firstname} {props.me.lastname}</span>
                                <br/>
                                @{props.me.username}
                              </Link>
                            </li>
                          </div>
                          <div className="card-body" style={{padding: 0}}>
                            <li className="mdc-list-item " role="menuitem">
                              <Link to="/favourites" className="uk-text-bold simple-link-light">
                                <span uk-icon="icon: bookmark; ratio: 1" /> Favourites
                              </Link>
                            </li>
                            <li className="mdc-list-item" role="menuitem">
                              <Link to="/score" className="uk-text-bold simple-link-light">
                                <span uk-icon="icon: thumbnails; ratio: 1" /> Reading Score
                              </Link>
                            </li>
                            <li className="mdc-list-item " role="menuitem">
                              <Link to="/favourites" className="uk-text-bold simple-link-light">
                                <span uk-icon="icon: pencil; ratio: 1" /> Drafts
                              </Link>
                            </li>
                            <li className="mdc-list-item " role="menuitem">
                              <Link to="/favourites" className="uk-text-bold simple-link-light">
                                <span uk-icon="icon: check; ratio: 1" /> Published
                              </Link>
                            </li>
                            <li className="mdc-list-item " role="menuitem">
                              <Link to="/favourites" className="uk-text-bold simple-link-light">
                                <span uk-icon="icon: cog; ratio: 1" /> Settings
                              </Link>
                            </li>
                          </div>
                          <div className="card-footer"  style={{padding: 0}}>
                            <li className="mdc-list-item" role="menuitem">
                              <Link to="/legal/privacy" className="uk-text-bold simple-link-light">
                                Privacy
                              </Link>
                            </li>
                            <li className="mdc-list-item" role="menuitem">
                              <Link to="/support" className="uk-text-bold simple-link-light">
                                Support
                              </Link>
                            </li>
                            <li className="mdc-list-item uk-text-bold" role="menuitem" onClick={props.logout}>
                              Logout                        
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="uk-navbar-nav uk-padding-small">
                  <Link to="/write" className="" style={{color: '#fff'}}><Icon glyph="post" size={34} /></Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    } else {
      return(
        <div
          data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky mdc-toolbar mdc-toolbar--fixed"
          style={{marginBottom: 0}}
        >
          <nav 
            className="uk-navbar-container mdc-elevation--z2 uk-margin uk-background-secondary raised mdc-toolbar mdc-toolbar--fixed uk-dark" 
            // tslint:disable-next-line:jsx-boolean-value
            uk-navbar
            style={{marginBottom: 0, backgroundColor: '#020202'}}
          >
            <div className="nav-overlay uk-navbar-left">
              <button
                className="uk-navbar-toggle nav-overlay uk-hidden@m"
                type="button" 
                // tslint:disable-next-line:jsx-boolean-value
                uk-navbar-toggle-icon
                uk-toggle="target: #offcanvas-nav"
                uk-icon="icon: menu; ratio: 1.5"
              />
              <Link to="/" className="uk-navbar-item uk-logo uk-visible@m" href="#">
                <img 
                  src={require('../../../../Assets/unizonn/uni_green.svg')} 
                  style={{height: 40}}
                  // tslint:disable-next-line:jsx-boolean-value
                  uk-svg
                />
              </Link>
              <Link to="/" className="uk-navbar-item uk-logo uk-hidden@m" href="#">
                <img 
                  src={require('../../../../Assets/unizonn/uni_green_s.svg')} 
                  style={{height: 40}}
                  // tslint:disable-next-line:jsx-boolean-value
                  uk-svg
                />
              </Link>
              <ul className="uk-navbar-nav uk-visible@m">
                  <li>
                    <HomeTab data-active={props.match.url === '/' && props.match.isExact} to="/">
                      <Icon glyph="home" />
                      <Label>Articles</Label>
                    </HomeTab>
                  </li>
                  <li>
                    <LibraryTab data-active={props.match.url === '/community' && props.match.isExact} to="/community">
                      <Icon glyph="message" />
                      <Label>Community</Label>
                    </LibraryTab>
                  </li>
                  <li>
                    <LibraryTab data-active={props.match.url === '/library' && props.match.isExact} to="/library">
                      <Icon glyph="library" />
                      <Label>Library</Label>
                    </LibraryTab>
                  </li>
              </ul>
              <div className="uk-navbar-right uk-visible@s">
                <ul className="uk-iconnav">
                  <div className="uk-flex">
                    <SearchContainer />
                  </div>
                  <NotificationsTab
                    location={props.history.location}
                    currentUser={props.me}
                    data-badge="8"
                    active={props.history.location.pathname.includes('/notifications')}
                  />
                </ul>
                <div className="uk-navbar-nav uk-padding-small">
                  <Link to="/login" className="uk-button uk-button-default uk-dark uk-button-small">
                  Get started
                  </Link>
                </div>}
              </div>
              <div className="nav-overlay uk-navbar-right uk-hidden@s">
                <div className="uk-navbar-nav uk-padding-small">
                  <Link to="/login" className="uk-button uk-button-primary uk-dark uk-button-small">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }
}
export default compose(
  withRouter
)(PrivateHeader);