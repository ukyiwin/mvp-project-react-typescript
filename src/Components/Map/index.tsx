import * as React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

interface Props {
    isMarkerShown?: boolean;
    onMarkerClick?: () => void;
    lat: number;
    lng: number;
}

const MapComponent = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAoa373lwAsdouzumRvpxb7Vdw5IPLhacQ&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
)((props: Props) => (
    // tslint:disable-next-line:jsx-wrap-multiline
    <>
        <GoogleMap
            defaultZoom={8}

            defaultCenter={{
                lat: props.lat,
                lng: props.lng,
            }}
        >
            {props.isMarkerShown && (
                <Marker position={{ lat: props.lat, lng: props.lng }} onClick={props.onMarkerClick} />
            )}
        </GoogleMap>
    </>
));

export default MapComponent;
