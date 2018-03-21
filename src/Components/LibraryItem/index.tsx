import * as React from 'react';
import './style.css';

interface Props {
  text?: string;
  image?: string;
  distance?: string;
}

// tslint:disable-next-line:typedef
const LibraryItem = (props: Props) => {
  return (
    <a href="#" className="grid__item grid__item--c1">
      <div className="stack">
        <div className="stack__deco"/>
        <div className="stack__deco"/>
        <div className="stack__deco"/>
        <div className="stack__deco"/>
        <div className="stack__figure">
          <img
            className="stack__img"
            src="https://tympanus.net/Development/StackMotionHoverEffects/img/2.png"
            alt="Image"
          />
        </div>
      </div>
      <div className="grid__item-caption uk-card uk-card-default uk-padding-small">
        <h3 className="grid__item-title">anaerobic</h3>
        <div className="column column--left">
          <span className="column__text">Distance</span>
          <span className="column__text">Review</span>
        </div>
        <div className="column column--right">
          <span className="column__text">2045</span>
          <span className="column__text">133456</span>
        </div>
      </div>
    </a>
  );
};

export default LibraryItem;
