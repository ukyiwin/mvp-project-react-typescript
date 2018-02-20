import * as React from 'react';
// import UIkit from 'uikit/src/js/uikit';
// import { Link } from 'react-router-dom';
// import * as Logo from 'Assets/logo.png';

type Props = {
  classes?: object,
};

// tslint:disable-next-line:no-any
class SideBar extends React.Component<Props> {

  componentDidMount() {
    // UIkit.notification('MyMessage', 'danger');
  }

  render() {
    return (
      <div id="offcanvas-nav" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">

            <ul className="uk-nav uk-nav-default">
                <li className="uk-nav-header">UNIZONN</li>
                <li>
                  <a href="#">
                    <span className="uk-margin-small-right" uk-icon="icon: home"/> Articles
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="uk-margin-small-right" uk-icon="icon: rss"/> Stories
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="uk-margin-small-right" uk-icon="icon: thumbnails"/> Forums
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="uk-margin-small-right" uk-icon="icon: location"/> Library
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="uk-margin-small-right" uk-icon="icon: mail"/> Messages
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="uk-margin-small-right" uk-icon="icon: calendar"/> Calender
                  </a>
                </li>
                <li className="uk-nav-divider" />
                <li>
                  <a href="#">
                    <span className="uk-margin-small-right" uk-icon="icon: thumbnails"/> Unizonn
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="uk-margin-small-right" uk-icon="icon: question"/> Support
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="uk-margin-small-right" uk-icon="icon: info"/> About
                  </a>
                </li>
            </ul>

        </div>
    </div>
    );
  }
  
}

export default SideBar;