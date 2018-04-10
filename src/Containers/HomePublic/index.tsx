import * as React from 'react';
import { Helmet } from 'react-helmet';
import InputBoxLogin from 'Components/InputBoxLogin';
import { Parallax } from 'react-scroll-parallax';
import * as Jquery from 'jquery';
import { CommunitySearch, Yours } from 'Components/SearchBoxHome';
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
              className="uk-width-1-1"
              style={{backgroundColor: '#ffffff'}}
            >
                <Helmet>
                    <title>Unizonn | Home</title>
                    <meta name="an inclusive community" content="Unizonn community" />
                </Helmet>
                <div
                    id="bg1"
                    className="uk-section backgroundTwo uk-width-1-1 uk-height-1-1 uk-light uk-background-cover"
                    style={{ minHeight: '100vh' }}
                >
                    <div className="uk-container">
                      <div className="uk-grid-match uk-flex uk-width-1-1" uk-grid>
                        <div className="uk-padding uk-width-1-2@m uk-width-1-1@s">
                          <InputBoxLogin />
                        </div>
                        <div className="uk-width-1-2@m uk-visible@s">
                          <div className="uk-visible@s phoneImg" />
                        </div>
                      </div>
                    </div>
                </div>
                <div
                  className="uk-section uk-width-1-1 uk-height-1-1 uk-light uk-background-cover"
                >
                  <div className="uk-container">
                    <div className="uk-child-width-1-3@s uk-grid-match" data-uk-grid>
                      <div>
                          <div className="uk-card uk-card-default uk-text-center uk-card-hover uk-card-body">
                            <span data-uk-icon="icon: hashtag; ratio: 5" />
                            <h3 className="uk-card-title">Interact with Students</h3>
                            <p>Chat, talk and communicate with other students anywhere and everywhere you are.
                              Take advantage to know students around and abroad and grow your network.
                            </p>
                          </div>
                      </div>
                      <div>
                        <div className="uk-card uk-card-default uk-text-center uk-card-hover uk-card-body">
                            <span data-uk-icon="icon: world; ratio: 5" />
                            <h3 className="uk-card-title  uk-padding-top-small">Collaborate without limit</h3>
                            <p>Connect with students and academia around the world and your university.
                              collaborate easily and effectively share ideas and grow your network.
                            </p>
                        </div>
                      </div>
                      <div>
                          <div className="uk-card uk-card-default uk-text-center uk-card-hover uk-card-body">
                            <span data-uk-icon="icon: rss; ratio: 5" />
                            <h3 className="uk-card-title uk-padding-top-small">Refined Articles</h3>
                            <p>Join unizonn to read and get exciting articles around your field of study, learn from other
                              students and academic heads at large or you can just write yours.</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <CommunitySearch/>
                <div
                  className="uk-section uk-width-1-1 uk-light uk-background-cover"
                >
                  <div className="uk-container">
                    <div>
                      <div className="uk-card uk-card-small uk-text-center">
                        <iframe 
                          width="595" 
                          height="350"
                          className="video"
                          src="https://www.youtube.com/embed/a_ONcLi8tfY" 
                          frameborder="0" allow="autoplay; encrypted-media" 
                          allowfullscreen 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Yours />
                <FooterPublic />
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