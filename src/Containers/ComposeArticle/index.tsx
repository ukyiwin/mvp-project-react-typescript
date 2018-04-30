import * as React from 'react';
// import Editor from 'Components/Editor';
import Select from 'react-select-plus';
import { ALL_INTEREST, GET_ARTICLE_BY_ID } from 'Graphql/Query';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
// import { Helmet } from 'react-helmet';
import AvatarImageCropper from 'react-avatar-image-cropper';
import Textarea from 'react-textarea-autosize';
import { ChildProps } from 'react-apollo/types';
import { Interest, Article } from 'CustomTypings/schema';
import { Editor, createEditorState } from 'medium-draft';
import IdleTimer from 'react-idle-timer';
import mediumDraftImporter from 'medium-draft/lib/importer';
import { convertToRaw } from 'draft-js';
import mediumDraftExporter from 'medium-draft/lib/exporter';
import axios from 'axios';
import { CREATE_ARTICLE } from 'Graphql/Mutation';
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
    tags: [],
    headerImage: '',
    photoId: '',
    articleId: '',
    // tslint:disable-next-line:no-object-literal-type-assertion
    article: {} as Article,
    editorState: createEditorState()
  };

  handleChange = (value) => {
    this.setState({value});
    // console.log(`Selected: ${selectedOption.label}`);
  }

  handleChangeBody = (value) => {
    this.setState({value});
    // console.log(`Selected: ${selectedOption.label}`);
  }

  autoSave = () => {
    // console.log(`Selected: ${selectedOption.label}`);
  }

  publish = () => {
    // console.log(`Selected: ${selectedOption.label}`);
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
        // tslint:disable-next-line:no-console
        console.log(result);
        this.setState({category: tempList});
      });
  }

  componentWillMount() {
    this.addInterestContent();
    const {match: {
        params
      }} = this.props;
    // tslint:disable-next-line:no-console
    console.log(params);
    if (params.id) {
      this.fetchArticle(params.id);
    } else {
      // this.props.history.goBack();
    }
  }
  // tslint:disable-next-line:typedef
  componentDidUpdate(prevProps) {
    // tslint:disable-next-line:no-console
    console.log(prevProps);
    const oldId = prevProps.match.params.id;
    const newId = this.props.match.params.id;
    // tslint:disable-next-line:no-console
    console.log(oldId);
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

      console.log('hey man im lonely');
      console.log(result.data.getArticleById.headerImage);
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
    console.log(editorState);
  }

  onChangetitle= (e) => {
    this.setState({title: e.target.value});
  }

  setCategory= (e) => {
    this.setState({interest: e.target.value});
  }

  save = () => {
    const { editorState, title, category, tags, article, photoId, interest  } = this.state;
    if (title !== '' || category !== '' || tags.length > 0 || interest !== '') {
      const id = article.id;
      const edi = this.state.editorState;
      const renderedHTML = mediumDraftExporter(edi.getCurrentContent());
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
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
    }
    
  }
  render() {
    const {value, category, title, editorState, interest} = this.state;
    console.log(title);

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
              <FlexRow>
              <button
                className="uk-button uk-light uk-button-small uk-margin-left uk-button-default"
                type="button">
                Drafts
              </button>
              <button
                className="uk-button uk-button-small uk-margin-left uk-button-primary"
                type="button">
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
            className="uk-width-1-1 uk-padding-large mdc-card mdc-elevation--z5 uk-padding-remove-vertical">
            <div
              className="uk-width-1-1 uk-padding-large uk-padding-remove-vertical uk-margin-top">
              <div className="uk-width-1-1 uk-padding-large uk-padding-remove-vertical">
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
              className="uk-width-1-1 uk-padding-large uk-padding-remove-vertical"
              style={{
              minHeight: '80vh'
            }}>
              <div className="uk-width-1-1 uk-padding-large uk-padding-remove-vertical">
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