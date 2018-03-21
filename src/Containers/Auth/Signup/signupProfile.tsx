import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, withApollo, graphql } from 'react-apollo';
import * as UIkit from 'uikit';
import { Country, Institutions, Department, User } from 'CustomTypings/schema';
import { ALL_COUNTRIES, ALL_DEPARTMENTS, ALL_INSTITUTION } from 'Graphql/Query';
import { validateProfile } from 'Utils/helpers';
import { ADD_PROFILE } from 'Graphql/Mutation';

import './style.css';

interface Props {
    country: Country;
    institution: Institutions;
    department: Department;
    // tslint:disable-next-line:no-any
    refreshToken?: any;
    // tslint:disable-next-line:no-any
    client?: any;
    // tslint:disable-next-line:no-any
    addProfile?: any;
}

class SignupProfile extends React.Component<RouteComponentProps & Props> {
    state = {
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
        loading: false,
    };

    handleInstChange = (evt) => {
        this.setState({ institution: evt.target.value });
        this.getDepartment(evt.target.value);
    }

    handleDeptChange = (evt) => {
        this.setState({ department: evt.target.value });
    }

    handleCountryChange = (evt) => {
        this.setState({ country: evt.target.value });
        this.getInstitution(evt.target.value);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        if (!this.canBeSubmitted()) {
            return;
        }
        this.setState({ loading: true });
        this.props
            .addProfile({
                variables: {
                    photoId: this.state.photo,
                    countryId: this.state.country,
                    institutionId: this.state.institution,
                    departmentId: this.state.department,
                },
            })
            .then((result) => {
                this.props.history.replace('/add/interest');
            })
            .catch((err) => {
                // Err catch block
            });
    }

    canBeSubmitted() {
        const errors = validateProfile(
            this.state.photo,
            this.state.country,
            this.state.institution,
            this.state.department,
        );
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }

    getCountry() {
        this.props.client
            .query({
                query: ALL_COUNTRIES,
            })
            .then((result) => {
                // tslint:disable-next-line:no-console
                console.log(result.data.getCountry);
                this.setState({ countryList: result.data.getCountry });
            })
            .catch((err) => {
                // jkjk
            });
    }

    getInstitution(value: string) {
        this.props.client
            .query({
                query: ALL_INSTITUTION,
                variables: {
                    idCountry: value,
                },
            })
            .then((result) => {
                // tslint:disable-next-line:no-console
                console.log(result);
                this.setState({ institutionList: result.data.getInstitution });
            })
            .catch((err) => {
                // jkjk
            });
    }

    getDepartment(value: string) {
        this.props.client
            .query({
                query: ALL_DEPARTMENTS,
                variables: {
                    idInstitutions: value,
                },
            })
            .then((result) => {
                this.setState({ departmentList: result.data.getDepartment });
            })
            .catch((err) => {
                // jkjk
            });
    }

    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
        this.getCountry();
    }

    componentDidMount() {
        const bar = document.getElementById('js-progressbar') as HTMLInputElement;

        UIkit.upload('.js-upload', {
            url: 'https://uniserver.now.sh/upload',
            multiple: false,
            name: 'data',
            dataType: 'json',

            beforeSend() {
                // fd
            },
            beforeAll() {
                // fd
            },
            load() {
                // fd
            },
            error() {
                // tslint:disable-next-line:no-console
                console.log('error', arguments);
            },
            complete() {
                // tslint:disable-next-line:no-console
                console.log('complete', arguments);
            },

            // tslint:disable-next-line:typedef
            loadStart(e) {
                // tslint:disable-next-line:no-console
                console.log('loadStart', arguments);
                if (bar) {
                    bar.removeAttribute('hidden');
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },

            // tslint:disable-next-line:typedef
            progress(e) {
                // tslint:disable-next-line:no-console
                console.log('progress', arguments);
                if (bar) {
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },

            // tslint:disable-next-line:typedef
            loadEnd(e) {
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
                const data = JSON.parse(result.response);
                this.setState({ photo: data.id, url: data.url });

                setTimeout(() => {
                    if (bar) {
                        bar.setAttribute('hidden', 'hidden');
                    }
                },         1000);
            },
        });
    }

    render() {
        const errors = validateProfile(
            this.state.photo,
            this.state.country,
            this.state.institution,
            this.state.department,
        );
        const isDisabled = Object.keys(errors).some((x) => errors[x]);

        return (
            <div
                className="uk-flex uk-flex-stretch"
                // tslint:disable-next-line:jsx-boolean-value
                data-uk-grid
                style={{ height: '100vh', backgroundColor: '#ffffff' }}
            >
                <div className="uk-width-2-5 uk-visible@m sideBg uk-flex uk-flex-middle " id="sideBg">
                    <div
                        className="uk-position-relative uk-visible-toggle uk-light"
                        data-uk-slideshow="animation: scale"
                    >
                        <ul className="uk-slideshow-items">
                            <li>
                                <img
                                    src="https://getuikit.com/docs/images/photo.jpg"
                                    alt=""
                                    // tslint:disable-next-line:jsx-boolean-value
                                    uk-cover
                                />
                            </li>
                            <li>
                                <img
                                    src="https://getuikit.com/docs/images/dark.jpg"
                                    alt=""
                                    // tslint:disable-next-line:jsx-boolean-value
                                    data-uk-cover
                                />
                            </li>
                            <li>
                                <img
                                    src="https://getuikit.com/docs/images/light.jpg"
                                    alt=""
                                    // tslint:disable-next-line:jsx-boolean-value
                                    data-uk-cover
                                />
                            </li>
                        </ul>
                        <a
                            className="uk-position-center-left uk-position-small uk-hidden-hover"
                            href="#"
                            // tslint:disable-next-line:jsx-boolean-value
                            data-uk-slidenav-previous
                            data-uk-slideshow-item="previous"
                        />
                        <a
                            className="uk-position-center-right uk-position-small uk-hidden-hover"
                            href="#"
                            // tslint:disable-next-line:jsx-boolean-value
                            data-uk-slidenav-next
                            data-uk-slideshow-item="next"
                        />
                    </div>
                </div>
                <div
                    className="uk-container uk-width-3-5@m uk-width-1-1@s uk-flex
          uk-flex-stretch uk-flex-middle uk-box-shadow-small"
                >
                    <form
                        className="uk-form-horizontal uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="uk-margin">
                            <h3 className="uk-heading-primary uk-align-center">You're Almost done </h3>
                        </div>
                        <div className="uk-margin">
                            <div className="js-upload uk-placeholder uk-text-center">
                                <span uk-icon="icon: cloud-upload" />
                                <span className="uk-text-middle">Attach photo by dropping it here or </span>
                                <div uk-form-custom="">
                                    <input type="file" multiple={false} />
                                    <span className="uk-link">selecting one</span>
                                </div>
                            </div>
                            <img className="uk-border-circle" src={this.state.url} width="90" height="90" />
                            <progress id="js-progressbar" className="uk-progress" value="0" max="100" hidden={true} />
                        </div>
                        {this.state.department}
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="firstname">
                                Country
                            </label>
                            <div className="uk-form-controls">
                                <select
                                    className="uk-select"
                                    value={this.state.country}
                                    required={true}
                                    onChange={this.handleCountryChange}
                                >
                                    <option value="">Select country</option>
                                    {this.state.countryList.map((country: Country, i) => (
                                        // tslint:disable-next-line:jsx-key
                                        <option key={i} value={country.id}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="lastname">
                                Institution
                            </label>
                            <div className="uk-form-controls">
                                <select
                                    className="uk-select"
                                    value={this.state.institution}
                                    required={true}
                                    onChange={this.handleInstChange}
                                >
                                    <option value="">Select institution</option>
                                    {this.state.institutionList.map((institution: Institutions, i) => (
                                        // tslint:disable-next-line:jsx-key
                                        <option key={i} value={institution.id}>
                                            {institution.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="email">
                                Course
                            </label>
                            <div className="uk-form-controls">
                                <select
                                    className="uk-select"
                                    value={this.state.department}
                                    required={true}
                                    onChange={this.handleDeptChange}
                                >
                                    <option value="">Select course</option>
                                    {this.state.departmentList.map((course: Department, i) => (
                                        // tslint:disable-next-line:jsx-key
                                        <option key={i} value={course.id}>
                                            {course.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="uk-margin">
                            {this.state.loading ? (
                                <div data-uk-spinner="ratio: 1" />
                            ) : (
                                <button
                                    className={`uk-button uk-button-primary uk-width-1-1 ${
                                        isDisabled ? 'disabled' : 'disabled'
                                    }`}
                                    disabled={isDisabled}
                                    type="submit"
                                >
                                    SAVE & NEXT
                                </button>
                            )}
                        </div>
                        <hr className="uk-divider-icon" />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(
    compose(
        withApollo,
        graphql<Country, {}, Props>(ALL_COUNTRIES, { name: 'country' }),
        graphql<User, {}, Props>(ADD_PROFILE, { name: 'addProfile' }),
        graphql<Response, InputProps, Props>(ADD_PROFILE, {
            name: 'addProfile',
        }),
    )(SignupProfile),
);
