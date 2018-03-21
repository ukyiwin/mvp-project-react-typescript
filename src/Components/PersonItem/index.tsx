import * as React from 'react';
import Avatar from 'Components/Avatar';

interface Props {
  url: string;
  name: string;
}

// tslint:disable-next-line:typedef
const PersonItem = (props: Props) => {
  return (
    <div className="uk-flex boxit">
        <Avatar url={props.url} size={40} presence={false}/>
        <div className="" style={{marginLeft: 10}}>
          <span>{props.name}</span> <br/>
          <span>I like to eat alot everyday with</span>
        </div>
    </div>
  );
};

export default PersonItem;
