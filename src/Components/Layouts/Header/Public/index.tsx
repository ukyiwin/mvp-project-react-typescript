import * as React from 'react';
// import UIkit from 'uikit/src/js/uikit';
import { User } from 'CustomTypings/schema';
import SearchContainer from 'Components/SearchContainer';
import { Button, IconButton } from 'Components/Buttons';
import Link from 'Components/Link';
import Icon from 'Components/Icons';
import {
  NavContainer,
  Tabs,
  LogoTab,
  MenuTab,
  PricingTab,
  SupportTab,
  AuthTab,
  LogoLink,
  AuthLink,
  PricingLink,
  SupportLink,
  ExploreLink,
  MenuContainer,
  MenuOverlay,
} from 'Containers/style';
import './style.scss';

// import * as Logo from 'Assets/main/unizonn.png';
interface Props {
  classes?: object;
  isAuthenticated: boolean;
  me: any;
  avatar?: string;
  // tslint:disable-next-line:no-any
  logout: any;
  location?: any;
}

// tslint:disable-next-line:max-line-length
const PublicHeader = (props: Props) => {
    return (
      <div className="uk-position-top">
        <nav 
          className="uk-navbar-container uk-navbar-transparent uk-margin uk-dark" 
          // tslint:disable-next-line:jsx-boolean-value
          uk-navbar
          style={{marginBottom: 0}}
        >
          <div className="nav-overlay uk-navbar-left">
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
              <Tabs>
                <PricingTab
                  dark={true}
                  selected={props.location === 'blog'}
                  to="/blog"
                >
                  Blog
                </PricingTab>
                <SupportTab
                  dark={true}
                  selected={props.location === 'support'}
                  to="/support"
                >
                  Support
                </SupportTab>
              </Tabs>
              <div className="uk-navbar-nav uk-padding-small">
                <AuthTab dark={true}>
                  <Link to="/login">
                    <Button
                      className="uk-button"
                      style={{
                        fontWeight: '700',
                        fontSize: '16px',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Get started
                    </Button>
                  </Link>
                </AuthTab>
              </div>
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
};

export default PublicHeader;