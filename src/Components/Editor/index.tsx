/* tslint:disable */
import * as React from 'react';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import {EditorState} from 'draft-js';

const emojiPlugin = createEmojiPlugin();
// const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
import 'draft-js-emoji-plugin/lib/plugin.css';

type Props = {

}

type State = {
  editorState: any
}

/*const plugins = [
  hashtagPlugin,
  linkifyPlugin,
];*/

 // const INITIAL_STATE = editorStateFromText('this is a cooel editor... 🏄🌠🏀')
export default class Editors extends React.Component<Props, State> {

  // state = { editorState: INITIAL_STATE }

  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }

  onChange = (editorState) => {
    // this.setState({ editorState: editorState })
    /* You would normally save this to your database here instead of logging it */
    // console.log(editorStateToHtml(editorState))
  }

  render() {
      // let { content } = this.state;
      
      return(
        <div>
          <Editor editorState={this.state.editorState} onChange={this.onChange} plugin={emojiPlugin} />
        </div>
      );
    }
}