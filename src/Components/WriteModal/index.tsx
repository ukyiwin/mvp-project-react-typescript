import * as React from 'react';
import Avatar from 'Components/Avatar';
import { Link } from 'react-router-dom';

// tslint:disable-next-line:no-any
class WriteModal extends React.PureComponent {

  render() {

    return (
      <div 
        className="uk-card uk-card-small uk-card-default uk-width-1-1 uk-margin-bottom"
        style={{ borderRadius: 1, padding: 0, paddingTop: 15, marginLeft: 0, marginRight: 0 }}
      >
          <div className="uk-flex uk-text-middle uk-padding-small" >
              <Avatar 
                url="https://getuikit.com/docs/images/avatar.jpg"
                presence={false}
                size={40}
              />
            <Link to="/write">
              <div 
                data-uk-toggle="target: #modal-close-default" 
                className="uk-text-center"
                style={{paddingLeft: 10}}
              >
                <p className="uk-text-lead uk-text-center">Write an article...</p>
              </div>
            </Link>
          </div>
      </div>
    );
  }
  
}

export default WriteModal;