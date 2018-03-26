import * as React from 'react';
import glamorous from 'glamorous';
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
    color: '#ffffff',
});

const FooterPublic = () => {
    return (
        <React.Fragment>
            <div
                className="uk-flex uk-width-1-1 uk-flex-stretch
        uk-section-secondary uk-light uk-padding-small
        uk-padding-remove-vertical"
                style={{ paddingTop: 15 }}
            >
                <div className="uk-width-1-3@m uk-width-1-1@s uk-padding-small" id="footerList">
                    <p>Copyright @2017, All Rights Reserved</p>
                </div>
                <div className="uk-width-2-3@m uk-width-1-1@s" id="footerList">
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
        </React.Fragment>
    );
};

export { FooterPublic };

/*
<div className="uk-section uk-light" style={{ backgroundColor: '#333333' }}>
                <div className="uk-container" id="footerText">
                    <h3 style={{ marginBottom: 10 }}>Unizonn</h3>
                    <div className="uk-column-1-2@m uk-column-1-1@s">
                        <div>
                            <ul>
                                <li>
                                    <A href="#">Articles</A>
                                </li>
                                <li>
                                    <A href="#">Forum</A>
                                </li>
                                <li>
                                    <A href="#">Library</A>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>Join Unizonn now and reach out to new possibilies</p>
                        </div>
                        <div>
                            <button className="uk-button uk-button-primary">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
            */