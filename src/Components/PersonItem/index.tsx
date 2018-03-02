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
    <div className="uk-flex uk-card uk-card-default un-highlight uk-margin-small">
      <Avatar url={props.url} size={20} presence={false} />
      <div className="uk-width-1-1" style={{margin: 5}}>
        <p>{props.name}</p>
        <p style={{}}>I am a good fellow people</p>
      </div>
    </div>
  );
};

export default PersonItem;