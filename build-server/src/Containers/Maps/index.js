"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Map_1 = require("Components/Map");
const react_helmet_1 = require("react-helmet");
const react_geolocated_1 = require("react-geolocated");
require("./style.css");
const Label_1 = require("Components/Label");
class Maps extends React.Component {
    componentDidMount() {
        window.anima();
    }
    render() {
        const { coords } = this.props;
        let lat = coords ? coords.latitude : -10.0;
        let lng = coords ? coords.longitude : -19.0;
        return (React.createElement("div", { className: "uk-width-1-1 uk-background-default" },
            React.createElement(react_helmet_1.Helmet, null,
                React.createElement("title", null, "Unizonn | Library"),
                React.createElement("meta", { name: "an inclusive community", content: "Unizonn community" })),
            React.createElement("div", { className: "uk-card uk-card-default", style: { minHeight: 300 } },
                React.createElement(Map_1.default, { lat: lat, lng: lng, isMarkerShown: true })),
            React.createElement("div", { className: "uk-padding-large uk-padding-remove-vertical" },
                React.createElement("section", { className: "content" },
                    React.createElement("h4", { className: " uk-text-middle uk-flex uk-padding-small", style: { marginLeft: 90 } }, "Near Libraries"),
                    React.createElement(Label_1.default, { text: "Sorting from the closest" }),
                    React.createElement("div", { className: "grid grid--effect-rigel" },
                        React.createElement("a", { href: "#", className: "grid__item grid__item--c1" },
                            React.createElement("div", { className: "stack" },
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__figure" },
                                    React.createElement("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
                            React.createElement("div", { className: "grid__item-caption uk-card uk-card-default uk-padding-small" },
                                React.createElement("h3", { className: "grid__item-title uk-text-bold" }, "First State Library"),
                                React.createElement("div", { className: "column column--left" },
                                    React.createElement("span", { className: "column__text" }, "Distance"),
                                    React.createElement("span", { className: "column__text" }, "Review")),
                                React.createElement("div", { className: "column column--right" },
                                    React.createElement("span", { className: "column__text" }, "20 meters"),
                                    React.createElement("span", { className: "column__text" }, "4.5")))),
                        React.createElement("a", { href: "#", className: "grid__item grid__item--c1" },
                            React.createElement("div", { className: "stack" },
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__figure" },
                                    React.createElement("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
                            React.createElement("div", { className: "grid__item-caption uk-card uk-card-default uk-padding-small" },
                                React.createElement("h3", { className: "grid__item-title uk-text-bold" }, "City Library"),
                                React.createElement("div", { className: "column column--left" },
                                    React.createElement("span", { className: "column__text" }, "Distance"),
                                    React.createElement("span", { className: "column__text" }, "Review")),
                                React.createElement("div", { className: "column column--right" },
                                    React.createElement("span", { className: "column__text" }, "9.1 meters"),
                                    React.createElement("span", { className: "column__text" }, "3")))),
                        React.createElement("a", { href: "#", className: "grid__item grid__item--c1" },
                            React.createElement("div", { className: "stack" },
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__deco" }),
                                React.createElement("div", { className: "stack__figure" },
                                    React.createElement("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
                            React.createElement("div", { className: "grid__item-caption uk-card uk-card-default uk-padding-small" },
                                React.createElement("h3", { className: "grid__item-title uk-text-bold" }, "Library de Anglon"),
                                React.createElement("div", { className: "column column--left" },
                                    React.createElement("span", { className: "column__text" }, "Distance"),
                                    React.createElement("span", { className: "column__text" }, "Review")),
                                React.createElement("div", { className: "column column--right" },
                                    React.createElement("span", { className: "column__text" }, "50.8 meters"),
                                    React.createElement("span", { className: "column__text" }, "5.0")))))))));
    }
}
exports.default = react_geolocated_1.geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 1000,
})(Maps);
//# sourceMappingURL=index.js.map