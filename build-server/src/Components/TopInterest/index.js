"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const InterestItemSlim_1 = require("Components/InterestItemSlim");
const react_apollo_1 = require("react-apollo");
const EmptyStates_1 = require("Components/EmptyStates");
const Query_1 = require("Graphql/Query");
const TopInterest = react_apollo_1.graphql(Query_1.ALL_INTEREST, {
    props: ({ data }) => (Object.assign({}, data))
});
exports.default = TopInterest(({ loading, allInterest, error }) => {
    if (loading) {
        return React.createElement(EmptyStates_1.LoadingComponent, null);
    }
    if (error) {
        return React.createElement(EmptyStates_1.ErrorComponent, null);
    }
    return (React.createElement("div", { className: "tags-wrapper undefined" }, allInterest.map((interest, i) => React.createElement(InterestItemSlim_1.default, { key: interest.id, url: interest.avatar, name: interest.name }))));
});
//# sourceMappingURL=index.js.map