import * as React from 'react';

interface Props {
    liked: boolean;
    small?: boolean;
    followClick: any;
    unFollowClick: any;
}

const FollowButton = (props: Props) => {
  const { small } = props;
      
  if (small) {
        if (props.liked) {
          return (
              <div>
              <button className="btn btn-primary btn-sm" onClick={props.followClick} style={{padding: 0, margin: 0, width: 70}}>
                  Connected
              </button>
              </div>
          );
        } else {
            return (
              <div>
                <button 
                  className="btn btn-default btn-sm uk-dark" 
                  onClick={props.followClick}
                  style={{padding: 0, margin: 0, width: 70, color: '#000'}}
                >
                  + Connect
                </button>
              </div>
            );
        }
  } else {
        if (props.liked) {
          return (
            <button className="ui attached button" onClick={props.followClick}>
              Connected
            </button>
          );
        } else {
            return (
              <button 
                className="ui attached positive button"
                onClick={props.unFollowClick}
              >
                + Connect
              </button>
            );
        }
  }
};

export default FollowButton;