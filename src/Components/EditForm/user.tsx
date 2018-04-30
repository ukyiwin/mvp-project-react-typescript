import * as React from 'react';
import { withRouter } from 'react-router';
import slugg from 'slugg';
import { withApollo, Mutation } from 'react-apollo';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Link from 'Components/Link';
import { throttle } from 'Utils/utils';
import { Button } from '../Buttons';
import * as axios from 'axios';
import { b64toBlob, urltoFile } from 'Utils/helper';
import Icon from 'Components/Icons';
// import GithubProfile from '../../components/githubProfile';
// import { GithubSigninButton } from '../../components/loginButtonSet/github';
import {
  Input,
  TextArea,
  Error,
  PhotoInput,
  Select,
  CoverInput,
} from '../FormElements';
import { StyledLabel } from '../FormElements/style';
import {
  StyledCard,
  Form,
  FormTitle,
  Actions,
  ImageInputWrapper,
  Location,
  Loading,
  GithubSignin,
} from './style';
import { Spinner } from 'Components/Globals';
import {
  PRO_USER_MAX_IMAGE_SIZE_STRING,
  PRO_USER_MAX_IMAGE_SIZE_BYTES,
  FREE_USER_MAX_IMAGE_SIZE_BYTES,
  FREE_USER_MAX_IMAGE_SIZE_STRING,
} from 'Utils/images';
import { Notice } from 'Components/ListItems/style';
import User from 'Components/Profile/user';
import { User as UserType } from 'CustomTypings/schema';
import { ME } from 'Graphql/Query';
import { UPDATE_USER_PROFILE } from 'Graphql/Mutation';
import { UPLOAD_COVER, UPLOAD_PHOTO } from 'Graphql/Mutation/user';

interface State {
  website?: string;
  firstname: string;
  lastname: string;
  username: string;
  bio?: string;
  image: string;
  coverPhoto: string;
  file?: object;
  coverFile?: object;
  bioError: boolean;
  nameError: boolean;
  createError: boolean;
  isLoading: boolean;
  photoSizeError: string;
  proGifError: boolean;
  usernameError: string;
  isUsernameSearching: boolean;
}

interface Props {
  user: UserType;
  client: any;
  editUser: any;
  history: any;
}

class UserWithData extends React.Component<Props, any> {
  constructor(props) {
    super(props);

    const user = this.props.user;

    this.state = {
      website: user.firstname ? user.firstname : '',
      firstname: user.firstname ? user.firstname : '',
      department: user.department ? user.department.name : '',
      institution: user.institution ? user.institution.title : '',
      type: user.type ? user.type : '',
      gender: user.gender ? user.gender : '',
      email: user.email ? user.email : '',
      lastname: user.lastname ? user.lastname : '',
      username: user.username ? user.username : '',
      bio: user.bio ? user.bio : '',
      image: user.avatar,
      coverPhoto: user.headerImage,
      file: null,
      coverFile: null,
      bioError: false,
      firstnameError: false,
      lastnameError: false,
      createError: false,
      isLoading: false,
      photoSizeError: '',
      proGifError: false,
      usernameError: '',
      isUsernameSearching: false,
    };

    // this.search = throttle(this.search, 500);
  }

  changeName = (e) => {
    const firstname = e.target.value;
    if (firstname.length > 50) {
      this.setState({
        firstname,
        firstnameError: true,
      });

      return;
    }
    this.setState({
      firstname,
      firstnameError: false,
    });
  }

  changeLastName = (e) => {
    const lastname = e.target.value;
    if (lastname.length > 50) {
      this.setState({
        lastname,
        lastnameError: true,
      });

      return;
    }
    this.setState({
      lastname,
      lastnameError: false,
    });
  }

  changeDescription = (e) => {
    const bio = e.target.value;
    if (bio.length >= 140) {
      this.setState({
        bioError: true,
      });
      return;
    }

    this.setState({
      bio,
      bioError: false,
    });
  }

  changeWebsite = (e) => {
    const website = e.target.value;
    this.setState({
      website,
    });
  }

  changeUserType = (e) => {
    const type = e.target.value;
    this.setState({
      type,
    });
  }

  setProfilePhoto = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    this.setState({
      isLoading: true,
    });

    if (!file) { return; }

    if (file && file.type === 'image/gif' && !this.props.currentUser.isPro) {
      return this.setState({
        isLoading: false,
        proGifError: true,
      });
    }

    reader.onloadend = () => {
      // track('user', 'profile photo uploaded', null);

      this.setState({
        file,
        image: reader.result,
        photoSizeError: '',
        proGifError: false,
        isLoading: false,
      });
    };

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.uploadProfile(file, reader.result);
    };

    reader.onerror = (error) => {
      // console.log('Error: ', error);
    };
  }

  /*
  setCoverPhoto = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (!file) { return; }

    this.setState({
      isLoading: true,
    });

    if (
      file &&
      file.size > PRO_USER_MAX_IMAGE_SIZE_BYTES
    ) {
      return this.setState({
        photoSizeError: `Try uploading a file less than ${PRO_USER_MAX_IMAGE_SIZE_STRING}.`,
        isLoading: false,
      });
    }

    if (file && file.type === 'image/gif' && !this.props.user) {
      return this.setState({
        isLoading: false,
        proGifError: true,
      });
    }

    reader.onloadend = () => {

      this.setState({
        coverFile: file,
        coverPhoto: reader.result,
        photoSizeError: '',
        proGifError: false,
        isLoading: false,
      });
    };

    reader.readAsDataURL(file);
  }
  */

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
        url: 'https://uniserver.herokuapp.com/upload',
        data,
        headers: {
          'content-type': 'multipart/form-data'
      }
      }).then((response) => {
        this.setState({ coverPhoto: response.data.url, isLoading: false, });
        this.props.client({
          mutation: UPLOAD_COVER,
          variables: {
            headerImage: this.state.coverPhoto
          }
        }).then((res) => {
          // fdf
        }).catch((err) => {
          // dsdfd
        });
      });
    });
  }

  uploadProfile = (file: File, dataBlob) => {
    
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
        url: 'https://uniserver.herokuapp.com/upload',
        data,
        headers: {
          'content-type': 'multipart/form-data'
      }
      }).then((response) => {
        this.setState({ image: response.data.url, isLoading: false, });
        this.props.client({
          mutation: UPLOAD_PHOTO,
          variables: {
            avatar: this.state.image
          }
        }).then((res) => {
          // fdf
        }).catch((err) => {
          // dsdfd
        });
      });
    });
  }

  setCoverPhoto = (e) => {
    
    const reader = new FileReader();
    const file = e.target.files[0];

    if (!file) { return; }

    this.setState({
      isLoading: true,
    });

    if (file && file.type === 'image/gif') {
      return this.setState({
        isLoading: false,
        proGifError: true,
      });
    }

    reader.onloadend = () => {
      this.setState({
        coverFile: file,
        coverPhoto: reader.result,
        photoSizeError: '',
        proGifError: false
      });
    };

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.uploadFile(file, reader.result);
    };

    reader.onerror = (error) => {
      // console.log('Error: ', error);
    };
  }
  
  save = (e) => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      bio,
      website,
      file,
      coverFile,
      photoSizeError,
      username,
      usernameError,
    } = this.state;

    const input = {
      firstname,
      lastname,
      bio,
      website,
      file,
      coverFile,
      username,
    };

    if (photoSizeError || usernameError) {
      return;
    }

    this.setState({
      isLoading: true,
    });

    this.props
      .editUser(input)
      .then(({ data: { editUser } }: { data: { editUser: EditUserType } }) => {
        const user = editUser;

        this.setState({
          isLoading: false,
        });

        // the mutation returns a user object. if it exists,
        if (user !== undefined) {
          // this.props.dispatch(addToastWithTimeout('success', 'Changes saved!'));
          this.setState({
            file: null,
          });
          window.location.href = `/n/${user.username}`;
        }

        return;
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
        });

        // this.props.dispatch(addToastWithTimeout('error', err.message));
      });
  }

  changeUsername = (e) => {
    let username = e.target.value.trim();
    username = slugg(username);

    this.setState({
      usernameError: '',
      username,
    });

    if (username.length > 20) {
      return this.setState({
        usernameError: 'Usernames can be up to 20 characters',
      });
    } else if (username.length === 0) {
      this.setState({
        usernameError: 'Be sure to set a username so that people can find you!',
      });
    } else {
      this.setState({
        usernameError: '',
      });
    }

    // this.search(username);
  }

  search = (username: string) => {
    if (username.length > 20) {
      return this.setState({
        usernameError: 'Usernames can be up to 20 characters',
        isUsernameSearching: false,
      });
    } else if (username.length === 0) {
      return this.setState({
        usernameError: 'Be sure to set a username so that people can find you!',
        isUsernameSearching: false,
      });
    } else {
      this.setState({
        usernameError: '',
        isUsernameSearching: true,
      });

      // check the db to see if this channel slug exists
      this.props.client
        .query({
          query: ME
        })
        .then((res) => {
          const user = res.data.me;
          if (this.state.username.length > 20) {
            return this.setState({
              usernameError: 'Usernames can be up to 20 characters',
              isUsernameSearching: false,
            });
          } else if (user && user.id) {
            return this.setState({
              usernameError: 'This username is already taken, sorry!',
              isUsernameSearching: false,
            });
          } else {
            return this.setState({
              usernameError: '',
              isUsernameSearching: false,
            });
          }
        })
        .catch((err) => {
          // this.props.dispatch(addToastWithTimeout('error', err.message))
        });
    }
  }

  render() {
    const { user } = this.props;
    const {
      firstname,
      lastname,
      username,
      firstnameError,
      type,
      email,
      bio,
      website,
      image,
      coverPhoto,
      bioError,
      createError,
      nameError,
      isLoading,
      photoSizeError,
      proGifError,
      usernameError,
      lastnameError,
      isUsernameSearching,
    } = this.state;

    return (
      <StyledCard>
        <Location>
          <Icon glyph="view-back" size={16} />
          <Link to={`/n/${username}`}>Return to Profile</Link>
        </Location>
        <FormTitle>Profile Settings</FormTitle>
        <Mutation mutation={UPDATE_USER_PROFILE}>
        {(updateUserProfile, {loading, error}) => (
          <Form>
            <ImageInputWrapper>
              <CoverInput
                onChange={this.setCoverPhoto}
                defaultValue={coverPhoto}
                preview={true}
                allowGif
              />
              <PhotoInput
                onChange={this.setProfilePhoto}
                defaultValue={image}
                user
                allowGif
              />
            </ImageInputWrapper>

            {photoSizeError && (
              <Notice style={{ marginTop: '32px' }}>{photoSizeError}</Notice>
            )}

            <Input
              type="text"
              defaultValue={firstname}
              onChange={this.changeName}
              placeholder={'What\'s your firstname?'}
            >
              Firstname
            </Input>

            <Input
              type="text"
              defaultValue={lastname}
              onChange={this.changeLastName}
              placeholder={'What\'s your lastname?'}
            >
              Lastname
            </Input>

            {nameError && <Error>Names can be up to 50 characters.</Error>}

            <Input
              type={'text'}
              defaultValue={username}
              onChange={this.changeUsername}
            >
              Username
              {isUsernameSearching && (
                <Loading>
                  <Spinner size={16} color={'brand.default'} />
                </Loading>
              )}
            </Input>

            {usernameError && (
              <Notice style={{ marginTop: '16px' }}>{usernameError}</Notice>
            )}

            <TextArea
              defaultValue={bio}
              onChange={this.changeDescription}
              placeholder={'Introduce yourself to the unizonners...'}
            >
              Bio
            </TextArea>

            {bioError && <Error>Bios can be up to 140 characters.</Error>}

            <Select defaultValue={type} onChange={this.changeWebsite} type="select">
              <option key={''}>Who are you?</option>
              <option key={'Student'}>Student</option>
              <option key={'Lecturer'}>Lecturer</option>
            </Select>
            <Input
              type="text"
              defaultValue={email}
              disabled={true}
              placeholder={'Your primary email address?'}
            >
              Primary email
            </Input>
            <Actions>
              <Button
                disabled={
                  !firstname || firstnameError ||
                  !username || usernameError ||
                  !lastname || lastnameError ||
                  bioError
                }
                loading={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  const {
                    firstname,
                    lastname,
                    bio,
                    file,
                    coverFile,
                    type,
                    username,
                  } = this.state;
                  this.setState({ isLoading: true });
                  updateUserProfile({
                    variables: {
                      firstname,
                      lastname,
                      bio,
                      username,
                      role: type
                    }
                  }).then((res) => {
                    this.setState({ isLoading: false });
                    this.props.history.redirect(`/n/${user.username}`);
                  }).catch((err) => {
                    this.setState({ isLoading: false });
                  });
                }}
              >
                Save
              </Button>
            </Actions>

            {createError && (
              <Error>Please fix any errors above to save your profile.</Error>
            )}
          </Form>
        )}
        </Mutation>
      </StyledCard>
    );
  }
}

const UserSettings = compose(
  withRouter,
  withApollo,
)(UserWithData);
export default UserSettings;
