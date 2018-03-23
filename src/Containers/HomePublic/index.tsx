import * as React from 'react';
import { Helmet } from 'react-helmet';
import InputBoxLogin from 'Components/InputBoxLogin';
import './style.scss';

interface Props {
    classes?: object;
    history: object;
}

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
            <div className="uk-flex-stretch ">
                <Helmet>
                    <title>Unizonn | Home</title>
                    <meta name="an inclusive community" content="Unizonn community" />
                </Helmet>
                <div className="base-slider owl-carousel owl-theme">
                  <div className="item">
                    <img src="Assets/img/slider-light.svg" alt="slider" />
                    <div className="inside">
                      <h2>Best Web Hosting For Your Website</h2>
                      <p>get best speed for your website. dont loose more clients.</p>
                      <a href="service-page.html" className="custom-btn">Get Started Now</a>
                    </div>
                  </div>
                  <div className="item">
                    <img src="Assets/img/slider-light.svg" alt="slider" />
                    <div className="inside">
                      <h2>Best Web Hosting For Your Website</h2>
                      <p>get best speed for your website. dont loose more clients.</p>
                      <a href="service-page.html" className="custom-btn">Get Started Now</a>
                    </div>
                  </div>
                </div>
                <div
                    id="bg1"
                    className="uk-flex uk-width-1-1 uk-flex-stretch uk-height-large backgroundOne"
                    style={{ height: '100vh' }}
                >
                    <div className="uk-container uk-container-expand uk-position-center-left uk-flex uk-width-1-1">
                        <InputBoxLogin />
                    </div>
                </div>
                <div
                    className="uk-flex uk-width-1-1 uk-flex-stretch uk-height-large backgroundTwo"
                    style={{ height: '100vh' }}
                >
                    <div
                        className="uk-container uk-container-expand uk-flex"
                        style={{ marginTop: 80, elevation: 3, padding: 5, borderRadius: 8 }}
                    >
                        <iframe
                            src="//www.youtube.com/embed/a_ONcLi8tfY?autoplay=0&amp;showinfo=0
            &amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
                            width="560"
                            height="315"
                            frameBorder="1"
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
