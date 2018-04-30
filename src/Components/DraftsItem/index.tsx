import * as React from 'react';
import * as ReactTags from 'react-tag-autocomplete';
import { Article, User } from '../../CustomTypings/schema';
import Avatar from '../Avatar/avatar';
import { Link } from 'react-router-dom';
import { withApollo, compose } from 'react-apollo';
import Likebutton from '../LikeButton';
import PopoverLink from '../PopoverLink';
import TimeAgo from 'react-timeago';
import { strip_html_tags } from 'Utils/helper';
import Icon from 'semantic-ui-react';
import ArticleItem from 'Components/ArticleItem';
import * as UIkit from 'uikit';
import { PUBLISH_ARTICLE, LIKE_ARTICLE, DELETE_ARTICLE } from 'Graphql/Mutation';
import { ALL_INTEREST } from 'Graphql/Query';
import { cookies } from '../../link';
import { CURRENT_USER } from '../../constants';
import { StyledOutlineButton } from 'Components/Buttons/style';
// import UIkit from 'uikit/src/js/uikit';
// import { Link } from 'react-router-dom';

interface Props {
    article: Article;
    small?: boolean;
    client?: any;
}

// tslint:disable-next-line:no-any
class DraftsItem extends React.Component<Props> {

  state = {
    user: {},
    saved: false,
    liked: false,
    tags: [] as any,
    suggestions: [] as any,
    deleting: false
  };

  componentWillMount() {
    // UIkit.notification('MyMessage', 'danger');
    const user = cookies.get(CURRENT_USER);
  }

  publish = () => {
    this.setState({saved: true});
    this.props.client.mutate({
      mutation: PUBLISH_ARTICLE,
      variables: {
        id: this.props.article.id
      }
    }).then((res) => {
      // dhjh
    }).catch((err) => {
      // ghg
    });
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
            id: interest.id,
            name: interest.name
          };
          tempList.push(temp);
        });
      // tslint:disable-next-line:no-console
      console.log(result);
      this.setState({suggestions: tempList});
    }).catch((err) => {
      console.log('hjhjhjhjhj');
    });
  }

  deleteArticle = () => {
    this.setState({deleting: true});
    this.props.client.mutate({
      mutation: DELETE_ARTICLE,
      variables: {
        id: this.props.article.id
      }
    }).then((res) => {
      this.setState({deleting: true});
      UIkit.modal('#modal-delete').hide();
    }).catch((err) => {
      this.setState({deleting: true});
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

  render() {
      const { article } = this.props;
      const { author } = article;
      const body = strip_html_tags(article.body);
      return (
          <div
            className="uk-card uk-card-default raised uk-width-1-1"
            style={{
                marginBottom: this.props.small ? 7 : 15,
                backgroundColor: '#fff',
            }}
          >
            <div style={{ paddingTop: 20 }}>
              <div
                  className="card-body uk-padding-remove-vertical simple-link"
                  style={{ paddingTop: this.props.small ? 0 : 10, borderBottom: 1 }}
              >
                  <Link to={`/write/${article.id}`} className="simple-link">
                      <h5
                          className="uk-text-medium uk-text-bold uk-text-break"
                          style={{ fontSize: this.props.small ? 17 : 23, fontFamily: 'Crimson Text' }}
                      >
                        {this.props.small
                            ? article.title.truncString('...', 36)
                            : article.title.truncString('...', 140)}
                      </h5>
                  </Link>
                  <p style={{ color: '#212121', fontFamily: 'Muli', fontSize: this.props.small ? 14 : 17 }}>
                      {this.props.small ? body.truncString('...', 70) : body.truncString('...', 140)}
                  </p>
              </div>
              <div
                  className="post-stats clearfix uk-padding-small"
              >
                <div className="uk-flex pull-left">
                  <p className="uk-text-meta uk-margin-remove-top">
                    <time dateTime={article.createdAt}>
                      <TimeAgo className="timeago" date={article.createdAt} /> &#149;{' '}
                      {body.lengthInMinutes()}
                    </time>
                  </p>
                </div>
                <div className="uk-flex uk-flex-between response-count pull-right">
                  <Likebutton
                    frontIcon="down" 
                    text="Delete" 
                    frontClick={() => UIkit.modal('#modal-delete').show()}
                    style={{marginRight: 10}}
                  />
                  <Likebutton
                    frontIcon="down" 
                    text="Publish" 
                    frontClick={() => this.loadInterest()}
                  />
                </div>
              </div>
              </div>
              <div id="modal-delete" data-uk-modal>
                  <div className="uk-modal-dialog uk-modal-body">
                      <h2 className="uk-modal-title">Notice</h2>
                      <p>You are about to delete this article draft.</p>
                      <p className="uk-text-right">
                          <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                          <button 
                            className="uk-button uk-button-primary" type="button"
                            onClick={() => this.deleteArticle()}
                          >
                            Delete
                          </button>
                      </p>
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
                    <div className="uk-background-cover">
                          <ArticleItem article={article} />
                    </div>
                    <div className="uk-padding-large">
                        <h1>Publish Article</h1>
                        <p>Lets pick some tags to finish up the process.</p>
                        <ReactTags
                          tags={this.state.tags}
                          suggestions={this.state.suggestions}
                          handleDelete={this.handleDelete}
                          handleAddition={this.handleAddition}
                        />
                        <StyledOutlineButton>Publish Now</StyledOutlineButton>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      );
  }
}

export default compose(withApollo)(DraftsItem);

/*

          <{this.props.small && (this.props.article.link === null) ? null : (
                <div className="image">
                  <div
                    data-uk-lightbox="animation: fade; video-autoplay: true;"
                    className="uk-inline-clip uk-transition-toggle"
                  >
                      <a
                        className="uk-inline"
                        href="https://s3.envato.com/files/233580557/02_sign_up_step_1.jpg"
                      >
                        <img
                          src="https://s3.envato.com/files/233580557/02_sign_up_step_1.jpg"
                          className="img-responsive uk-width-1-1 uk-transition-scale-up uk-transition-opaque"
                          alt="..."
                          style={{maxHeight: 280 }}
                        />
                      </a>
                  </div>
                </div>)
              }  
                        <a className="response-count uk-flex uk-inline">
                            <span uk-icon="icon: forward; ratio: 1.2" /> <div className="uk-visible@s">Share</div>
                        </a>
*/
