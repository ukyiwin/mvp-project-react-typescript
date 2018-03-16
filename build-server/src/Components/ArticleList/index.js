"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArticleItem_1 = require("Components/ArticleItem");
const react_apollo_1 = require("react-apollo");
const react_infinite_scroller_1 = require("react-infinite-scroller");
const EmptyStates_1 = require("Components/EmptyStates");
const Query_1 = require("Graphql/Query");
const react_content_loader_1 = require("react-content-loader");
// const MyFacebookLoader = () => <Facebook />;
const MyLoader = () => (React.createElement(react_content_loader_1.default, { height: 200, width: 400, speed: 2, primaryColor: '#f3f3f3', secondaryColor: '#ecebeb' },
    React.createElement("rect", { x: "70", y: "15", rx: "4", ry: "4", width: "117", height: "6.4" }),
    React.createElement("rect", { x: "70", y: "35", rx: "3", ry: "3", width: "85", height: "6.4" }),
    React.createElement("rect", { x: "1", y: "136", rx: "3", ry: "3", width: "350", height: "6.4" }),
    React.createElement("rect", { x: "-1", y: "118", rx: "3", ry: "3", width: "380", height: "6.4" }),
    React.createElement("rect", { x: "0", y: "150", rx: "3", ry: "3", width: "201", height: "6.4" }),
    React.createElement("circle", { cx: "30", cy: "30", r: "30" }),
    React.createElement("rect", { x: "-0.5", y: "70.27", rx: "0", ry: "0", width: "348", height: "16" }),
    React.createElement("rect", { x: "1.5", y: "89.27", rx: "0", ry: "0", width: "217", height: "12" }),
    React.createElement("rect", { x: "2.5", y: "175", rx: "0", ry: "0", width: "61", height: "18" }),
    React.createElement("rect", { x: "72.5", y: "175", rx: "0", ry: "0", width: "55", height: "18" }),
    React.createElement("rect", { x: "136.5", y: "175.27", rx: "0", ry: "0", width: "56", height: "18" }),
    React.createElement("rect", { x: "358.5", y: "177.27", rx: "0", ry: "0", width: "25", height: "16" }),
    React.createElement("rect", { x: "325.5", y: "177.27", rx: "0", ry: "0", width: "23", height: "16" })));
const ArticleList = react_apollo_1.graphql(Query_1.ARTICLES, {
    props: ({ data }) => (Object.assign({}, data))
});
exports.default = ArticleList(({ loading, articles, error }) => {
    // tslint:disable-next-line:jsx-wrap-multiline
    if (loading) {
        return React.createElement(EmptyStates_1.LoadingComponent, null);
    }
    if (error) {
        return React.createElement(EmptyStates_1.ErrorComponent, null);
    }
    return (React.createElement(react_infinite_scroller_1.default, { pageStart: 0, hasMore: true || false, loader: React.createElement("div", { className: "uk-padding-small", style: { backgroundColor: '#fff' } },
            React.createElement(MyLoader, null)) }, articles.map((article, i) => React.createElement("div", { key: article.id },
        React.createElement(ArticleItem_1.default, { article: article })))));
});
//# sourceMappingURL=index.js.map