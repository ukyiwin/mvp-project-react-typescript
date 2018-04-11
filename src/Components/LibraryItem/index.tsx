import * as React from 'react';
import { Library } from 'CustomTypings/schema';

interface Props {
  library: Library;
}

// tslint:disable-next-line:typedef
const LibraryItem = (props: Props) => {
  return (     
    <a href="#" className="uk-card-default grid__item grid__item--c1">
      <div className="stack">
        <div className="stack__deco"/>
        <div className="stack__deco"/>
        <div className="stack__deco"/>
        <div className="stack__deco"/>
        <div className="stack__figure">
          <img className="stack__img" src="https://tympanus.net/Development/StackMotionHoverEffects/img/2.png" alt="Image"/>
        </div>
      </div>
      <div className="grid__item-caption uk-card uk-card-default uk-padding-small">
        <h3 className="grid__item-title uk-text-bold">{props.library.name}</h3>
        <h3 className="grid__item-title uk-text-bold">{props.library.description}</h3>
        <div className="column column--left">
          <span className="column__text">Distance</span>
        </div>
        <div className="column column--right">
          <span className="column__text">50.8 meters</span>
        </div>
      </div>
    </a>
  );
};

export default LibraryItem;
