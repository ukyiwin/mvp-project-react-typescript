import * as React from 'react';
import TimeAgo from 'react-timeago';
import PopoverLink from 'Components/PopoverLink';
import CommentsEditor from 'Components/CommentEditor';
import Avatar from 'Components/Avatar';
import { Comment } from 'CustomTypings/schema';
import { createEditorState } from 'medium-draft';
import mediumDraftImporter from 'medium-draft/lib/importer';
import { convertToRaw } from 'draft-js';

interface Props {
  comments: Comment;
}
export default class CommentItem extends React.Component<Props> {

  state = {
    editorState: createEditorState()
  };

  componentDidMount() {
    const {comments} = this.props;
    const editorState = createEditorState(convertToRaw(mediumDraftImporter(comments.body)));
    this.setState({editorState});
  }
  render() {
    const {comments} = this.props;
    const {editorState} = this.state;

    return (
        <article
            className="uk-comment card uk-visible-toggle uk-padding-small"
            style={{ backgroundColor: '#fff', marginBottom: 10 }}
        >
            <header className="uk-comment-header uk-position-relative">
                <div className="uk-grid-medium uk-flex-middle" data-uk-grid={true}>
                    <div className="uk-width-auto">
                        <Avatar url={comments.author.avatar ? comments.author.avatar : ''} size={40} presence={false} />
                    </div>
                    <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove">
                            <a className="uk-link-reset" href="#">
                                {comments.author.firstname + ' ' + comments.author.lastname}
                            </a>
                        </h4>
                        <p className="uk-comment-meta uk-margin-remove-top">
                            <a className="uk-link-reset" href="#">
                            <TimeAgo className="timeago" date={comments.createdAt} /> ago &#149;{' '}
                            </a>
                        </p>
                    </div>
                </div>
                <div className="uk-position-top-right uk-position-small uk-hidden-hover">
                    <a className="uk-link-muted" href="#">
                        Reply
                    </a>
                </div>
            </header>
            <div className="uk-comment-body">
                <CommentsEditor
                  editorState={editorState}
                  editorEnabled={false}
                />
            </div>
        </article>
    );
  }
}