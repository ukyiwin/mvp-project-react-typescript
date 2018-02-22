import * as React from 'react';
// import UIkit from 'uikit/src/js/uikit';
import { Link } from 'react-router-dom';
// import * as Logo from 'Assets/logo.png';

type Props = {
  classes?: object,
  isAuthenticated: boolean
};

// tslint:disable-next-line:no-any
class PrivateHeader extends React.Component<Props> {

  componentDidMount() {
    // UIkit.notification('MyMessage', 'danger');
  }

  render() {
    return (
      <div 
        data-uk-sticky="animation: uk-animation-slide-top; 
        sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky: 
        cls-inactive: uk-navbar-transparent uk-light; top: 200"
      >
        <nav 
          className="uk-navbar-container uk-margin uk-background-secondary" 
          uk-navbar={true}
          style={{ position: 'relative', zIndex: 980, elevation: 1}}
        >
          <div className="uk-navbar-left">
            <button
              className="uk-navbar-toggle uk-hidden@m"
              type="button" 
              uk-navbar-toggle-icon={true} 
              uk-toggle="target: #offcanvas-nav"
              uk-icon="icon: menu; ratio: 1.5"
            />
            <a className="uk-navbar-item uk-logo" href="#">
            <img 
              src="https://getuikit.com/docs/images/avatar.jpg"
              alt="Logo"
              width="40" 
              height="40" 
            />  Unizonn
            </a>
            <ul className="uk-navbar-nav uk-visible@m">
              <li><Link to="/home" className="uk-light">Articles</Link></li>
              <li><Link to="/forum" className="uk-light">Forums</Link></li>
              <li><Link to="/library" className="uk-light">Library</Link></li>
              <li><Link to="/home" className="uk-light">Network</Link></li>
            </ul>
            <div className="uk-navbar-right uk-visible@s">
              {this.props.isAuthenticated ? <React.Fragment>
              <ul className="uk-iconnav">
                <li><Link to="/message" uk-icon="icon: calendar; ratio: 1.5"/></li>
                <li><Link to="/message" uk-icon="icon: mail; ratio: 1.5"/></li>
                <li><Link to="/message" uk-icon="icon: bell; ratio: 1.5"/></li>
              </ul>
              <ul className="uk-navbar-nav">
                <li>
                  <a href="#">
                    <img 
                      className="uk-border-circle" 
                      src="https://getuikit.com/docs/images/avatar.jpg" 
                      width="40" 
                      height="40" 
                      alt="Border circle"
                    />
                  </a>
                  <div data-uk-dropdown="mode: click">
                    <ul className="uk-nav uk-dropdown-nav">
                        <li><Link to="/message" className="uk-text-bold">Profile</Link></li>
                        <li><Link to="/message" className="uk-text-bold">Reading Score</Link></li>
                        <li><Link to="/message" className="uk-text-bold">Privacy</Link></li>
                        <li className="uk-nav-divider" />
                        <li><Link to="/message" className="uk-text-bold">Support</Link></li>
                        <li><Link to="/message" className="uk-text-bold">Logout</Link></li>
                    </ul>
                </div>
                </li>
              </ul>
              <div className="uk-navbar-nav uk-padding-small">
                <Link to="/ask" className="uk-button uk-button-primary uk-button-small">Write</Link>
              </div> </React.Fragment> :
              <div className="uk-navbar-nav uk-padding-small">
                <Link to="/login" className="uk-button uk-button-default uk-light uk-button-small">
                Get started
                </Link>
              </div>}
            </div>
            <div className="uk-navbar-right uk-hidden@s">
            {this.props.isAuthenticated ? 
              <div className="uk-navbar-nav uk-padding-small">
                <button className="uk-button uk-button-primary uk-button-small">Ask</button>
              </div>
              :
              <div className="uk-navbar-nav uk-padding-small">
                <button className="uk-button uk-button-default uk-light uk-button-small uk-border-rounded">
                  Login
                </button>
              </div>
            }
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
}

export default PrivateHeader;