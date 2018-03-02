/* tslint:disable */
import * as React from 'react';
// import { Editor, editorStateToHtml, editorStateFromText,} from 'last-draft'
// import { fromJS } from 'immutable';
/*
import video from 'ld-video'
import color from 'ld-color-picker'
import emoji from 'ld-emoji'
import gif from 'ld-gif'
import mention from 'ld-mention'
import audio from 'ld-audio'
import sticker from 'ld-sticker'
import html from 'ld-html'
import todo from 'ld-todo'
let plugins = [video, color, emoji, gif, mention]*/

type Props = {

}

type State = {
  editorState: any
}
 // const INITIAL_STATE = editorStateFromText('this is a cooel editor... 🏄🌠🏀')
export default class Editors extends React.Component<Props, State> {

  // state = { editorState: INITIAL_STATE }

  constructor(props) {
    super(props)
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
          ghgh
        </div>
      );
    }
}