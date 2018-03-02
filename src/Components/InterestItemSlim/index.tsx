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
    <div className="uk-flex uk-card uk-card-default un-highlight uk-margin-small">
      <Avatar url={props.url} size={20} presence={false} />
      <div style={{ display: 'flex' }}>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default InterestItemSlim;