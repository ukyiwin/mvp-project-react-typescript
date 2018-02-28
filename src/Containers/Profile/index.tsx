import * as React from 'react';
import { Helmet } from 'react-helmet';
import './style.css';

export default class Profile extends React.Component {
  state = {
    messages: [
    ],
    is_typing: false
  };

  render() {
    return (
      <div className="uk-flex uk-height-1-1 uk-height-match">
        <Helmet>
          <title>Unizonn | My Profile</title>
          <meta name="an inclusive community" content="Unizonn community" />
        </Helmet>
        dhjdhjh
      </div>
    );
  }
}