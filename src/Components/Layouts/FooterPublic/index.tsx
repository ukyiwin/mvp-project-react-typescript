import * as React from 'react';
import glamorous from 'glamorous';
import { LinkBlock, LinkBlockA, Footer, Flexer } from 'Containers/style';
import { FlexRow } from 'Components/Globals';
import Link from 'Components/Link';
import Icon from 'Components/Icons';

const FooterPublic = () => {
  return (
    <Footer>
      <FlexRow>
        <img 
          src={require('../../../Assets/unizonn/uni_green.svg')} 
          style={{ height: 40 }}
          uk-svg
        />
      </FlexRow>
      <Flexer>
        <LinkBlock to="/about">
          <div>About</div>
        </LinkBlock>
        <LinkBlock to="/job">
          <div>Job</div>
        </LinkBlock>
        <LinkBlock to="/privacy">
          <div>Privacy</div>
        </LinkBlock>
        <LinkBlock to="/terms">
          <div>Terms</div>
        </LinkBlock>
      </Flexer>
    </Footer>
  );
};

/*
const A = glamorous.a({
    color: '#fff',
});

const FooterPublic = () => {
    return (
      <div className="backgroundFour" style={{minHeight: 400}}>
      <div
        className="uk-flex uk-width-1-1 uk-flex-between uk-position-bottom uk-padding-small background-four"
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
      </div>
    );
};
*/
export { FooterPublic };
