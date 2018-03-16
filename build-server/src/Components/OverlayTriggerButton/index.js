"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class OverlayTriggerButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpenClick = this.handleOpenClick.bind(this);
    }
    render() {
        return (React.createElement("span", null,
            React.createElement("span", { dangerouslySetInnerHTML: { __html: this.props.text }, onClick: this.handleOpenClick })));
    }
    // tslint:disable-next-line:typedef
    handleOpenClick(event) {
        /* Notify UserOverlay component
        PubSub.publish('OverlayTriggerButton:onClick', {
          endpoint: this.props.apiEndpoint,
          overlayHeading: this.props.overlayHeading
        });
        */
    }
}
exports.default = OverlayTriggerButton;
//# sourceMappingURL=index.js.map