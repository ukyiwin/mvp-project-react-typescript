"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_helmet_1 = require("react-helmet");
const InputBoxLogin_1 = require("Components/InputBoxLogin");
require("./style.css");
class HomePublic extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            strokeDashOffset: 0,
            pinPin: false,
            pinUnpin: false
        };
    }
    componentWillMount() {
        // dhsj
    }
    componentDidMount() {
        // kjk
    }
    componentWillUnmount() {
        // hjh
    }
    render() {
        // const { classes } = this.props;
        return (React.createElement("div", { className: "uk-flex-stretch " },
            React.createElement(react_helmet_1.Helmet, null,
                React.createElement("title", null, "Unizonn | Home"),
                React.createElement("meta", { name: "an inclusive community", content: "Unizonn community" })),
            React.createElement("div", { id: "bg1", className: "uk-flex uk-width-1-1 uk-flex-stretch uk-height-large backgroundOne", style: { height: '100vh' } },
                React.createElement("div", { className: "uk-container uk-container-expand uk-position-center-left uk-flex uk-width-1-1" },
                    React.createElement(InputBoxLogin_1.default, { hisory: this.props.history }))),
            React.createElement("div", { className: "uk-flex uk-width-1-1 uk-flex-stretch uk-height-large backgroundTwo", style: { height: '100vh' } },
                React.createElement("div", { className: "uk-container uk-container-expand uk-flex", style: { marginTop: 80, elevation: 3, padding: 5, borderRadius: 8 } },
                    React.createElement("iframe", { src: "//www.youtube.com/embed/a_ONcLi8tfY?autoplay=0&showinfo=0\r\n            &rel=0&modestbranding=1&playsinline=1", width: "560", height: "315", frameBorder: "1", "data-uk-responsive": true, "uk-video": "automute: true; autoplay: false" })))));
    }
}
exports.default = HomePublic;
//# sourceMappingURL=index.js.map