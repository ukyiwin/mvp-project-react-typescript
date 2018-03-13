/* tslint:disable */
import * as React from 'react';

// The editor core
import Editor, { Editable, createEmptyState } from 'ory-editor-core'
import 'ory-editor-core/lib/index.css' // we also want to load the stylesheets
import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import 'ory-editor-ui/lib/index.css'

// react-tap-event-plugin is required for material-ui which is used by ory-editor-ui
require('react-tap-event-plugin')()

// The rich text area plugin
import slate from 'ory-editor-plugins-slate'
import 'ory-editor-plugins-slate/lib/index.css'
import spacer from 'ory-editor-plugins-spacer'
import 'ory-editor-plugins-spacer/lib/index.css'
import image from 'ory-editor-plugins-image'
import 'ory-editor-plugins-image/lib/index.css'
import video from 'ory-editor-plugins-video'
import 'ory-editor-plugins-video/lib/index.css'
import parallax from 'ory-editor-plugins-parallax-background'
import 'ory-editor-plugins-parallax-background/lib/index.css'

// The html5-video plugin
// import html5video from 'ory-editor-plugins-html5-video'
// import 'ory-editor-plugins-html5-video/lib/index.css'

import native from 'ory-editor-plugins-default-native'
import divider from 'ory-editor-plugins-divider'

// Renders json state to html, can be used on server and client side
// import { HTMLRenderer } from 'ory-editor-renderer'

const editable = createEmptyState()

const plugins = {
  content: [slate(), spacer, image, video, divider],
  layout: [parallax({ defaultPlugin: slate() })],
  native
}

const editor = new Editor({
  plugins: plugins,
  editables: [editable, 'Write content']
});

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

  render() {
      // let { content } = this.state;
      
      return(
        <div>
        {/* Content area */}
        <Editable
          editor={editor}
          id={editable.id}
        />
        {/*  Default user interface  */}
        <Trash editor={editor}/>
        <DisplayModeToggle editor={editor}/>
        <Toolbar editor={editor}/>
      </div>
      );
    }
}