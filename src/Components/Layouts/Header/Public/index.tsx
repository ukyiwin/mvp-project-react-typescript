import * as React from 'react';
// import UIkit from 'uikit/src/js/uikit';
import { Link } from 'react-router-dom';
// import * as Logo from 'Assets/logo.png';

type Props = {
  classes?: object,
};

// tslint:disable-next-line:no-any
class PublicHeader extends React.Component<Props> {

  componentDidMount() {
    // UIkit.notification('MyMessage', 'danger');
  }

  render() {
    return (
      <div 
        data-uk-sticky="animation: uk-animation-slide-top; 
        sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky: 
        cls-inactive: uk-navbar-transparent; top: 100;"
      >
        <nav 
          className="uk-navbar-container uk-margin uk-background-secondary" 
          // tslint:disable-next-line:jsx-boolean-value
          uk-navbar
          style={{ zIndex: 980, elevation: 1}}
        >
          <div className="uk-navbar-left">
            <button
              className="uk-navbar-toggle uk-hidden@m"
              type="button" 
              // tslint:disable-next-line:jsx-boolean-value
              uk-navbar-toggle-icon 
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
              <li><Link to="/home" className="uk-light">Stories</Link></li>
              <li><Link to="/forum" className="uk-light">Forums</Link></li>
              <li><Link to="/library" className="uk-light">Library</Link></li>
            </ul>
            <div className="uk-navbar-right uk-visible@s">
              <ul className="uk-iconnav">
                <li><a href="#" uk-icon="icon: calendar; ratio: 1.5"/></li>
                <li><a href="#" uk-icon="icon: mail; ratio: 1.5"/></li>
                <li><a href="#" uk-icon="icon: bell; ratio: 1.5"/></li>
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
                  <div className="uk-navbar-dropdown">
                      <ul className="uk-nav uk-navbar-dropdown-nav">
                          <li className="uk-active"><a href="#">Active</a></li>
                          <li><a href="#">Item</a></li>
                          <li className="uk-nav-header">Header</li>
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Item</a></li>
                          <li className="uk-nav-divider"/>
                          <li><a href="#">Item</a></li>
                      </ul>
                  </div>
                </li>
              </ul>
              <div className="uk-navbar-nav uk-padding-small">
                <Link to="/ask" className="uk-button uk-button-primary uk-button-small">Ask question</Link>
              </div>
              <div className="uk-navbar-nav uk-padding-small">
                <Link to="/login" className="uk-button uk-button-default uk-button-small">Login / Register</Link>
              </div>
            </div>
            <div className="uk-navbar-right uk-hidden@s">
              <div className="uk-navbar-nav uk-padding-small">
                <button className="uk-button uk-button-primary uk-button-small">Ask</button>
              </div>
              <div className="uk-navbar-nav uk-padding-small">
                <button className="uk-button uk-button-default uk-button-small uk-border-rounded">Login</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
}

export default PublicHeader;