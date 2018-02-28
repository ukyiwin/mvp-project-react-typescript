import * as React from 'react';
import { Helmet } from 'react-helmet';
import './style.css';

export default class Forum extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Unizonn | Forum</title>
          <meta name="an inclusive community" content="Unizonn community" />
        </Helmet>
        <header className="App-header">
          <h1 className="App-title"> Welcome to Unizonn </h1>
        </header>
      </div>
    );
  }
}