import * as React from 'react';
// import UIkit from 'uikit/src/js/uikit';
import { Link } from 'react-router-dom';
// import * as Logo from 'Assets/logo.png';
import './style.css';

interface Props {
  classes?: object;
}

// tslint:disable-next-line:no-any
class SideBar extends React.Component<Props> {

  componentDidMount() {
    // UIkit.notification('MyMessage', 'danger');
  }

  render() {
    return (
      <div
        id="offcanvas-nav"
        uk-offcanvas="overlay: true"
      >
        <div
          className="uk-offcanvas-bar un-sidebar-container"
          style={{margin: 0, padding: 0, color: '#000'}}
        >
            <ul
              className="uk-nav"
              style={{margin: 0, padding: 0, color: '#000'}}
            >
                <li>
                  <Link to="/home" className="uk-light">
                    <span className="uk-margin-small-right" uk-icon="icon: home"/> Articles
                  </Link>
                </li>
                <li>
                  <Link to="/forum">
                    <span className="uk-margin-small-right" uk-icon="icon: thumbnails"/> Forums
                  </Link>
                </li>
                <li>
                  <Link to="/library">
                    <span className="uk-margin-small-right" uk-icon="icon: location"/> Library
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <span className="uk-margin-small-right" uk-icon="icon: rss"/> Connections
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="uk-margin-small-right" uk-icon="icon: calendar"/> Calender
                  </a>
                </li>
                <li className="uk-nav-divider" />
                <li>
                  <Link to="/">
                    <span className="uk-margin-small-right" uk-icon="icon: thumbnails"/> Unizonn
                  </Link>
                </li>
                <li>
                  <Link to="/support">
                    <span className="uk-margin-small-right" uk-icon="icon: question"/> Support
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <span className="uk-margin-small-right" uk-icon="icon: info"/> About
                  </Link>
                </li>
            </ul>

        </div>
      </div>
    );
  }

}

export default SideBar;
