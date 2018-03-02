import * as React from 'react';

type Props = {
  url: string,
  size?: number,
  circle?: boolean,
  presence: boolean
};

// tslint:disable-next-line:typedef
const Avatar = (props: Props) => {
  return (
    <figure className="avatar avatar-xl">
      <img 
        width={props.size} 
        height={props.size} 
        src={props.url} 
      />
      {props.presence ? <i className="avatar-presence online"/> : null}
    </figure>
  );
};

export default Avatar;