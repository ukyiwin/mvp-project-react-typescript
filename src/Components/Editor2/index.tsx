import * as React from 'react';
import 'medium-draft/lib/index.css';

import {
  Editor,
  createEditorState,
} from 'medium-draft';

export default class UnizonnEditor extends React.Component {
  
  // tslint:disable-next-line:no-any
  editor: any;

  state = {
    editorState: createEditorState(), // for empty content
  };
  // tslint:disable-next-line:typedef
  constructor(props) {
    super(props);
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  }

  componentDidMount() {
    // this.refs.editor.focus();
  }

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        ref={(ref) => this.editor = ref}
        editorState={editorState}
        onChange={this.onChange} 
      />
    );
  }
}