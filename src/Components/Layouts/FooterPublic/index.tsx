import * as React from 'react';
import glamorous from 'glamorous';

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
    color: '#fff',
});

const FooterPublic = () => {
    return (
      <div
        className="uk-flex uk-width-1-1 uk-flex-between uk-padding-small"
        style={{backgroundColor: '#21212199'}}
      >
        <div className="uk-width-1-3@m uk-width-1-1@s" style={{color: '#fff', fontWeight: 'bold', fontSize: '1vw'}}>
          Copyright @2017 Unizonn, All Rights Reserved
        </div>
        <div className="uk-width-2-3@m uk-width-1-1@s uk-text-right">
          <div className="ui horizontal list">
            <A className="item simple-link" style={{color: '#fff', fontWeight: 'bold', fontSize: '1vw'}}>Unizonn</A>
            <A className="item simple-link" style={{color: '#fff', fontWeight: 'bold', fontSize: '1vw'}}>Privacy</A>
            <A className="item simple-link" style={{color: '#fff', fontWeight: 'bold', fontSize: '1vw'}}>Terms & Condition</A>
            <A className="item simple-link" style={{color: '#fff', fontWeight: 'bold', fontSize: '1vw'}}>Careers</A>
            <A className="item simple-link" style={{color: '#fff', fontWeight: 'bold', fontSize: '1vw'}}>Skills</A>
            <A className="item simple-link" style={{color: '#fff', fontWeight: 'bold', fontSize: '1vw'}}>About Us</A>
            <A className="item simple-link" style={{color: '#fff', fontWeight: 'bold', fontSize: '1vw'}}>Contact</A>
            <A className="item simple-link" style={{color: '#fff', fontWeight: 'bold', fontSize: '1vw'}}>Support</A>
          </div>
        </div>
      </div>
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