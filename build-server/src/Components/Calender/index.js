"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_calendar_1 = require("react-calendar");
// tslint:disable-next-line:no-any
class ModCalendar extends React.Component {
    componentDidMount() {
        // UIkit.notification('MyMessage', 'danger');
    }
    render() {
        return (React.createElement("div", { className: "uk-width-1-1 uk-margin-top", style: { borderRadius: 5 } },
            React.createElement(react_calendar_1.default, { className: "uk-card uk-card-small uk-card-default calendar", tileClassName: "calendar-date" })));
    }
}
exports.default = ModCalendar;
//# sourceMappingURL=index.js.map