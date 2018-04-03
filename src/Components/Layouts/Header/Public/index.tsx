import * as React from 'react';
// import UIkit from 'uikit/src/js/uikit';
import { Link } from 'react-router-dom';
import { User } from 'CustomTypings/schema';
import SearchContainer from 'Components/SearchContainer';
import './style.scss';

// import * as Logo from 'Assets/main/unizonn.png';
interface Props {
  classes?: object;
  isAuthenticated: boolean;
  me: any;
  avatar?: string;
  // tslint:disable-next-line:no-any
  logout: any;
}

// tslint:disable-next-line:max-line-length
const PublicHeader = (props: Props) => {

    return (
      <div
        data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky mdc-toolbar mdc-toolbar--fixed"
        style={{marginBottom: 0}}
        className="uk-postition-top"
      >
        <nav 
          className="uk-navbar-container uk-margin uk-background-secondary raised mdc-toolbar mdc-toolbar--fixed uk-dark" 
          // tslint:disable-next-line:jsx-boolean-value
          uk-navbar
          style={{marginBottom: 0}}
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
                src={require('../../../../Assets/unizonn/uniz_.svg')} 
                style={{height: 40}}
                // tslint:disable-next-line:jsx-boolean-value
                uk-svg
              />
            </Link>
            <Link to="/" className="uk-navbar-item uk-logo uk-hidden@m" href="#">
              <img 
                src={require('../../../../Assets/unizonn/unizz_small.svg')} 
                style={{height: 40}}
                // tslint:disable-next-line:jsx-boolean-value
                uk-svg
              />
            </Link>
            <div className="nav-overlay uk-navbar-right uk-visible@s">
              <div className="uk-navbar-nav uk-padding-small">
                <Link to="/login" className="uk-button uk-button-default uk-dark uk-button-small">
                Get started
                </Link>
              </div>
            </div>
            <div className="nav-overlay uk-navbar-right uk-hidden@s">
              <div className="uk-navbar-nav uk-padding-small">
                <Link to="/login" className="uk-button uk-button-default uk-dark uk-button-small uk-border-rounded">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default PublicHeader;