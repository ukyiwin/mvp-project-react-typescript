import * as React from 'react';
import 'medium-draft/lib/index.css';
import './style.scss';

import {
  Editor,
  createEditorState,
} from 'medium-draft';

export default class CommentEditor extends React.Component<any> {
  
  // tslint:disable-next-line:no-any
  editor: any;

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
    const { editorState } = this.props;
    return (
      <div className="uk-width-1-1">
        <Editor
          ref={(ref) => this.editor = ref}
          editorState={editorState}
          editorEnabled={false}
          style={{paddingTop: 0, marginTop: 0}}
        />
      </div>
    );
  }
}