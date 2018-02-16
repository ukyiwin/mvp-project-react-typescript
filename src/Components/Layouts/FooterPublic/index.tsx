import * as React from 'react';
import glamorous from 'glamorous';
import { Grid } from 'material-ui';
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

const SharedDiv = glamorous.div({
  textAlign: 'center',
  position: 'absolute',
  width: '100%', 
  height: '60px',
  bottom: 0,
  left: 0,
  paddingBottom: 50,
  justifyContent: 'center',
  alignContent: 'center',
});

const A = glamorous.a({
  fontFamily: 'brandon-grotesque',
  color: '#ffffff'
});

const FooterPublic = () => {
  return (
    <Grid item={true} xs={12}>
      <SharedDiv id={'footerMenu'}>
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
      </SharedDiv>
    </Grid>
  );
};

export {
  FooterPublic
};