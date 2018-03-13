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
    <div 
      className="uk-flex uk-flex-stretch un-highlight uk-text-center"
      style={{paddingLeft: 15, paddingRight: 15}}
    >
      <Avatar url={props.url} size={35} presence={false} />
      <div style={{ display: 'flex', alignSelf: 'center', marginLeft: 15 }}>
        <h5 className="un-block-display">{props.name}</h5>
      </div>
    </div>
  );
};

export default InterestItemSlim;