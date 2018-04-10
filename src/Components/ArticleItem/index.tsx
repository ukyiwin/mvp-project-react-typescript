import * as React from 'react';
import { Article } from '../../CustomTypings/schema';
import Avatar from '../Avatar/avatar';
import { Link } from 'react-router-dom';
import { withApollo, compose } from 'react-apollo';
import Likebutton from '../LikeButton';
import PopoverLink from '../PopoverLink';
import TimeAgo from 'react-timeago';
import { strip_html_tags } from 'Utils/helper';
import Icon from 'semantic-ui-react';
import { UNLIKE_ARTICLE, LIKE_ARTICLE, SAVE_ARTICLE, UNSAVE_ARTICLE } from 'Graphql/Mutation';
// import UIkit from 'uikit/src/js/uikit';
// import { Link } from 'react-router-dom';

interface Props {
    article: Article;
    small?: boolean;
    client: any;
}

// tslint:disable-next-line:no-any
class ArticleItem extends React.Component<Props> {
    componentDidMount() {
        // UIkit.notification('MyMessage', 'danger');
    }

    save() {
      this.props.client.mutate({
        mutation: UNSAVE_ARTICLE,
        variable: {
          id: this.props.article.id
        }
      }).then((res) => {
        // dhjh
      }).catch((err) => {
        // ghg
      });
    }

    unSave() {
      this.props.client.mutate({
        mutation: SAVE_ARTICLE,
        variable: {
          id: this.props.article.id
        }
      }).then((res) => {
        // dhjh
      }).catch((err) => {
        // ghg
      });
    }

    like() {
      this.props.client.mutate({
        mutation: LIKE_ARTICLE,
        variable: {
          id: this.props.article.id
        },

      }).then((res) => {
        // dhjh
      }).catch((err) => {
        // ghg
      });
    }

    unLike() {
      this.props.client.mutate({
        mutation: UNLIKE_ARTICLE,
        variable: {
          id: this.props.article.id
        }
      }).then((res) => {
        // dhjh
      }).catch((err) => {
        // ghg
      });
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
              <div className="">
                {this.props.small ? null : (
                    <div className="uk-padding-remove-bottom uk-padding-small">
                        <div className="uk-grid-small uk-flex" uk-grid={true}>
                            <div className="uk-width-auto">
                                <Avatar
                                  user={author}
                                  size={40}
                                  radius={64}
                                  onlineSize={'large'}
                                  isOnline={false}
                                  src={`${author.avatar ? author.avatar : ''}`}
                                  noLink
                                  style={{
                                    boxShadow: '0 0 0 2px #fff',
                                    flex: '0 0 64px',
                                    marginRight: '0',
                                  }}
                                />
                            </div>
                            <div className="uk-width-auto">
                                <PopoverLink link={article.id} user={author}>
                                    {author.firstname} {author.lastname}
                                </PopoverLink>
                                <p className="uk-text-meta uk-margin-remove-top">
                                    <time dateTime={article.createdAt}>
                                        <TimeAgo className="timeago" date={article.createdAt} /> &#149;{' '}
                                        {body.lengthInMinutes()}
                                    </time>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    className="card-body uk-padding-remove-vertical simple-link"
                    style={{ paddingTop: this.props.small ? 0 : 6, borderBottom: 1 }}
                >
                    <Link to={`/article/${article.id}`} className="simple-link">
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
                        <Likebutton 
                          liked={article.liked !== null} 
                          likeCount={1} 
                          text="Like" 
                          frontIcon="like" 
                          frontClick={this.like()}
                          backClick={this.unLike()}
                          backIcon="like-fill" 
                          buttonType="two" />

                        <Likebutton 
                          likeCount={article.comments ? article.comments.length : ''} 
                          link={`/article/${article.id}#comments`}
                          frontIcon="post-fill" 
                          text="Comment"
                        />
                        <a className="response-count uk-flex uk-inline">
                            <span uk-icon="icon: forward; ratio: 1.2" /> <div className="uk-visible@s">Share</div>
                        </a>
                    </div>

                    <div className="uk-flex  response-count pull-right">
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
                        <Likebutton
                          frontIcon="down" 
                          text="Save" 
                          backIcon="down-fill" 
                          buttonType="two"
                          frontClick={this.save()}
                          backClick={this.unSave()}
                          liked={article.saved !== null} 
                        />
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default compose(withApollo)(ArticleItem);

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
*/
