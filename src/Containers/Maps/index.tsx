import * as React from 'react';
import MapComponent from 'Components/Map';
import { Helmet } from 'react-helmet';
import { geolocated, GeolocatedProps } from 'react-geolocated';
import './style.css';

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
        <Helmet>
          <title>Unizonn | Library</title>
          <meta name="an inclusive community" content="Unizonn community" />
        </Helmet>
        <div className="uk-card uk-card-default" style={{minHeight: 300}}>
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