import * as React from 'react';

type Props = {
  url: string,
  name: string,
  id: string | number,
  checked?: boolean,
  key: string | number,
  // tslint:disable-next-line:no-any
  onClickAdd: any
};

// tslint:disable-next-line:typedef
const InterestItem = (props: Props) => {
  
  return (
    <div 
      key={props.key} 
      className="uk-tile uk-tile-secondary" 
      style={{backgroundImage: props.url}}
    >
      <button 
        className={`uk-button ${props.checked ? 'uk-button-secondary uk-light' : 'uk-button-default uk-dark'} 
        uk-button-small uk-align-center`}
        onClick={() => props.onClickAdd(props.id)}
      >
        {props.name}
      </button>
    </div>
  );
};

export default InterestItem;