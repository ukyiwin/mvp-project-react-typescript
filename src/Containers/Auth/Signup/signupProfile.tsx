import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, withApollo, graphql } from 'react-apollo';
import * as UIkit from 'uikit';
import { Country, Institutions, Department, User } from 'CustomTypings/schema';
import { ALL_COUNTRIES, ALL_DEPARTMENTS, ALL_INSTITUTION } from 'Graphql/Query';
import { validateProfile } from 'Utils/helpers';
import AvatarImageCropper from 'react-avatar-image-cropper';
import { ADD_PROFILE } from 'Graphql/Mutation';
import axios from 'axios';

import './style.css';
import { b64toBlob, urltoFile } from 'Utils/helper';

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
        headerImage: ''
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
          console.log(err);
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
    /*<div className="js-upload uk-placeholder uk-text-center">
                      <span uk-icon="icon: cloud-upload" />
                      <span className="uk-text-middle">Attach photo by dropping it here or </span>
                      <div uk-form-custom="">
                          <input type="file" multiple={false} />
                          <span className="uk-link">selecting one</span>
                      </div>
                  </div>*/

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

  uploadFile = (file: File, dataBlob) => {
    
    const block = dataBlob.split(';');
    const contentType = block[0].split(':')[1];
    const realData = block[1].split(',')[1];

    // Convert it to a blob to upload
    const blob = b64toBlob(realData, contentType);
    const data = new FormData();
    
    urltoFile(dataBlob, file.name, contentType)
    .then((file) => {
      data.append('data', file);
      axios({
        method: 'post',
        url: 'http://localhost:4000/upload',
        data,
        headers: {
          'content-type': 'multipart/form-data'
      }
      }).then((response) => {
        this.setState({ photo: response.data.id, url: response.data.url });
      });
    });
  }

  apply = (file: File) => {
    const reader = new FileReader();
    
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.setState({headerImage: reader.result});
      this.uploadFile(file, reader.result);
    };
    reader.onerror = (error) => {
      // console.log('Error: ', error);
    };
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
              className="uk-flex uk-flex-center uk-width-1-1"
              style={{ height: '80vh', backgroundColor: '#ffffff', width: '100vw' }}
            >
              <form
                className="uk-form-horizontal uk-width-1-2@m uk-margin-large uk-padding-large uk-padding-remove-vertical"
                onSubmit={this.handleSubmit}
              >
                <div className="uk-margin">
                  <h5 
                    className="uk-heading-primary  uk-padding-large uk-padding-remove-horizontal uk-text-center" 
                    style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 5}}
                  >
                    You're Almost done 
                  </h5>
                </div>
                <div className="uk-margin uk-flex uk-flex-center">
                  <div 
                    className="uk-inline"
                    style={{backgroundColor: '#e1eaf1', width: 250, height: 250,
                     border: '0px solid black', borderRadius: 200 }}
                  >
                      <img src={this.state.headerImage}
                       style={{backgroundColor: '#e1eaf1', width: 250, height: 250,
                       border: '1px solid black', borderRadius: 200 }}
                       />
                      <AvatarImageCropper 
                        apply={this.apply}  
                        rootStyle={{ width: 250, height: 250, borderRadius: 200 }}
                        className=" uk-position-center" 
                        text="Add header image" 
                      />
                  </div>
                  <progress id="js-progressbar" className="uk-progress" value="0" max="100" hidden={true} />
                </div>
                <div className="uk-margin">
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
                <div className="uk-margin">
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
                <div className="uk-margin">
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
              </form>
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
