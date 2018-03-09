import * as React from 'react';
import Avatar from 'Components/Avatar';
import './style.scss';

type Props = {
  url: string,
  name: string
};

// tslint:disable-next-line:typedef
const InterestItemSlim = (props: Props) => {
  return (
    <a 
      className="uk-flex uk-flex-stretch un-highlight uk-text-center"
      style={{paddingLeft: 15, paddingRight: 15}}
    >
      <Avatar url={props.url} size={35} presence={false} />
      <div style={{ display: 'flex', alignSelf: 'center', marginLeft: 15 }}>
        <p>{props.name}</p>
      </div>
    </a>
  );
};

export default InterestItemSlim;