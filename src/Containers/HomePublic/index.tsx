import * as React from 'react';
// import * as $ from 'jquery';
import { SparkScroll, SparkProxy } from 'react-spark-scroll';
import * as cx from 'classnames';
import './style.css';

export default class HomePublic extends React.Component {

  offsetTarget: number;
  state = {
    strokeDashOffset: 0,
    pinPin: false,
    pinUnpin: false
  };

  componentWillMount() {
    // jhjh
  }

  componentDidMount() {
    /*$(document).alton({
      fullSlideContainer: 'full',
      singleSlideClass: 'slide',
      useSlideNumbers: true,
      slideNumbersBorderColor: '#fff',
      slideNumbersColor: 'transparent',
      bodyContainer: 'pageWrapper',
    });*/
  }

  render() {
    return(
      <div>
        <SparkProxy.div className="pin-cont" proxyId="pin-cont">
          <SparkScroll.section
            className={cx('pin', {
              'pin-pin': this.state.pinPin,
              'pin-unpin': this.state.pinUnpin})}
            proxy="pin-cont"
            timeline={{
              topTop: {
                onDown: () => this.setState({pinPin: true}),
                onUp:   () => this.setState({pinPin: false})
              },
              bottomBottom: {
                onDown: () => this.setState({pinUnpin: true}),
                onUp:   () => this.setState({pinUnpin: false})
              }
            }}
          >

            <SparkScroll.h3
              className="pin-txt"
              proxy="pin-cont"
              timeline={{
                'topTop': { top: '0%', marginTop: '0px' },
                'topTop+50  ': { top: '50%', marginTop: '-60px' }
              }}
            >pin
            </SparkScroll.h3>
            <SparkScroll.div
              className="reveal"
              proxy="pin-cont"
              timeline={{
                'topTop+100': {width: '0%', backgroundColor: '#5c832f'},
                'topTop+250': {width: ['100%', 'easeOutQuart'], backgroundColor: '#382513'}
              }}
            >
              <h3 className="reveal-txt">reveal</h3>
            </SparkScroll.div>
          </SparkScroll.section>
        </SparkProxy.div>
      </div>
    );
  }
}
