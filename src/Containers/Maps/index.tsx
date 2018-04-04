import * as React from 'react';
import MapComponent from 'Components/Map';
import { Helmet } from 'react-helmet';
import { geolocated, GeolocatedProps } from 'react-geolocated';
import './style.scss';
import Label from 'Components/Label';
// tslint:disable
type Props = {
  name?: string
};

class Maps extends React.Component<Props & GeolocatedProps> {

  render() {
    const {coords} = this.props;
    let lat = coords ? coords.latitude : -10.0;
    let lng = coords ? coords.longitude : -19.0;
    return (
      <div className="uk-width-1-1 uk-background-default">
        <Helmet>
          <title>Unizonn | Library</title>
          <meta name="an inclusive community" content="Unizonn community" />
        </Helmet>
        <div className="segment uk-card uk-card-default" style={{minHeight: 290}}>
          <MapComponent 
            lat={lat}
            lng={lng}
            isMarkerShown={true}
          />
        </div>
        <div className="uk-padding-large uk-padding-remove-vertical">
          <section className="content">
            <h4 
              className=" uk-text-middle uk-flex uk-padding-small"
              style={{marginLeft: 90}}
            >Near Libraries
            </h4>
            <Label text="Sorting from the closest" />
            <div className="uk-flex uk-flex-between grid grid--effect-rigel">
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
                <div className="grid__item-caption uk-padding-small">
                  <h3 className="grid__item-title uk-text-bold">First State Library</h3>
                  <div className="column column--left">
                    <span className="column__text">Distance</span>
                    <span className="column__text">Review</span>
                  </div>
                  <div className="column column--right">
                    <span className="column__text">9.1 meters</span>
                    <span className="column__text">3</span>
                  </div>
                </div>
              </a>
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
                  <h3 className="grid__item-title uk-text-bold">City Library</h3>
                  <div className="column column--left">
                    <span className="column__text">Distance</span>
                    <span className="column__text">Review</span>
                  </div>
                  <div className="column column--right">
                    <span className="column__text">9.1 meters</span>
                    <span className="column__text">3</span>
                  </div>
                </div>
              </a>
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
                  <h3 className="grid__item-title uk-text-bold">Library de Anglon</h3>
                  <div className="column column--left">
                    <span className="column__text">Distance</span>
                    <span className="column__text">Review</span>
                  </div>
                  <div className="column column--right">
                    <span className="column__text">50.8 meters</span>
                    <span className="column__text">5.0</span>
                  </div>
                </div>
              </a>
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
                  <h3 className="grid__item-title uk-text-bold">City Library</h3>
                  <div className="column column--left">
                    <span className="column__text">Distance</span>
                    <span className="column__text">Review</span>
                  </div>
                  <div className="column column--right">
                    <span className="column__text">9.1 meters</span>
                    <span className="column__text">3</span>
                  </div>
                </div>
              </a>
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
                  <h3 className="grid__item-title uk-text-bold">Library de Anglon</h3>
                  <div className="column column--left">
                    <span className="column__text">Distance</span>
                    <span className="column__text">Review</span>
                  </div>
                  <div className="column column--right">
                    <span className="column__text">50.8 meters</span>
                    <span className="column__text">5.0</span>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 1000,
})(Maps);

/*

<MapComponent 
            lat={lat}
            lng={lng}
            isMarkerShown={true}
          />
          */