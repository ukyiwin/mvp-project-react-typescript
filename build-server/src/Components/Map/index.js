"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const recompose_1 = require("recompose");
const react_google_maps_1 = require("react-google-maps");
const MapComponent = recompose_1.compose(recompose_1.withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: React.createElement("div", { style: { height: `100%` } }),
    containerElement: React.createElement("div", { style: { height: `400px` } }),
    mapElement: React.createElement("div", { style: { height: `100%` } }),
}), react_google_maps_1.withScriptjs, react_google_maps_1.withGoogleMap)((props) => 
// tslint:disable-next-line:jsx-wrap-multiline
React.createElement(React.Fragment, null,
    React.createElement(react_google_maps_1.GoogleMap, { defaultZoom: 8, defaultCenter: {
            lat: props.lat,
            lng: props.lng
        } }, props.isMarkerShown &&
        React.createElement(react_google_maps_1.Marker, { position: { lat: props.lat, lng: props.lng }, onClick: props.onMarkerClick }))));
exports.default = MapComponent;
//# sourceMappingURL=index.js.map