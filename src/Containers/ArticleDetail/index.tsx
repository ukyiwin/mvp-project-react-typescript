import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { compose, withApollo } from 'react-apollo';
import { Editor, createEditorState } from 'medium-draft';
// import { Helmet } from 'react-helmet';
import { Article } from 'CustomTypings/schema';
import Avatar from 'Components/Avatar';
import ArticleItem from 'Components/ArticleItem';
import CommentEditor from 'Components/CommentEditor';
import TopInterest from 'Components/TopInterest';
import Likebutton from 'Components/LikeButton';
import PopoverLink from 'Components/PopoverLink';
import TimeAgo from 'react-timeago';
import { GET_ARTICLE_BY_ID } from 'Graphql/Query';
import Label from 'Components/Label';
import mediumDraftImporter from 'medium-draft/lib/importer';
import { convertToRaw } from 'draft-js';
// import 'medium-draft/lib/index.css';

interface Props {
    // tslint:disable-next-line:no-any
    client?: any;
}

class ArticleDetail extends React.Component<RouteComponentProps<any> & Props> {
    state = {
        // tslint:disable-next-line:no-object-literal-type-assertion
        currentArticle: {} as Article,
        loading: true,
        editorState: createEditorState()
    };

    componentWillMount() {
        const { match: { params } } = this.props;
        // tslint:disable-next-line:no-console
        console.log(params);
        if (params.slug) {
            this.fetchArticleandOthers(params.slug);
        } else {
            this.props.history.goBack();
        }
    }
    // tslint:disable-next-line:typedef
    componentDidUpdate(prevProps) {
        // tslint:disable-next-line:no-console
        console.log(prevProps);
        const oldId = prevProps.match.params.slug;
        const newId = this.props.match.params.slug;
        // tslint:disable-next-line:no-console
        console.log(oldId);
        if (newId !== oldId) {
            this.fetchArticleandOthers(oldId);
        }
    }

    fetchArticleandOthers(slugOrId: string) {
        this.props.client
            .query({
                query: GET_ARTICLE_BY_ID,
                variables: {
                    id: slugOrId,
                },
            })
            .then((result) => {
                // tslint:disable-next-line:no-console
                console.log(result.data.getArticleById);
                const editorState = createEditorState(convertToRaw(mediumDraftImporter(result.data.getArticleById.body)));
                this.setState({ currentArticle: result.data.getArticleById, loading: false, editorState });
            })
            .catch((err) => {
                // tslint:disable-next-line:no-console
                console.log(err);
                this.props.history.replace('/not-found');
            });
    }

    componentWillUnmount() {
        // allows us to ignore
    }

    renderArticle(article: Article) {
        const { author } = article;
        const { editorState } = this.state;
        return (
            <div
                className="uk-card card uk-card-small uk-width-1-1"
                style={{ borderRadius: 1, marginBottom: 22, padding: 10, backgroundColor: '#fff' }}
            >
                <div className="uk-width-1-1 post-metadata uk-padding-remove-bottom uk-padding-small">
                    <div className="uk-grid-small uk-flex uk-width-4-5" uk-grid={true}>
                        <div className="uk-width-auto">
                            <Avatar 
                              url={author.avatar ? author.avatar.url : 'https://getuikit.com/docs/images/avatar.jpg'} 
                              size={50}
                              presence={false} />
                        </div>
                        <div className="uk-width-auto post-info">
                            <PopoverLink user={article.author} bigger={true} link={article.id}>
                                {author.firstname} {author.lastname}
                            </PopoverLink>
                            <p className="uk-text-meta uk-margin-remove-top">
                                <time dateTime={article.createdAt}>
                                    <TimeAgo className="timeago" date={article.createdAt} /> ago &#149;{' '}
                                    {article.body.lengthInMinutes()}
                                </time>
                            </p>
                        </div>
                    </div>
                    <div className="uk-width-1-5 uk-flex-center">
                        <button className="uk-button uk-button-primary uk-button-small">Connect</button>
                    </div>
                </div>
                <div className="uk-card-body uk-padding-remove-vertical" style={{ paddingTop: 10, borderBottom: 1 }}>
                    <h5
                        className="uk-text-medium uk-text-bold uk-text-break"
                        style={{ fontSize: 50, fontFamily: 'Open Sans' }}
                    >
                        {article.title}
                    </h5>
                    <Editor
                      editorState={editorState}
                      editorEnabled={false}
                    />
                </div>
                <div className="uk-padding-small">
                    <TopInterest />
                </div>
                <div
                    className="post-stats clearfix uk-padding-small uk-padding-remove-horizontal"
                    style={{ paddingTop: 10, paddingBottom: 1 }}
                >
                  <div className="uk-flex pull-left uk-padding-small">
                        <Likebutton liked={true} likeCount={2} />
                        <a className="response-count uk-margin-left">
                            <span uk-icon="icon:  forward; ratio: 1.2" />Share
                        </a>
                  </div>

                  <div className="uk-flex  response-count pull-right uk-padding-small">
                        <div className="dropdown">
                            <button className="uk-button uk-button-text uk-margin-right" type="button">
                                <span uk-icon="icon: more; ratio: 1.0" />
                            </button>
                            <div data-uk-drop="mode: click; pos: bottom-right">
                                <ul className="menu">
                                    <li className="menu-item uk-padding-small">
                                        <a href="#" className="uk-text-bold">
                                            <span uk-icon="icon: plus-circle; ratio: 1" /> Activity
                                        </a>
                                    </li>
                                    <li className="menu-item uk-padding-small">
                                        <a href="#" className="uk-text-bold">
                                            <span uk-icon="icon: warning; ratio: 1" /> Don't like this
                                        </a>
                                    </li>
                                    <li className="menu-item uk-padding-small">
                                        <a href="#" className="uk-text-bold">
                                            <span uk-icon="icon: info; ratio: 1" /> Report
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className="uk-button uk-button-text">
                            <span uk-icon="icon: bookmark; ratio: 1.2" /> Favourite
                        </button>
                  </div>
                </div>
            </div>
        );
    }

    renderCommentBox() {
        return (
            <div
              className="uk-card card uk-card-small uk-width-1-1"
              style={{ borderRadius: 1, marginBottom: 30, padding: 10, backgroundColor: '#fff' }}
            >
                <div className="uk-grid-small uk-flex" uk-grid={true} style={{ padding: 0, marginTop: 3 }}>
                    <div className="uk-width-auto">
                        <Avatar url={'https://getuikit.com/docs/images/avatar.jpg'} size={30} presence={false} />
                    </div>
                    <div className="uk-width-auto post-info">John Doe</div>
                </div>
                <CommentEditor />
                <div>
                <button className="uk-button uk-button-primary uk-button-small uk-text-right">Comment</button>
                </div>
            </div>
        );
    }

    renderComment() {
        return (
            <article
                className="uk-comment card uk-visible-toggle uk-padding-small"
                style={{ backgroundColor: '#fff', marginBottom: 10 }}
            >
                <header className="uk-comment-header uk-position-relative">
                    <div className="uk-grid-medium uk-flex-middle" data-uk-grid={true}>
                        <div className="uk-width-auto">
                            <Avatar url="https://getuikit.com/docs/images/avatar.jpg" size={40} presence={false} />
                        </div>
                        <div className="uk-width-expand">
                            <h4 className="uk-comment-title uk-margin-remove">
                                <a className="uk-link-reset" href="#">
                                    Author
                                </a>
                            </h4>
                            <p className="uk-comment-meta uk-margin-remove-top">
                                <a className="uk-link-reset" href="#">
                                    12 days ago
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
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet.
                    </p>
                </div>
            </article>
        );
    }

    renderCommentList() {
        return (
            <div
              id="comments"
              className="uk-card uk-card-small uk-card-small uk-width-1-1"
              style={{ backgroundColor: 'transparent' }}
            >
                <Label text="Comment responses" />
                {this.renderComment()}
            </div>
        );
    }

    render() {
        if (this.state.loading) {
            // tslint:disable-next-line:jsx-wrap-multiline
            return (
                <div className="uk-position-center">
                    <div className="loader uk-margin-small">
                        <div className="bullet" />
                        <div className="bullet" />
                        <div className="bullet" />
                        <div className="bullet" />
                    </div>
                </div>
            );
        }
        return (
            <div className="uk-width-1-1 uk-padding">
                <div className="uk-width-1-1 uk-grid uk-flex-stretch">
                    <div className="uk-width-2-3@m uk-width-3-3@s">
                        {this.renderArticle(this.state.currentArticle)}
                        {this.renderCommentBox()}
                        {this.renderCommentList()}
                    </div>
                    <div className="uk-width-1-3@m uk-width-1-1@s">
                        <Label text="Similar articles" />
                        <ArticleItem article={this.state.currentArticle} small={true} />
                        <ArticleItem article={this.state.currentArticle} small={true} />
                        <ArticleItem article={this.state.currentArticle} small={true} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(compose(withApollo)(ArticleDetail));
