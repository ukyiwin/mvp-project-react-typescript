"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_async_component_1 = require("react-async-component");
const react_helmet_1 = require("react-helmet");
const NotFound_1 = require("Containers/NotFound");
const MainLayout_1 = require("Components/Layouts/MainLayout");
const jwtHelper_1 = require("Utils/jwtHelper");
const constants_1 = require("../../constants");
const Header_1 = require("Components/Layouts/Header");
const Loading_1 = require("Components/Loading");
const SideBar_1 = require("Components/Layouts/SideBar");
const ComposeArticle_1 = require("Containers/ComposeArticle");
const Query_1 = require("Graphql/Query");
const react_apollo_1 = require("react-apollo");
const Profile_1 = require("Containers/Profile");
require("../../Theme/application.css");
require("./style.css");
// const customHistory = createBrowserHistory();
const Login = react_async_component_1.asyncComponent({
    resolve: () => new Promise(resolve => require.ensure([], (require) => {
        resolve(require('Containers/Auth/Login'));
    }, 'Login')),
    LoadingComponent: () => React.createElement(Loading_1.default, null),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message) // Optional
});
const Message = react_async_component_1.asyncComponent({
    resolve: () => System.import('Containers/Message'),
    LoadingComponent: () => React.createElement(Loading_1.default, null),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message) // Optional
});
const Interest = react_async_component_1.asyncComponent({
    resolve: () => System.import('Containers/Auth/Signup/interest'),
    LoadingComponent: () => React.createElement(Loading_1.default, null),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message) // Optional
});
const SignupProfile = react_async_component_1.asyncComponent({
    resolve: () => System.import('Containers/Auth/Signup/signupProfile'),
    LoadingComponent: () => React.createElement(Loading_1.default, null),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message) // Optional
});
const FinishSignup = react_async_component_1.asyncComponent({
    resolve: () => System.import('Containers/Auth/Signup/finishSignup'),
    LoadingComponent: () => React.createElement(Loading_1.default, null),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message) // Optional
});
const Signup = react_async_component_1.asyncComponent({
    resolve: () => System.import('Containers/Auth/Signup'),
    LoadingComponent: () => React.createElement(Loading_1.default, null),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message) // Optional
});
const Forum = react_async_component_1.asyncComponent({
    resolve: () => System.import('Containers/Forum'),
    LoadingComponent: () => React.createElement(Loading_1.default, null),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message) // Optional
});
const Maps = react_async_component_1.asyncComponent({
    resolve: () => System.import('Containers/Maps'),
    LoadingComponent: () => React.createElement(Loading_1.default, null),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message) // Optional
});
const PublicHome = react_async_component_1.asyncComponent({
    resolve: () => new Promise(resolve => 
    // Webpack's code splitting API w/naming
    require.ensure([], (require) => {
        resolve(require('Containers/HomePublic'));
    }, 'HomePublic')),
    LoadingComponent: () => React.createElement(Loading_1.default, null),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message) // Optional
});
const Home = react_async_component_1.asyncComponent({
    resolve: () => new Promise(resolve => 
    // Webpack's code splitting API w/naming
    require.ensure([], (require) => {
        resolve(require('Containers/Home'));
    }, 'Home')),
    LoadingComponent: () => React.createElement(Loading_1.default, null),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message) // Optional
});
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isAuthenticated: false,
            token: '',
            expireToken: false,
            avatar: '',
            me: {
                id: '',
                firstname: '',
                lastname: '',
                email: ''
            }
        };
        this.refreshToken = (token) => {
            this.setState({
                token,
            });
            if (token !== '' && token !== undefined) {
                this.setState({
                    isAuthenticated: true,
                });
                // this.loadMe();
            }
        };
        this._logout = () => {
            localStorage.removeItem(constants_1.AUTH_TOKEN);
            this.setState({ isAuthenticated: false });
            this.setState({ token: '' });
            this.setState({ expireToken: false });
        };
    }
    componentWillMount() {
        const token = localStorage.getItem(constants_1.AUTH_TOKEN);
        if (token !== null && token !== undefined) {
            const expired = jwtHelper_1.isTokenExpired(token);
            if (!expired) {
                this.setState({ isAuthenticated: true });
                this.setState({ token: token });
                this.setState({ expireToken: expired });
                this.loadMe();
            }
            else {
                localStorage.removeItem(constants_1.AUTH_TOKEN);
                this.setState({ isAuthenticated: false });
                this.setState({ token: '' });
                this.setState({ expireToken: false });
            }
        }
    }
    componentDidMount() {
        // this.props.
        // tslint:disable-next-line:no-console
        console.log(this.props.me);
    }
    loadMe() {
        this.props.client.query({
            query: Query_1.ME
        }).then(({ data }) => {
            // tslint:disable-next-line:no-console
            console.log(data.me);
            this.setState({ me: data.me });
            if (data.me.completedProfile === 1) {
                this.props.history.replace('/add/profile');
            }
            else if (data.me.completedProfile === 2) {
                this.props.history.replace('/add/interest');
            }
            this.setState({ avatar: data.me.avata.url });
            // tslint:disable-next-line:no-console
            console.log(this.state.avatar);
        }).catch(error => {
            // localStorage.removeItem(AUTH_TOKEN);
            if (error) {
                // tslint:disable-next-line:no-console
                console.log('grooom');
                // this.setState({isAuthenticated: false});
                this.setState({ token: '' });
                this.setState({ expireToken: false });
            }
        });
    }
    render() {
        const { isAuthenticated } = this.state;
        // const userAuthed = token ? true : false;
        // tslint:disable-next-line:no-console
        console.log(isAuthenticated);
        return (React.createElement("div", { className: "uk-offcanvas-content bg-muted", style: { backgroundColor: '#e4e6eb' } },
            React.createElement(react_helmet_1.Helmet, null,
                React.createElement("title", null, "Unizonn"),
                React.createElement("meta", { name: "an inclusive community", content: "Unizonn community" })),
            React.createElement(Header_1.PrivateHeader, { avatar: this.state.avatar, isAuthenticated: isAuthenticated, logout: this._logout }),
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: () => (isAuthenticated ? (React.createElement(MainLayout_1.PrivateLayout, { component: Home, isAuthenticated: isAuthenticated }))
                        : (React.createElement(MainLayout_1.PublicLayout, { component: PublicHome, isAuthenticated: isAuthenticated }))) }),
                React.createElement(MainLayout_1.PrivateLayout, { component: Home, path: "/home", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.PublicLayout, { component: Login, refreshToken: this.refreshToken, path: "/login", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.PublicLayout, { component: Login, exact: true, refreshToken: this.refreshToken, path: "/login/:email", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.PublicLayout, { component: Signup, refreshToken: this.refreshToken, path: "/signup", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.PublicLayout, { component: Signup, exact: true, refreshToken: this.refreshToken, path: "/signup/:email", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.EmptyLayout, { component: FinishSignup, path: "/signup/complete", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.EmptyLayout, { exact: true, component: SignupProfile, path: "/add/profile", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.EmptyLayout, { component: Interest, path: "/add/interest", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.EmptyLayout, { component: Maps, path: "/library", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.EmptyLayout, { component: Message, path: "/message", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.EmptyLayout, { component: Forum, path: "/Forum", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.EmptyLayout, { component: ComposeArticle_1.default, path: "/write", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.ProfileLayout, { component: Profile_1.default, path: "/profile", isAuthenticated: isAuthenticated }),
                React.createElement(MainLayout_1.ProfileLayout, { component: Profile_1.default, path: "/profile/:id", isAuthenticated: isAuthenticated }),
                React.createElement(react_router_dom_1.Route, { component: NotFound_1.default, path: "*" }),
                React.createElement(MainLayout_1.PrivateLayout, { path: "/logout", isAuthenticated: isAuthenticated, render: () => this._logout() })),
            React.createElement(SideBar_1.default, null)));
    }
}
exports.default = react_router_dom_1.withRouter(react_apollo_1.compose(react_apollo_1.withApollo, react_apollo_1.graphql(Query_1.ME))(App));
//# sourceMappingURL=index.js.map