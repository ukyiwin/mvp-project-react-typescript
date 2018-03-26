import * as React from 'react';
// import Avatar from 'Components/Avatar';
// import './style.scss';

interface Props {
    url: string;
    name: string;
}

// tslint:disable-next-line:typedef
const InterestItemSlim = (props: Props) => {
    return <a className="ui label " style={{margin: 2}}>
      <img className="ui right spaced avatar image" src="https://semantic-ui.com/images/avatar/small/joe.jpg" />
      {props.name}
    </a>;
};

export default InterestItemSlim;
