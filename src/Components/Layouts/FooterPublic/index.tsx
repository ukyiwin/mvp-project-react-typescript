import * as React from 'react';
import glamorous from 'glamorous';
// import { Grid } from 'material-ui';
import './style.css';

// var winWidth = $(window).width();
// var winHeight = $(window).height();

/*const videoOpts = {
  height: winHeight,
  width: winWidth,
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};*/

const A = glamorous.a({
  fontFamily: 'brandon-grotesque',
  color: '#ffffff'
});

const FooterPublic = () => {
  return (
    <div className="uk-section uk-section-secondary uk-light">
      <div className="uk-container ">
        <h3 style={{marginBottom: 10}}>Unizonn</h3>
        <div className="uk-column-1-3">
          <div>
            <ul>
              <li>
                <A href="#">Terms</A>
              </li>
              <li>
                <A href="#">Privacy</A>
              </li>
              <li>
                <A href="#">Jobs</A>
              </li>
              <li>
                <A href="#">About</A>
              </li>
              <li>
                <A href="#">Support</A>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <A href="#">Terms</A>
              </li>
              <li>
                <A href="#">Privacy</A>
              </li>
              <li>
                <A href="#">Jobs</A>
              </li>
              <li>
                <A href="#">About</A>
              </li>
              <li>
                <A href="#">Support</A>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <A href="#">Terms</A>
              </li>
              <li>
                <A href="#">Privacy</A>
              </li>
              <li>
                <A href="#">Jobs</A>
              </li>
              <li>
                <A href="#">About</A>
              </li>
              <li>
                <A href="#">Support</A>
              </li>
            </ul>
          </div>
        </div>
        <div className="uk-width-1-1" id="footerList">
            <ul>
              <li>
                <A href="#">Terms</A>
              </li>
              <li>
                <A href="#">Privacy</A>
              </li>
              <li>
                <A href="#">Jobs</A>
              </li>
              <li>
                <A href="#">About</A>
              </li>
              <li>
                <A href="#">Support</A>
              </li>
            </ul>
        </div>
        
      </div>
    </div>
  );
};

export {
  FooterPublic
};