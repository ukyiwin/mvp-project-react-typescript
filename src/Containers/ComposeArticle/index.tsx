import * as React from 'react';
// import Editor from 'Components/Editor';
import './style.css';

export default class Compose extends React.Component {
  render() {
    return (
      <div 
        className="uk-flex uk-width-1-1 uk-padding" 
        style={{height: '90vh', maxHeight: '90vh'}}
        // tslint:disable-next-line:jsx-boolean-value
        uk-grid
      >
        <div 
          className="uk-container uk-card uk-card-default uk-padding-small 
            uk-width-1-1 uk-container-expand"
          style={{textAlign: 'center'}}
        >
          <div className="uk-position-bottom uk-padding-small uk-padding-remove-vertical ">
            <hr className="uk-align-top" />
            <button className="uk-button uk-button-default uk-align-left">Polls</button>
            <button className="uk-button uk-button-primary uk-align-right">POST</button>
          </div>
        </div>
      </div>
    );
  }
}