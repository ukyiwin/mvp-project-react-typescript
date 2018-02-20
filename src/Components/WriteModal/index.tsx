import * as React from 'react';
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
        
        <div id="modal-close-default" data-uk-modal={true}>
            <div className="uk-modal-dialog uk-modal-body">
                <button className="uk-modal-close-default" type="button" data-uk-close={true} />
                <h2 className="uk-modal-title">Default</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                   in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                   nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                   culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
      </div>
    );
  }
  
}

export default WriteModal;