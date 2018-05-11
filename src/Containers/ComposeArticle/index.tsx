import * as React from 'react';
// import Editor from 'Components/Editor';
import Select from 'react-select-plus';
import { ALL_INTEREST, GET_ARTICLE_BY_ID } from 'Graphql/Query';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
// import { Helmet } from 'react-helmet';
import AvatarImageCropper from 'react-avatar-image-cropper';
import Textarea from 'react-textarea-autosize';
import Notifications, { notify } from 'react-notify-toast';
import { ChildProps } from 'react-apollo/types';
import { Interest, Article } from 'CustomTypings/schema';
import { Editor, createEditorState } from 'medium-draft';
import IdleTimer from 'react-idle-timer';
import mediumDraftImporter from 'medium-draft/lib/importer';
import { convertToRaw } from 'draft-js';
import mediumDraftExporter from 'medium-draft/lib/exporter';
import axios from 'axios';
import * as UIkit from 'uikit';
import { CREATE_ARTICLE, PUBLISH_ARTICLE } from 'Graphql/Mutation';
import { urltoFile, b64toBlob } from 'Utils/helper';
import {
  Container,
  ThreadDescription,
  ThreadTitle,
  ThreadInputs,
  Actions,
  Dropdowns,
  RequiredSelector,
  DisabledWarning,
} from './style';

import 'react-select-plus/dist/react-select-plus.css';
import 'medium-draft/lib/index.css';
import './style.scss';
import { Button, TextButton } from 'Components/Buttons';
import { FlexRow } from 'Components/Globals';
import { StyledOutlineButton } from 'Components/Buttons/style';
interface Props {
  // tslint:disable-next-line:no-any
  allInterest: any;
  // tslint:disable-next-line:no-any
  refreshToken?: any;
  // tslint:disable-next-line:no-any
  client?: any;

  createArticle?: any;
}

interface Response {
  allInterest: Interest[];
}

class ComposeWrite extends React.Component < RouteComponentProps<any> & Props & ChildProps < Response, {} >, {} > {
  timers: any;
  editor: any;
  state = {
    title: '',
    body: null,
    interest: '',
    category: '',
    removeSelected: true,
    value: [],
    headerImage: '',
    photoId: '',
    articleId: '',
    // tslint:disable-next-line:no-object-literal-type-assertion
    article: {} as Article,
    editorState: createEditorState(),
    tags: [] as any,
    those: [] as any,
    suggestions: [] as any,
    deleting: false,
    loading: false
  };

  handleChange = (value) => {
    this.setState({value});
  }

  handleChangeBody = (value) => {
    this.setState({value});
  }

  publish = () => {
    const tags = this.state.tags;
    const those = _.map(tags, 'value');
    const interest = this.state.interest;
    this.setState({saved: true, loading: true});
    this.props.client.mutate({
      mutation: PUBLISH_ARTICLE,
      variables: {
        id: this.props.article.id,
        category: interest,
        tags: those
      },
      update: (cache, { data: { publishArticle } }) => {
        const { getArticleById } = cache.readQuery({ 
          query: GET_ARTICLE_BY_ID, 
          variables: {
            id: this.state.article.id
          }
        });

        cache.writeQuery({
          query: GET_ARTICLE_BY_ID, 
          variables: {
            id: this.state.article.id
          },
          data: { getArticleById: publishArticle }
        });
      },
      optimisticResponse: {
        __typename: 'Mutation',
        publishArticle: {
          id: this.state.article.id,
          __typename: 'Article',
          isPublished: true
        }
      }
    }).then((res) => {
      this.setState({loading: false});
      UIkit.modal('#modal-full').hide();
    }).catch((err) => {
      this.setState({loading: false});
    });
  }

  handleDelete = (i) => {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
  }
 
  handleAddition(tag) {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
  }

  autoSave = () => {
    // g(`Selected: ${selectedOption.label}`);
  }

  loadInterest() {
    this.addInterestContent();
    UIkit.modal('#modal-full').show();
  }

  addInterestContent() {
    this
    .props
    .client
    .query({query: ALL_INTEREST})
    .then((result) => {
      // tslint:disable-next-line:no-any
      const tempList = []as any;
      result
        .data
        .allInterest
        .map((interest) => {
          const temp = {
            value: interest.id,
            label: interest.name
          };
          tempList.push(temp);
        });
      this.setState({suggestions: tempList});
    }).catch((err) => {
      console.log('hjhjhjhjhj');
    });
  }

  setCategory = (e) => {
    this.setState({interest: e.target.value});
  }

  componentWillMount() {
    this.addInterestContent();
    const {match: {
        params
      }} = this.props;
    
    if (params.id) {
      this.fetchArticle(params.id);
    } else {
      // this.props.history.goBack();
    }
  }
  // tslint:disable-next-line:typedef
  componentDidUpdate(prevProps) {
    
    const oldId = prevProps.match.params.id;
    const newId = this.props.match.params.id;
    
    if (newId !== oldId) {
      this.fetchArticle(oldId);
    }
  }

  fetchArticle(id) {
    this.props.client.query({
      query: GET_ARTICLE_BY_ID, 
      variables: {
        id
      }
    }).then((result) => {
      const editorState = createEditorState(convertToRaw(mediumDraftImporter(result.data.getArticleById.body)));
      this.setState({
          article: result.data.getArticleById,
          title: result.data.getArticleById.title,
          category: result.data.getArticleById.category,
          editorState,
      });

      if (result.data.getArticleById.headerImage) {
        this.setState({
          photoId: result.data.getArticleById.headerImage.id,
          headerImage: result.data.getArticleById.headerImage.url
        });
      }
    }).catch((err) => {
        console.log(err);
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
        url: 'https://uniserver.herokuapp.com/upload',
        data,
        headers: {
          'content-type': 'multipart/form-data'
      }
      }).then((response) => {
        this.setState({ photoId: response.data.id, headerImage: response.data.url });
      });
    });
  }

  apply = (file: File) => {
    const reader = new FileReader();
    
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.uploadFile(file, reader.result);
    };
    reader.onerror = (error) => {
      // console.log('Error: ', error);
    };
  }

  onChangeBody = (editorState) => {
    this.setState({editorState});
  }

  onChangetitle = (e) => {
    this.setState({title: e.target.value});
  }

  setCategory = (e) => {
    this.setState({interest: e.target.value});
  }

  save = () => {
    const { editorState, title, category, tags, article, photoId, interest  } = this.state;
    if (title !== '' || category !== '' || tags.length > 0 || interest !== '') {
      const id = article.id;
      const edi = this.state.editorState;
      const renderedHTML = mediumDraftExporter(edi.getCurrentContent());
      notify.show('Saving article...!');
      this.props.client.mutate({
        mutation: CREATE_ARTICLE,
        variables: {
          id,
          title,
          body: renderedHTML,
          category,
          photoId
        }
      }).then((result) => {
        this.setState({article: result.data.createArticle});
      }).catch((err) => {
        console.log(err);
      });
    }
    
  }
  
  render() {
    const {value, category, title, editorState, interest} = this.state;

    return (
      <IdleTimer
        ref={(ref) => this.timers = ref}
        element={document}
        idleAction={this.save}
        timeout={3000}
      >
        <div className="uk-width-1-1">
          <div
            className="uk-width-1-1 mdc-elevation--z1 uk-flex uk-flex-between"
            style={{
            backgroundColor: '#454d5d',
            padding: 4
          }}>
            <FlexRow>
              <button
                onClick={() => this.props.history.goBack()}
                className="uk-button uk-light uk-button-small uk-margin-left uk-button-secondary"
                type="button">
                Back
              </button>
            </FlexRow>
            <div className="uk-flex uk-flex-around">
              <FlexRow>
              <button
                className="uk-button uk-light uk-button-small uk-margin-left uk-button-default"
                type="button"
                onClick={() => {
                  this.save();
                  this.props.history.push('/drafts');
                }}
              >
                Drafts
              </button>
              <button
                className="uk-button uk-button-small uk-margin-left uk-button-primary"
                type="button"
                onClick={() => this.loadInterest()}
              >
                Publish
              </button>
              </FlexRow>
            </div>
          </div>
          <ul uk-accordion="multiple: false">
            <li className="">
                <a className="uk-accordion-title" href="#">Add header image</a>
                <div className="uk-accordion-content">
                  <div
                    className="uk-width-1-1 uk-inline"
                    style={{
                    backgroundColor: '#e1eaf1',
                    minHeight: 250,
                    height: 350,
                    maxHeight: 350
                  }}>
                    <img src={this.state.headerImage} height={350} className="uk-width-1-1"/>
                    <AvatarImageCropper
                      apply={this.apply}
                      className="uk-width-1-1 float-center uk-overlay uk-position-center"
                      text="Add header image"/>
                  </div>
                </div>
            </li>
          </ul>
          <div
            className="uk-width-1-1 un-padding--large mdc-card mdc-elevation--z5 uk-padding-remove-vertical">
            <div
              className="uk-width-1-1 un-padding--large uk-padding-remove-vertical uk-margin-top">
              <div className="uk-width-1-1 un-padding--large uk-padding-remove-vertical">
                <Textarea
                  data-cy="composer-title-input"
                  onChange={this.onChangetitle}
                  style={ThreadTitle}
                  value={title}
                  placeholder={'Title of article'}
                  // tslint:disable-next-line:jsx-no-string-ref
                  ref={'titleTextarea'}
                  autoFocus={true}
                />
              </div>
            </div>
            <div
              className="uk-width-1-1 un-padding--large uk-padding-remove-vertical"
              style={{
              minHeight: '80vh'
            }}>
              <div className="uk-width-1-1 un-padding--large uk-padding-remove-vertical">
                <Editor
                  ref={(ref) => this.editor = ref}
                  editorState={editorState}
                  onChange={this.onChangeBody}
                  placeholder="Write article content"
                  className={'threadComposer'}
                />
              </div>
            </div>
          </div>
          <div
            id="modal-full"
            className="uk-modal-full"
            data-uk-modal
          >
            <div className="uk-modal-dialog" style={{ height: '100vh' }}>
              <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close />
              <div
                className=" uk-height-1-1 uk-grid-collapse uk-child-width-1-2@s"
                data-uk-grid
              >
                <div className="uk-background-cover uk-visible@m" id="sideBg">
                  <div className="uk-flex uk-flex-stretch uk-flex-middle" />
                </div>
                <div className="uk-padding-large">
                    <h1>Publish Article</h1>
                    <p>Lets pick some tags to finish up the process.</p>
                    <div
                      className="uk-flex uk-flex-around"
                      style={{ marginBottom: 20 }}
                    >
                      <Dropdowns
                        style={{backgroundColor: 'transparent'}}
                      >
                        <span>Category:</span>
                        {this.props.allInterest.loading ? (
                          <div />
                          ) : (
                          <RequiredSelector
                            data-cy="composer-community-selector"
                            style={{minWidth: 180}}
                            onChange={this.setCategory}
                          >
                            <option key={0} value="">
                              Select Category
                            </option>
                            {this.props.allInterest.allInterest.map((interest) => {
                              return (
                                <option key={interest.id} value={interest.id}>
                                  {interest.name}
                                </option>
                              );
                            })}
                          </RequiredSelector>
                        )}
                      </Dropdowns>
                    </div>
                    <Select
                      name="form-field-name"
                      value={this.state.tags}
                      multi
                      placeholder="Add at most 5 tags"
                      onChange={this.handleChange}
                      options={this.state.suggestions}
                    />
                    <StyledOutlineButton
                      disabled={
                        this.state.tags.length < 1 || this.state.interest === '' || this.state.loading
                      }
                      onClick={() => this.publish()}
                      style={{ marginTop: 20 }}
                    >Publish Now
                    </StyledOutlineButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IdleTimer>
    );
  }
}

export default withRouter(
  compose(
    withApollo, 
    graphql <Response, {}, Props> (ALL_INTEREST, {name: 'allInterest'}),
  )(ComposeWrite));