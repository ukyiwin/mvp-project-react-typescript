import * as React from 'react';
import { Helmet } from 'react-helmet';
import InputBoxLogin from 'Components/InputBoxLogin';
import './style.css';

type Props = {
  classes?: object,
  history: object,
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

    return(
      <div className="uk-flex-stretch ">
        <Helmet>
          <title>Unizonn | Home</title>
          <meta name="an inclusive community" content="Unizonn community" />
        </Helmet>
        <div 
          id="bg1"
          className="uk-flex uk-width-1-1 uk-flex-stretch uk-height-large backgroundOne"
          style={{height: '100vh'}}
        >
            <div 
              className="uk-container uk-container-expand uk-position-center-left uk-flex uk-width-1-1"
            >
              <InputBoxLogin hisory={this.props.history} />  
            </div>
        </div>
        <div 
          className="uk-flex uk-width-1-1 uk-flex-stretch uk-height-large backgroundTwo"
          style={{height: '100vh'}}
        >
          <div 
            className="uk-container uk-container-expand uk-flex"
            style={{marginTop: 80}}
          >
          <iframe 
            src="//www.youtube.com/embed/YE7VzlLtp-4?autoplay=0&amp;showinfo=0
            &amp;rel=0&amp;modestbranding=1&amp;playsinline=1" 
            width="560" 
            height="315" 
            frameBorder="0"
            data-uk-responsive={true}
            uk-video="automute: true; autoplay: false" 
          />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePublic;