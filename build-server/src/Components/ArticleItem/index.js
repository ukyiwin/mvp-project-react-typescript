"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Avatar_1 = require("Components/Avatar");
const LikeButton_1 = require("Components/LikeButton");
const PopoverLink_1 = require("Components/PopoverLink");
const react_timeago_1 = require("react-timeago");
// tslint:disable-next-line:no-any
class ArticleItem extends React.Component {
    componentDidMount() {
        // UIkit.notification('MyMessage', 'danger');
    }
    render() {
        const { article } = this.props;
        const { author } = article;
        return (React.createElement("div", { className: "uk-width-1-1", style: { borderRadius: 1, marginBottom: 15, padding: 10, backgroundColor: '#fff' } },
            React.createElement("div", { className: "post-metadata uk-padding-remove-bottom uk-padding-small" },
                React.createElement("div", { className: "uk-grid-small uk-flex", "uk-grid": true },
                    React.createElement("div", { className: "uk-width-auto" },
                        React.createElement(Avatar_1.default, { url: 'https://getuikit.com/docs/images/avatar.jpg', size: 40, presence: false })),
                    React.createElement("div", { className: "uk-width-auto post-info" },
                        React.createElement(PopoverLink_1.default, null,
                            author.firstname,
                            " ",
                            author.lastname),
                        React.createElement("p", { className: "uk-text-meta uk-margin-remove-top" },
                            React.createElement("time", { dateTime: article.createdAt },
                                React.createElement(react_timeago_1.default, { className: "timeago", date: article.createdAt }),
                                " ago \u0095 ",
                                article.body.lengthInMinutes()))))),
            React.createElement("div", { className: "uk-card-body uk-padding-remove-vertical", style: { paddingTop: 6, borderBottom: 1 } },
                React.createElement("h5", { className: "uk-text-medium uk-text-bold uk-text-break", style: { fontSize: 23, fontFamily: 'Open Sans' } }, article.title.truncString('...', 140)),
                React.createElement("p", { style: { color: '#212121', fontSize: 17 } }, article.body.truncString('...', 140))),
            React.createElement("div", { className: "post-stats clearfix uk-padding-small uk-padding-remove-horizontal", style: { paddingTop: 1, paddingBottom: 1 } },
                React.createElement("div", { className: "uk-flex pull-left uk-padding-small" },
                    React.createElement(LikeButton_1.default, { liked: false, likeCount: 2 }),
                    React.createElement("a", { className: "response-coun uk-margin-left uk-margin-right" },
                        React.createElement("span", { "uk-icon": "icon:  comment; ratio: 1.2" }),
                        " Comments (0)"),
                    React.createElement("a", { className: "response-count" },
                        React.createElement("span", { "uk-icon": "icon:  forward; ratio: 1.2" }),
                        "Share")),
                React.createElement("div", { className: "uk-flex  response-count pull-right uk-padding-small" },
                    React.createElement("div", { className: "dropdown" },
                        React.createElement("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" },
                            React.createElement("span", { "uk-icon": "icon: more; ratio: 1.3" })),
                        React.createElement("div", { "uk-drop": "pos: bottom-right" },
                            React.createElement("ul", { className: "menu" }, "hello"))),
                    React.createElement("button", { className: "uk-button uk-button-text" },
                        React.createElement("span", { "uk-icon": "icon: bookmark; ratio: 1.2" }))))));
    }
}
exports.default = ArticleItem;
/*

          <div
            data-uk-lightbox="animation: fade; video-autoplay: true;"
            className="uk-inline-clip uk-transition-toggle"
            style={{ borderRadius: 12, marginTop: 10 }}
          >
            <a
              className="uk-inline"
              href="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg"
            >
              <img
                src="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg"
                className="img-responsive uk-transition-scale-up uk-transition-opaque"
                alt="..."
              />
            </a>
          </div>
*/ 
//# sourceMappingURL=index.js.map