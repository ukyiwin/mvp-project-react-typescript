import * as React from 'react';
import Avatar from 'Components/Avatar';
import { Link } from 'react-router-dom';

// tslint:disable-next-line:no-any
class WriteModal extends React.PureComponent {

  render() {

    return (
      <div 
        className="uk-card uk-card-default uk-width-1-1 uk-margin-bottom"
      >
          <div className="uk-flex uk-padding-small" >
            <Link to="/write">
              <div
                style={{paddingLeft: 10}}
              >
                <p className="uk-text-bold" style={{ fontSize: 23, color: '#000'}}>Share an article...</p>
              </div>
            </Link>
          </div>
      </div>
    );
  }
  
}

export default WriteModal;