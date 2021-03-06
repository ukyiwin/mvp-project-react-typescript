import * as React from 'react';
import { User } from 'CustomTypings/schema';
import Avatar from 'Components/Avatar';

interface Props {
  me: User;
  // tslint:disable-next-line:no-any
  onClick?: any;
}

// tslint:disable-next-line:typedef
const UserProfileBox = (props: Props) => {
  
  return (
    <div
      className="uk-width-1-1 uk-text-center uk-padding-small"
    >
      <div className="uk-background-primary uk-width-1-1 uk-position-top" style={{height: 75}} />
      <Avatar 
        size={60} 
        // tslint:disable-next-line:max-line-length
        url={props.me ? (props.me.avatar ? props.me.avatar : 'http://ghgh.vh/hjh.png') : ''} presence={false} />

        <p className="uk-text-bold" style={{fontSize: 16}}>{props.me ? props.me.firstname : ''} {props.me ? props.me.lastname : ''}</p>
        <p style={{fontSize: 12}}>Founder at Gueva Technologies. Geek, programmer, interest in AI and Machine Learning, Big Data, love basketball.</p>
        
        <div className="ui small two buttons">
          <button className="ui left positive attached button">29k Posts</button>
          <button className="right positive attached ui button">Connects 56k</button>
        </div>
    </div>
  );
};

export default UserProfileBox;