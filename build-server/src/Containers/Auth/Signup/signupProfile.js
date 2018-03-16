"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_apollo_1 = require("react-apollo");
const UIkit = require("uikit");
const Query_1 = require("Graphql/Query");
const helpers_1 = require("Utils/helpers");
const Mutation_1 = require("Graphql/Mutation");
require("./style.css");
class SignupProfile extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            country: '',
            photo: '',
            url: '',
            countryList: [],
            institution: '',
            institutionList: [],
            department: '',
            departmentList: [],
            everFocusedInstitution: false,
            everFocusedCountry: false,
            inFocus: '',
            loading: false
        };
        this.handleInstChange = (evt) => {
            this.setState({ institution: evt.target.value });
            this.getDepartment(evt.target.value);
        };
        this.handleDeptChange = (evt) => {
            this.setState({ department: evt.target.value });
        };
        this.handleCountryChange = (evt) => {
            this.setState({ country: evt.target.value });
            this.getInstitution(evt.target.value);
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            this.props.addProfile({
                variables: {
                    photoId: this.state.photo,
                    countryId: this.state.country,
                    institutionId: this.state.institution,
                    departmentId: this.state.department,
                }
            }).then(result => {
                this.props.history.replace('/add/interest');
            }).catch(err => {
                // Err catch block
            });
        };
    }
    canBeSubmitted() {
        const errors = helpers_1.validateProfile(this.state.photo, this.state.country, this.state.institution, this.state.department);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }
    getCountry() {
        this.props.client.query({
            query: Query_1.ALL_COUNTRIES,
        })
            .then(result => {
            // tslint:disable-next-line:no-console
            console.log(result.data.getCountry);
            this.setState({ countryList: result.data.getCountry });
        })
            .catch(err => {
            // jkjk
        });
    }
    getInstitution(value) {
        this.props.client.query({
            query: Query_1.ALL_INSTITUTION,
            variables: {
                idCountry: value
            }
        })
            .then(result => {
            // tslint:disable-next-line:no-console
            console.log(result);
            this.setState({ institutionList: result.data.getInstitution });
        })
            .catch(err => {
            // jkjk
        });
    }
    getDepartment(value) {
        this.props.client.query({
            query: Query_1.ALL_DEPARTMENTS,
            variables: {
                idInstitutions: value
            }
        })
            .then(result => {
            this.setState({ departmentList: result.data.getDepartment });
        })
            .catch(err => {
            // jkjk
        });
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email: email });
        }
        this.getCountry();
    }
    componentDidMount() {
        let bar = document.getElementById('js-progressbar');
        UIkit.upload('.js-upload', {
            url: 'https://uniserver.now.sh/upload',
            multiple: false,
            name: 'data',
            dataType: 'json',
            beforeSend: function () {
                // fd
            },
            beforeAll: function () {
                // fd
            },
            load: function () {
                // fd
            },
            error: function () {
                // tslint:disable-next-line:no-console
                console.log('error', arguments);
            },
            complete: function () {
                // tslint:disable-next-line:no-console
                console.log('complete', arguments);
            },
            // tslint:disable-next-line:typedef
            loadStart: function (e) {
                // tslint:disable-next-line:no-console
                console.log('loadStart', arguments);
                if (bar) {
                    bar.removeAttribute('hidden');
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            // tslint:disable-next-line:typedef
            progress: function (e) {
                // tslint:disable-next-line:no-console
                console.log('progress', arguments);
                if (bar) {
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            // tslint:disable-next-line:typedef
            loadEnd: function (e) {
                // tslint:disable-next-line:no-console
                console.log('loadEnd', arguments);
                if (bar) {
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            completeAll: (result, response) => {
                // tslint:disable-next-line:no-console
                console.log('completeAll', result.response);
                let data = JSON.parse(result.response);
                this.setState({ photo: data.id, url: data.url });
                setTimeout(function () {
                    if (bar) {
                        bar.setAttribute('hidden', 'hidden');
                    }
                }, 1000);
            }
        });
    }
    render() {
        const errors = helpers_1.validateProfile(this.state.photo, this.state.country, this.state.institution, this.state.department);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (React.createElement("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { height: '100vh', backgroundColor: '#ffffff' } },
            React.createElement("div", { className: "uk-width-2-5 uk-visible@m sideBg uk-flex uk-flex-middle ", id: "sideBg" },
                React.createElement("div", { className: "uk-position-relative uk-visible-toggle uk-light", "data-uk-slideshow": "animation: scale" },
                    React.createElement("ul", { className: "uk-slideshow-items" },
                        React.createElement("li", null,
                            React.createElement("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "", "uk-cover": true })),
                        React.createElement("li", null,
                            React.createElement("img", { src: "https://getuikit.com/docs/images/dark.jpg", alt: "", "data-uk-cover": true })),
                        React.createElement("li", null,
                            React.createElement("img", { src: "https://getuikit.com/docs/images/light.jpg", alt: "", "data-uk-cover": true }))),
                    React.createElement("a", { className: "uk-position-center-left uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-previous": true, "data-uk-slideshow-item": "previous" }),
                    React.createElement("a", { className: "uk-position-center-right uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-next": true, "data-uk-slideshow-item": "next" }))),
            React.createElement("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex \r\n          uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                React.createElement("form", { className: "uk-form-horizontal uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("h3", { className: "uk-heading-primary uk-align-center" }, "You're Almost done ")),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("div", { className: "js-upload uk-placeholder uk-text-center" },
                            React.createElement("span", { "uk-icon": "icon: cloud-upload" }),
                            React.createElement("span", { className: "uk-text-middle" }, "Attach photo by dropping it here or "),
                            React.createElement("div", { "uk-form-custom": "" },
                                React.createElement("input", { type: "file", multiple: false }),
                                React.createElement("span", { className: "uk-link" }, "selecting one"))),
                        React.createElement("img", { className: "uk-border-circle", src: this.state.url, width: "90", height: "90" }),
                        React.createElement("progress", { id: "js-progressbar", className: "uk-progress", value: "0", max: "100", hidden: true })),
                    this.state.department,
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("label", { className: "uk-form-label", htmlFor: "firstname" }, "Country"),
                        React.createElement("div", { className: "uk-form-controls" },
                            React.createElement("select", { className: "uk-select", value: this.state.country, required: true, onChange: this.handleCountryChange },
                                React.createElement("option", { value: "" }, "Select country"),
                                this.state.countryList.map((country, i) => 
                                // tslint:disable-next-line:jsx-key
                                React.createElement("option", { key: i, value: country.id }, country.name))))),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("label", { className: "uk-form-label", htmlFor: "lastname" }, "Institution"),
                        React.createElement("div", { className: "uk-form-controls" },
                            React.createElement("select", { className: "uk-select", value: this.state.institution, required: true, onChange: this.handleInstChange },
                                React.createElement("option", { value: "" }, "Select institution"),
                                this.state.institutionList.map((institution, i) => 
                                // tslint:disable-next-line:jsx-key
                                React.createElement("option", { key: i, value: institution.id }, institution.title))))),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("label", { className: "uk-form-label", htmlFor: "email" }, "Course"),
                        React.createElement("div", { className: "uk-form-controls" },
                            React.createElement("select", { className: "uk-select", value: this.state.department, required: true, onChange: this.handleDeptChange },
                                React.createElement("option", { value: "" }, "Select course"),
                                this.state.departmentList.map((course, i) => 
                                // tslint:disable-next-line:jsx-key
                                React.createElement("option", { key: i, value: course.id }, course.name))))),
                    React.createElement("div", { className: "uk-margin" }, this.state.loading ?
                        React.createElement("div", { "data-uk-spinner": "ratio: 1" })
                        :
                            React.createElement("button", { className: `uk-button uk-button-primary uk-width-1-1 ${isDisabled ? 'disabled' : 'disabled'}`, disabled: isDisabled, type: "submit" }, "SAVE & NEXT")),
                    React.createElement("hr", { className: "uk-divider-icon" })))));
    }
}
exports.default = react_router_dom_1.withRouter(react_apollo_1.compose(react_apollo_1.withApollo, react_apollo_1.graphql(Query_1.ALL_COUNTRIES, { name: 'country' }), react_apollo_1.graphql(Mutation_1.ADD_PROFILE, { name: 'addProfile' }), react_apollo_1.graphql(Mutation_1.ADD_PROFILE, {
    name: 'addProfile'
}))(SignupProfile));
//# sourceMappingURL=signupProfile.js.map