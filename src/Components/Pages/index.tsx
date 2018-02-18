import * as React from 'react';
import glamorous from 'glamorous';
import YouTube from 'react-youtube';
import { Button, Grid } from 'material-ui';

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
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  paddingLeft: 50,
  paddingRight: 50
});

const BigH1 = glamorous.h3({
  textAlign: 'left',
  fontFamily: 'brandon-grotesque',
  fontSize: 80,
  color: 'white',
  lineHeight: '1.15em',
  fontWeight: 900,
  margin: 0,
  textTransform: 'uppercase',
  textShadow: '0 0.3rem 0.9rem rgba(0,0,0,.4)',
  letterSpacing: -3,
});

const PageOne = () => {
  return (
      <SharedDiv>
        <Grid container={true} spacing={24} direction={'row'}>
            <Grid item={true} xs={12} sm={12} md={6} lg={6} alignContent={'center'}>
              <YouTube
                videoId="a_ONcLi8tfY"
              />
            </Grid>
            <Grid item={true} xs={12} sm={12} md={6} lg={6}>
              <BigH1>What is unizonn</BigH1>
              <h5 style={{textAlign: 'left', fontFamily: 'brandon-grotesque', fontSize: 20}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, 
                consectetur numquam saepe unde ex voluptate nisi quas inventore nihil expedita culpa perspiciatis nam,
                 a ea, in maxime eveniet accusantium iste.
              </h5>
              <p style={{textAlign: 'left'}}>
              <Button 
                variant={'raised'} 
                color={'secondary'}
                style={{textAlign: 'left', alignSelf: 'flex-start'}}
              >
                Get started
              </Button>
              </p>
            </Grid>
        </Grid>
      </SharedDiv>
  );
};

export {
  PageOne,
  BigH1
};