import * as React from 'react';
import { Helmet } from 'react-helmet';
import InputBoxLogin from 'Components/InputBoxLogin';
// import * as Jquery from 'jquery';

import './style.scss';
import { FooterPublic } from 'Components/Layouts/FooterPublic';

interface Props {
    classes?: object;
    history: object;
}

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>;
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>;
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>;
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>;
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>;
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>;

class HomePublic extends React.Component<Props> {
    
    state = {
        strokeDashOffset: 0,
        pinPin: false,
        pinUnpin: false,
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
        return (
            <div 
              className="uk-width-1-1 ui"
            >
                <Helmet>
                    <title>Unizonn | Home</title>
                    <meta name="an inclusive community" content="Unizonn community" />
                </Helmet>
                <div
                  id="bg1"
                  className="uk-section backgroundOne uk-width-1-1 uk-height-1-1 uk-light uk-background-cover"
                  style={{ height: '91vh' }}
                >
                   <div className="uk-container">
                    <div className="uk-grid-match uk-flex uk-width-1-1" uk-grid>
                      <div className="uk-padding uk-width-1-2@m uk-width-1-1@s">
                          <InputBoxLogin />
                      </div>
                      <div className="uk-padding uk-width-1-2@m uk-hidden@s">
                          wow
                      </div>
                    </div>
                  </div>
                  <div className="uk-position-bottom uk-visible@s">
                  <FooterPublic />
                  </div>
                </div>
            </div>
            
        );
    }
}

export default HomePublic;
/*

                        <iframe
                            src="//www.youtube.com/embed/a_ONcLi8tfY?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
                            width="560"
                            height="415"
                            frameBorder="1"
                            data-uk-responsive={true}
                            uk-video="automute: true; autoplay: false"
                        />*/