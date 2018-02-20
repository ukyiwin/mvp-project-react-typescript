import * as React from 'react';
import './style.css';
import MapComponent from 'Components/Map';
import { geolocated, GeolocatedProps } from 'react-geolocated';

type Props = {
  name?: string
};

class Maps extends React.Component<Props & GeolocatedProps> {
  render() {
    const {coords} = this.props;
    let lat = coords ? coords.latitude : -10.0;
    let lng = coords ? coords.longitude : -19.0;
    return (
      <div className="uk-width-1-1">
        <div className="uk-card uk-card-default">
          <MapComponent 
            lat={lat}
            lng={lng}
            isMarkerShown={true}
          />
        </div>
        <div className="uk-padding-large uk-padding-remove-vertical">
          {lat}
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