"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class PopoverLink extends React.Component {
    // tslint:disable-next-line:typedef
    constructor(props) {
        super(props);
        this.state = {
            showPopover: false,
            user: null,
            position: null
        };
        this.handleMouseEnter = (event) => {
            let position;
            const POPOVER_HEIGHT = 200;
            if (POPOVER_HEIGHT + 30 > event.clientY) {
                position = 'bottom';
            }
            else {
                position = 'top';
            }
            this.timeoutID = setTimeout(() => {
                this.setState({ user: {}, showPopover: true, position: position });
            }, 450);
        };
        this.state = { showPopover: false, user: null, position: null };
    }
    render() {
        return (React.createElement("span", { className: "popover-link uk-text-bold", onMouseEnter: () => this.handleMouseEnter.bind(this), onMouseLeave: () => this.handleMouseLeave.bind(this) },
            React.createElement("a", { href: '#' }, this.props.children),
            this.renderPopover()));
    }
    renderPopover() {
        if (this.state.showPopover) {
            return (React.createElement("div", null));
        }
        else {
            return;
        }
    }
    // tslint:disable-next-line:typedef
    handleMouseLeave(event) {
        if (this.timeoutID) {
            clearTimeout(this.timeoutID);
            // this.timeoutID = null;
        }
        setTimeout(() => { this.setState({ showPopover: false, position: null }); }, 180);
    }
}
exports.default = PopoverLink;
//# sourceMappingURL=index.js.map