"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_helmet_1 = require("react-helmet");
const react_async_component_1 = require("react-async-component");
const EmptyStates_1 = require("Components/EmptyStates");
const theme_provider_1 = require("anchor-ui/theme-provider");
const search_box_1 = require("anchor-ui/search-box");
const list_1 = require("anchor-ui/list");
const list_item_1 = require("anchor-ui/list-item");
const channel_header_1 = require("anchor-ui/channel-header");
const button_1 = require("anchor-ui/button");
const icon_channels_1 = require("anchor-ui/icons/icon-channels");
const icon_people_1 = require("anchor-ui/icons/icon-people");
require("./style.css");
// import { compose } from 'react-apollo';
const ChatDetail = react_async_component_1.asyncComponent({
    resolve: () => System.import('Containers/ChatDetail'),
    LoadingComponent: () => React.createElement(EmptyStates_1.LoadingComponent, null),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message) // Optional
});
const items = [{
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }];
class Forum extends React.Component {
    render() {
        return (React.createElement(theme_provider_1.default, { color: "#f2912c" },
            React.createElement("div", { className: "App" },
                React.createElement(react_helmet_1.Helmet, null,
                    React.createElement("title", null, "Unizonn | Forum"),
                    React.createElement("meta", { name: "an inclusive community", content: "Unizonn community" })),
                React.createElement("div", { style: { height: '91vh', width: '100vw' }, className: "uk-width-1-1 uk-flex" },
                    React.createElement("div", { id: "chat-list", className: "uk-width-1-4 un-border-right", style: { backgroundColor: '#ffffff' } },
                        React.createElement(search_box_1.default, { placeholder: "Search for channels and chat" }),
                        React.createElement(list_1.default, { id: "chat-list", header: "Channels", style: { height: '43.1vh' } }, items.map((item, index) => (React.createElement(list_item_1.default, { key: index, primaryText: item.primaryText, avatar: item.image })))),
                        React.createElement(list_1.default, { id: "chat-list", header: "Direct Chat", style: { height: '40vh' } }, items.map((item, index) => (React.createElement(list_item_1.default, { key: index, primaryText: item.primaryText, secondaryText: item.secondaryText, avatar: item.image }))))),
                    React.createElement("div", { className: "uk-width-expand" },
                        React.createElement(channel_header_1.default, { name: "Channel", rightButton: 
                            // tslint:disable-next-line:jsx-boolean-value
                            React.createElement(button_1.default, { iconButton: true },
                                React.createElement(icon_people_1.default, null)), leftButton: 
                            // tslint:disable-next-line:jsx-boolean-value
                            React.createElement(button_1.default, { iconButton: true },
                                React.createElement(icon_channels_1.default, null)) }),
                        React.createElement("div", { className: "uk-width-1-1 uk-flex", style: {} },
                            React.createElement(react_router_dom_1.Route, { component: ChatDetail, exact: true, path: "/forum/:id" })))))));
    }
}
exports.default = Forum;
/*
export default withRouter(compose(
  withApollo,
  graphql<Response, InputProps, Props>(GET_C, {
    name: 'login'})
)(Forum));*/ 
//# sourceMappingURL=index.js.map