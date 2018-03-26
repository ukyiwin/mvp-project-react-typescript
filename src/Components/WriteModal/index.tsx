import * as React from 'react';
import Avatar from 'Components/Avatar';
import { Link } from 'react-router-dom';

// tslint:disable-next-line:no-any
class WriteModal extends React.PureComponent {

  render() {

    return (
      <div 
        className="card uk-width-1-1 uk-margin-bottom"
        style={{ borderRadius: 1 }}
      >
          <div className="uk-flex card-header uk-padding-small" >
            <Link to="/write">
              <div
                style={{paddingLeft: 10}}
              >
                <p className="uk-text-lead">Start an article...</p>
              </div>
            </Link>
          </div>
      </div>
    );
  }
  
}

export default WriteModal;