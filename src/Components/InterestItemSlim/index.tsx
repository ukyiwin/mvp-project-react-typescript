import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  url?: string;
  name: string;
}

const InterestItemSlim = (props: Props) => {
    return <Link className="ui label chip" to={`/interest/${props.name}`} style={{margin: 2}}>
      {props.name}
    </Link>;
};

export default InterestItemSlim;
