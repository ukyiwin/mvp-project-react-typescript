import * as React from 'react';
import Avatar from 'Components/Avatar';
import './style.scss';

type Props = {
  url: string,
  name: string
};

// tslint:disable-next-line:typedef
const PersonItem = (props: Props) => {
  return (
    <div className="uk-flex uk-text-center">
        <Avatar url={props.url} size={40} presence={false}/>
        <span className="uk-text-middle uk-margin-small" style={{marginLeft: 10}} >{props.name}</span>
    </div>
  );
};

export default PersonItem;