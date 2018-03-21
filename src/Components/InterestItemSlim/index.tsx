import * as React from 'react';
// import Avatar from 'Components/Avatar';
import './style.scss';

interface Props {
  url: string;
  name: string;
}

// tslint:disable-next-line:typedef
const InterestItemSlim = (props: Props) => {
  return (
    <a className="tag">{props.name}</a>
  );
};

export default InterestItemSlim;
