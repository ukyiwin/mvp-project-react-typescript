import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { StyledButton } from 'Components/MoreViews/style';
import { Button } from 'Components/Buttons';
import { Actions } from 'Components/EditForm/style';
import { Input, Select, TextArea, CoverInput, Error } from 'Components/FormElements';
import { CREATE_CHANNEL, CREATE_CHANNEL_BY_SLUG } from 'Graphql/Mutation/Community';
import { Mutation, withApollo } from 'react-apollo';
import * as axios from 'axios';
import { COMMUNITY_EXIST } from 'Graphql/Query/Community';

interface Props {
  client?: any;
  history?: any;
  communityId: string;
}

class CreateChannelForm extends React.Component<Props> {
  
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

  constructor(props: Props) {
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
      <Mutation mutation={CREATE_CHANNEL_BY_SLUG}>
        {(createChannelBySlug, {loading, error}) => (
          <div className="uk-flex uk-flex-stretch">
            <form className="uk-flex uk-flex-stretch">
              <fieldset className="uk-fieldset">
                <Input
                  type="text"
                  onChange={this.changeTitle}
                  placeholder={'Whats your channel name?'}
                >
                  Name
                </Input>

                {titleError && <Error>Channel name not available.</Error>}

                <TextArea
                  onChange={this.changeDescription}
                  placeholder={'Channel description'}
                >
                  Description
                </TextArea>

                <Actions>
                  <div className="uk-margin">
                      <Button
                        disabled={
                          !title || titleError ||
                          !description || descriptionError
                        }
                        loading={isLoading}
                        onClick={(e) => {
                          e.preventDefault();
                          const {
                            title,
                            description,
                          } = this.state;
                          this.setState({ isLoading: true });
                          createChannelBySlug({
                            variables: {
                              slug: this.props.communityId,
                              name: title,
                              desc: description,
                            }
                          }).then((res) => {
                            this.setState({ isLoading: false });
                            // this.props.history.redirect(`/community/${res.data.createCommunity.id}`);
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
export default withApollo(withRouter(CreateChannelForm));