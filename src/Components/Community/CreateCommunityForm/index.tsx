import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { StyledButton } from 'Components/MoreViews/style';
import { Button } from 'Components/Buttons';
import { Actions } from 'Components/EditForm/style';
import { Input, Select, TextArea, CoverInput, Error } from 'Components/FormElements';
import { CREATE_COMMUNITY } from 'Graphql/Mutation/Community';
import { Mutation, withApollo } from 'react-apollo';
import * as axios from 'axios';
import { b64toBlob, urltoFile } from 'Utils/helper';
import { COMMUNITY_EXIST } from 'Graphql/Query/Community';

interface Props {
  client?: any;
  history?: any;
}

class CreateCommunityForm extends React.Component<Props> {
  
  state = { 
    title: '',
    titleError: false,
    description: '',
    descriptionError: false,
    photo: '',
    photoError: false,
    isPrivate: false,
    isLoading: false,
    coverPhoto: ''
  };

  constructor(props) {
    super(props);
  }

  changeTitle = (e) => {
    this.setState({ title: e.target.value });
    this.searchCommunity(e.target.value);
  }

  changeDescription = (e) => {
    this.setState({ description: e.target.value });
  }

  changePhoto = (value) => {
    this.setState({photo: value});
  }

  changePrivate = (value) => {
    this.setState({ isPrivate: value });
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
        url: 'https://uniserver.herokuapp.com/upload',
        data,
        headers: {
          'content-type': 'multipart/form-data'
      }
      }).then((response) => {
        this.setState({ photo: response.data.url, isLoading: false, });
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

  searchCommunity = (text) => {
    
    this.props.client.query({
      query: COMMUNITY_EXIST,
      variables: {
        text
      }
    }).then((res) => {
      this.setState({ titleError: res.data.communityExist.exist});
    }).catch((err) => {
      // ghghg
    });
  }

  render() {

    const { 
      title,
      titleError,
      description,
      descriptionError,
      photo,
      photoError,
      isPrivate,
      isLoading,
      coverPhoto
    } = this.state;

    return (
      <Mutation mutation={CREATE_COMMUNITY}>
        {(createCommunity, {loading, error}) => (
          <div className="uk-flex uk-flex-stretch">
            <form className="uk-flex uk-flex-stretch">
              <fieldset className="uk-fieldset">
                <CoverInput
                  preview={true}
                  allowGif
                  onChange={this.setCoverPhoto}
                  defaultValue={coverPhoto}
                />
                <Input
                  type="text"
                  onChange={this.changeTitle}
                  placeholder={'Whats your community name?'}
                >
                  Community name
                </Input>

                {titleError && <Error>Community name not available.</Error>}

                <TextArea
                  onChange={this.changeDescription}
                  placeholder={'What is your community about'}
                >
                  Description
                </TextArea>

                <div className="uk-margin uk-grid-small uk-form-width-large uk-child-width-auto uk-grid">
                    <label>Is Private?</label>
                    <label>
                      <input className="uk-radio" type="radio" name="radio2" onClick={() => this.changePrivate(true)}/> 
                      Yes</label>
                    <label>
                      <input className="uk-radio" type="radio" name="radio2" checked onClick={() => this.changePrivate(false)}/> 
                      No</label>
                </div>

                <Actions>
                  <div className="uk-margin">
                      <Button
                        disabled={
                          !title || titleError ||
                          !description || descriptionError ||
                          !photo || photoError
                        }
                        loading={isLoading}
                        onClick={(e) => {
                          e.preventDefault();
                          const {
                            title,
                            description,
                            photo,
                            isPrivate
                          } = this.state;
                          this.setState({ isLoading: true });
                          createCommunity({
                            variables: {
                              title,
                              description,
                              category: '',
                              isPrivate,
                              photo
                            }
                          }).then((res) => {
                            this.setState({ isLoading: false });
                            console.log(res);
                            this.props.history.redirect(`/community/${res.data.createCommunity.id}`);
                          }).catch((err) => {
                            this.setState({ isLoading: false });
                            console.log(err);
                          });
                        }}
                      >
                        Create
                      </Button>
                  </div>
                </Actions>
              </fieldset>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
export default withApollo(withRouter(CreateCommunityForm));