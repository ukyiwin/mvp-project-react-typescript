import * as React from 'react';
// import Editor from 'Components/Editor';
// import UIkit from 'uikit/src/js/uikit';
// import { Link } from 'react-router-dom';

type Props = {
  classes?: object,
};

// tslint:disable-next-line:no-any
class WriteModal extends React.Component<Props> {

  componentDidMount() {
    // UIkit.notification('MyMessage', 'danger');
  }

  render() {
    return (
      <div 
        className="uk-card uk-card-small uk-card-default uk-width-1-1 uk-margin-bottom"
        style={{ borderRadius: 5 }}
      >
        <div className="uk-padding-small">
          <div className="uk-grid-small uk-flex" uk-grid={true} >
            <div className="uk-width-auto">
                <img 
                  className="uk-border-circle" 
                  width="40" 
                  height="40"
                  src="https://getuikit.com/docs/images/avatar.jpg"
                />
            </div>
            <div className="uk-width-auto">
                <h5 className="uk-card-title uk-margin-remove-bottom">Gustavo Benedito Costa</h5>
            </div>
          </div>
        </div>
        <div 
          className="uk-card-body"
        >
          <a data-uk-toggle="target: #modal-close-default">
            <p className="uk-text-lead">Write something...</p>
          </a>
        </div>
        
        <div id="modal-close-default"data-uk-modal={true}>
            <div  
              style={{maxWidth: 800}} 
              className="uk-modal-dialog uk-modal-body
               uk-overflow-hidden uk-article uk-padding"
            >
                <button className="uk-modal-close-default" type="button" data-uk-close={true} />
                
                <input 
                  className="uk-article-meta" 
                  placeholder="Tags"  
                  style={{marginTop: 70, marginBottom: 10}}
                />
                <div className="uk-width-1-1">
                  <button className="uk-button uk-button-default" type="button">Save Draft</button>
                  <button className="uk-button uk-button-primary uk-align-right" type="button">Publish</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
}

export default WriteModal;