import * as React from 'react';
import Avatar from 'Components/Avatar';
import { Link } from 'react-router-dom';

// tslint:disable-next-line:no-any
class WriteModal extends React.PureComponent {

  render() {

    return (
      <div 
        className="ui card fluid uk-width-1-1 uk-margin-bottom"
      >
          <div className="uk-flex header uk-padding-small" >
            <Link to="/write">
              <div
                style={{paddingLeft: 10}}
              >
                <p style={{fontFamily: 'Raleway', fontSize: 15, color: '#000'}}>Share an article...</p>
              </div>
            </Link>
          </div>
          <div className="extra content">
            <button className="ui labeled basic icon button">
              <i className="pause icon" />
              Photo
            </button>
            <button className="ui labeled basic icon button">
              <i className="pause icon" />
              Video
            </button>
            <button className="ui button basic compact right floated">
              Post
            </button>
          </div>
      </div>
    );
  }
  
}

export default WriteModal;