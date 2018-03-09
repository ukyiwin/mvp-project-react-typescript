import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Fullpage, Slide } from 'fullpage-react';
import InputBoxLogin from 'Components/InputBoxLogin';
import glamorous from 'glamorous';
import './style.css';

const A = glamorous.a({
  fontFamily: 'brandon-grotesque',
  color: '#000000'
});

type Props = {
  classes?: object,
  history: object,
};

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 7,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true,
  slides: {}
};

class HomePublic extends React.Component<Props> {

  offsetTarget: number;
  state = {
    strokeDashOffset: 0,
    pinPin: false,
    pinUnpin: false
  };

  componentWillMount() {
    // dhsj
  }

  componentDidMount() {
    // kjk
  }

  componentWillUnmount() {
    // hjh
  }
  
  render() {
    // const { classes } = this.props;
    const slides = [
      // tslint:disable-next-line:jsx-key
      // tslint:disable-next-line:jsx-wrap-multiline
      <Slide key="1" style={{backgroundColor: '#FFC914'}} className="backgroundOne">
        <div 
          className="uk-flex uk-width-1-1 uk-position-center uk-flex-stretch uk-height-large"
          style={{height: '100vh'}}
        >
          <div 
            className="uk-container uk-container-expand uk-position-center uk-flex"
          > <div className="slide__bg slide__bg--6 backgroundTwo" />
            <h2 className="word word--6">Unizonn</h2>
              <InputBoxLogin hisory={this.props.history} /> 
          </div>
        </div>
      </Slide>,
      // tslint:disable-next-line:jsx-wrap-multiline
      <Slide key="1" style={{backgroundColor: '#E4572E'}}>
        <div
          className="uk-flex uk-width-1-1 uk-padding-large uk-flex-stretch uk-height-large"
        >
          <div className="uk-width-1-3 ">
            <h1 style={{color: '#ffffff'}}>Connect with academia</h1>
            <p style={{color: '#ffffff'}}>
              Meet students and lecturers, find your next study mate,
              contribute by writing articles, find answer to questions
              colaborate and find friends.
            </p>
          </div>
          <div className="uk-width-1-3 uk-container uk-text-center">
            <iframe 
              src="http://www.youtube.com/embed/a_ONcLi8tfY?autoplay=0&amp;showinfo=0
              &amp;rel=0&amp;modestbranding=1&amp;playsinline=1" 
              width="800"
              height="600" 
              frameBorder="0"
              data-uk-responsive={true}
              uk-video="automute: true; autoplay: false" 
            />
          </div>
        </div>
      </Slide>,
      // tslint:disable-next-line:jsx-wrap-multiline
      <Slide key="1" style={{backgroundColor: '#717C89'}} className="backgroundTwo">
        <div
          className="uk-flex uk-width-1-1 uk-text-center uk-section uk-padding-large uk-flex-stretch uk-height-large"
        >
          <div className="uk-width-1-2 uk-container">
            <h1 style={{color: '#ffffff'}}>Unizonn Connects</h1>
            <p style={{color: '#ffffff'}}>
              Meet students and lecturers, find your next study mate,
              contribute by writing articles, find answer to questions
              colaborate and find friends.
            </p>
          </div>
        </div>
      </Slide>
    ];
    
    fullPageOptions.slides = slides;

    return(
      <div className="uk-flex-stretch ">
        <Helmet>
          <title>Unizonn | Home</title>
          <meta name="an inclusive community" content="Unizonn community" />
        </Helmet>
        <Fullpage {...fullPageOptions}>
        <div 
          className="uk-flex uk-width-1-1 uk-flex-stretch uk-dark uk-text-center uk-padding-small"
          style={{position: 'fixed', bottom: 0, zIndex: 5, 
          backgroundColor: '#0000008C', color: '#ffffff', height: 50 }}
        >
          <div className="uk-width-1-3@m uk-width-1-1@s uk-text-center uk-visible@m" id="footerList">
            <p>Copyright @2017, All Rights Reserved</p>
          </div>
          <div className="uk-width-2-3@m uk-width-1-1@s uk-text-center" id="footerList">
              <ul>
                  <li>
                    <A href="#">Terms</A>
                  </li>
                  <li>
                    <A color={'#000'} href="#">Privacy</A>
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
        </Fullpage>
      </div>
    );
  }
}

export default HomePublic;