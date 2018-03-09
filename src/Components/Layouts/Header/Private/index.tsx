import * as React from 'react';
// import UIkit from 'uikit/src/js/uikit';
import { Link } from 'react-router-dom';
// import * as Logo from 'Assets/main/unizonn.png';

type Props = {
  classes?: object,
  isAuthenticated: boolean,
  // tslint:disable-next-line:no-any
  logout: any,
};

// tslint:disable-next-line:no-any
const PrivateHeader = (props: Props) => {
    return (
      <div
        data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
      >
        <nav 
          className="uk-navbar-container uk-margin uk-background-secondary raised" 
          // tslint:disable-next-line:jsx-boolean-value
          uk-navbar
          style={{elevation: 5, borderBottomWidth: 1, borderBottomColor: '#212121'}}
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
            <Link to="/" className="uk-navbar-item uk-logo" href="#">
              <img 
                src={require('../../../../Assets/main/logof.png')} 
                style={{height: 70}}
                // tslint:disable-next-line:jsx-boolean-value
                uk-svg
              />
            </Link>
            <ul className="nav-overlay uk-navbar-nav uk-visible@m">
              <li><Link to="/home" className="uk-light">Articles</Link></li>
              <li><Link to="/forum" className="uk-light">Forums</Link></li>
              <li><Link to="/library" className="uk-light">Library</Link></li>
              <li><Link to="/home" className="uk-light">Connections</Link></li>
            </ul>
            <div className="nav-overlay uk-navbar-right uk-visible@s">
              <form 
                style={{maxWidth: 250}}
                className="uk-search uk-search-navbar uk-visible@m"
              >
                <span 
                  // tslint:disable-next-line:jsx-boolean-value
                  data-uk-search-icon 
                />
                <input 
                  className="uk-search-input" 
                  type="search" 
                  placeholder="Search unizonn..."
                />
              </form>
              {props.isAuthenticated ? <React.Fragment>
              <ul className="uk-iconnav">
                <li className="uk-animation-toggle">
                  <Link className="uk-animation-shake" to="/message" uk-icon="icon: calendar; ratio: 1.5"/>
                </li>
                <li className="uk-animation-toggle">
                  <Link className="uk-animation-shake" to="/message" uk-icon="icon: mail; ratio: 1.5"/>
                </li>
                <li className="uk-animation-toggle">
                  <Link className="uk-animation-shake" to="/message" uk-icon="icon: bell; ratio: 1.5"/>
                </li>
              </ul>
              <ul className="uk-navbar-nav">
                <li>
                  <a href="#">
                    <div className="uk-animation-toggle">
                    <img 
                      className="uk-border-circle uk-animation-kenburns uk-animation-fast" 
                      src="https://getuikit.com/docs/images/avatar.jpg" 
                      width="40" 
                      height="40" 
                      alt="Border circle"
                    />
                    </div>
                  </a>
                  <div data-uk-dropdown="mode: click">
                    <ul className="uk-nav uk-dropdown-nav">
                        <li><Link to="/profile" className="uk-text-bold">Profile</Link></li>
                        <li><Link to="/message" className="uk-text-bold">Reading Score</Link></li>
                        <li><Link to="/message" className="uk-text-bold">Privacy</Link></li>
                        <li className="uk-nav-divider" />
                        <li><Link to="/message" className="uk-text-bold">Support</Link></li>
                        <li><a onClick={props.logout} className="uk-text-bold">Logout</a></li>
                    </ul>
                </div>
                </li>
              </ul>
              <div className="uk-navbar-nav uk-padding-small">
                <Link to="/write" className="uk-button uk-button-primary uk-button-small">Write</Link>
              </div> </React.Fragment> :
              <div className="uk-navbar-nav uk-padding-small">
                <Link to="/login" className="uk-button uk-button-default uk-dark uk-button-small">
                Get started
                </Link>
              </div>}
            </div>
            <div className="nav-overlay uk-navbar-right uk-hidden@s">
            {props.isAuthenticated ? <React.Fragment>
              <ul className="uk-iconnav">
                <li className="uk-animation-toggle">
                  <Link className="uk-animation-shake" to="/message" uk-icon="icon: bell; ratio: 1.5"/>
                </li>
              </ul>
              <ul className="uk-navbar-nav">
                <li>
                  <a href="#">
                    <div className="uk-animation-toggle">
                    <img 
                      className="uk-border-circle uk-animation-kenburns uk-animation-fast" 
                      src="https://getuikit.com/docs/images/avatar.jpg" 
                      width="40" 
                      height="40" 
                      alt="Border circle"
                    />
                    </div>
                  </a>
                  <div data-uk-dropdown="mode: click">
                    <ul className="uk-nav uk-dropdown-nav">
                        <li><Link to="/profile" className="uk-text-bold">Profile</Link></li>
                        <li><Link to="/message" className="uk-text-bold">Reading Score</Link></li>
                        <li><Link to="/message" className="uk-text-bold">Privacy</Link></li>
                        <li className="uk-nav-divider" />
                        <li><Link to="/message" className="uk-text-bold">Support</Link></li>
                        <li><a onClick={props.logout} className="uk-text-bold">Logout</a></li>
                    </ul>
                </div>
                </li>
              </ul>
              <div className="uk-navbar-nav uk-padding-small">
                <Link to="/write" className="uk-button uk-button-primary uk-button-small">Write</Link>
              </div>
              <div className="nav-overlay uk-navbar-right">
                <a 
                  className="uk-navbar-toggle" 
                  uk-search-icon=""
                  uk-toggle="target: .nav-overlay; animation: uk-animation-fade" 
                  href="#" 
                />
              </div>

              <div 
                className="uk-flex-1"
                /* tslint:disable-next-line:jsx-boolean-value */
                hidden
              >
                <div className="uk-navbar-item uk-width-expand">
                    <form className="uk-search uk-search-navbar uk-width-1-1">
                        <input 
                          className="uk-search-input" 
                          type="search" 
                          placeholder="Search..." 
                          autoFocus={true}
                        />
                    </form>
                </div>
                <a 
                  className="uk-navbar-toggle"
                  data-uk-close="ratio: 1"
                  data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" 
                  href="#" 
                />
              </div>
              </React.Fragment>
              :
              <div className="uk-navbar-nav uk-padding-small">
                <Link to="/login" className="uk-button uk-button-default uk-dark uk-button-small uk-border-rounded">
                  Login
                </Link>
              </div>
            }
            </div>
          </div>
        </nav>
      </div>
    );
};

export default PrivateHeader;