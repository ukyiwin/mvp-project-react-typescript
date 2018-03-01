import * as React from 'react';
import { Helmet } from 'react-helmet';
import './style.css';

export default class Messages extends React.Component {
  state = {
    messages: [
    ],
    is_typing: false
  };

  render() {
    return (
      <div className="container" >
        <Helmet>
          <title>Unizonn | Chat</title>
          <meta name="an inclusive community" content="Unizonn community" />
        </Helmet>
        <div className="app-wrapper" >
          <div className="uk-flex uk-height-1-1 uk-height-match">
            <div className="uk-width-1-3 uk-height-1-1">
              hjhjh
            </div>
            <div className="uk-width-2-3 uk-height-1-1">
              <div className="uk-padding-large">
                hjhjhjh
                <div className="">
                jjhjhj
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}