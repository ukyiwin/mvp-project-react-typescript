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
        <div 
          style={{height: '91vh', width: '100vw'}}
          className="uk-width-1-1 uk-flex"
        >
          <div className="uk-width-1-4" style={{backgroundColor: '#000000'}}>
            hjjhj
          </div>
          <div className="uk-width-expand">
            <div className="uk-width-1-1 raised" style={{backgroundColor: 'green', height: '8vh'}} />
            <div className="uk-width-1-1 uk-flex" style={{}}>
              <div className="uk-width-expand">
                <div 
                  className="uk-width-5-6 uk-flex input-box"
                >
                  <button style={{ display: 'inline-block'}}>+</button>
                  <input 
                    style={{ display: 'inline-block'}} 
                    placeholder="Write message.." 
                    className="uk-width-auto" 
                  />
                  <button style={{ display: 'inline-block'}}>Send</button>
                </div>
              </div>
              <div
                className="uk-height-1-1"
                style={{backgroundColor: 'black', width: '15vw', height: '83vh'}}
              >
                hhhjkj
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}