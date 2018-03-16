"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const OverlayTriggerButton_1 = require("Components/OverlayTriggerButton");
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            likeCount: 0
        };
        this.state = {
            liked: this.props.liked,
            likeCount: this.props.likeCount
        };
        this.onUnlikeClick = this.onUnlikeClick.bind(this);
        this.onLikeClick = this.onLikeClick.bind(this);
    }
    componentWillMount() {
        /*const { likeableType, likeableId } = this.props;
        this.token = PubSub.subscribe('LikeButton:onClick', (msg, data) => {
          if (likeableType === data.type && likeableId === data.id) {
            this.setState({ liked: data.liked, likeCount: data.count });
          }
        });*/
    }
    componentWillUnmount() {
        // PubSub.unsubscribe(this.token);
    }
    render() {
        return (React.createElement("div", { className: "like-button" },
            React.createElement("div", { className: "like-button-wrapper" }, this.renderLikeButton()),
            this.renderLikeCount()));
    }
    renderLikeButton() {
        if (this.state.liked) {
            return (React.createElement("button", { className: "unlike-button uk-text-center", onClick: this.onUnlikeClick },
                React.createElement("div", { className: "uk-flex" },
                    React.createElement("i", { className: "fa fa-heart animated bounceIn" }),
                    React.createElement("span", { className: "uk-text-middle uk-text-bold" }, "Unlike"))));
        }
        else {
            return (React.createElement("button", { className: "like-button uk-text-center", onClick: this.onLikeClick },
                React.createElement("div", { className: "uk-flex" },
                    React.createElement("i", { className: "fa fa-heart-o" }),
                    React.createElement("span", { className: "uk-text-middle uk-text-bold" }, "Bravo"))));
        }
    }
    renderLikeCount() {
        if (this.state.likeCount === 0) {
            return;
        }
        if (this.props.disableOverlay) {
            return React.createElement("span", { className: "like-count" }, this.state.likeCount);
        }
        return (React.createElement("span", { className: "like-count", style: { cursor: 'pointer' } },
            React.createElement(OverlayTriggerButton_1.default, { text: this.state.likeCount.toString(), overlayHeading: this.props.overlayHeading ? this.props.overlayHeading : '' })));
    }
    // tslint:disable-next-line:typedef
    onUnlikeClick(e) {
        // this.setState({ liked: data.liked, likeCount: data.count });
    }
    // tslint:disable-next-line:typedef
    onLikeClick(e) {
        // this.setState({ liked: data.liked, likeCount: data.count });
    }
}
exports.default = LikeButton;
//# sourceMappingURL=index.js.map