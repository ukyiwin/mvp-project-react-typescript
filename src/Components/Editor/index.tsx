/* tslint:disable */
import * as React from 'react';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import { EditorState } from 'draft-js';

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();

const plugins = [
  hashtagPlugin,
  linkifyPlugin,
];

type Props = {

}

type State = {
  editorState: any
}
 // const INITIAL_STATE = editorStateFromText('this is a cooel editor... 🏄🌠🏀')
export default class Editors extends React.Component<Props, State> {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
      // let { content } = this.state;
      
      return(
        <div>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
          />
        </div>
      );
    }
}