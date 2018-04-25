import * as React from 'react';
import { Article, User } from '../../CustomTypings/schema';
import Avatar from '../Avatar/avatar';
import { Link } from 'react-router-dom';
import { withApollo, compose } from 'react-apollo';
import Likebutton from '../LikeButton';
import PopoverLink from '../PopoverLink';
import TimeAgo from 'react-timeago';
import { strip_html_tags } from 'Utils/helper';
import Icon from 'semantic-ui-react';
import * as UIkit from 'uikit';
import { PUBLISH_ARTICLE, LIKE_ARTICLE } from 'Graphql/Mutation';
import { cookies } from '../../link';
import { CURRENT_USER } from '../../constants';
// import UIkit from 'uikit/src/js/uikit';
// import { Link } from 'react-router-dom';

interface Props {
    article: Article;
    small?: boolean;
    client: any;
}

// tslint:disable-next-line:no-any
class DraftsItem extends React.Component<Props> {

  state = {
    user: {},
    saved: false,
    liked: false
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

    deleteArticle = () => {
      this.setState({saved: false});
      this.props.client.mutate({
        mutation: DELETE_ARTICLE,
        variables: {
          id: this.props.article.id
        }
      }).then((res) => {
        // dhjh
      }).catch((err) => {
        // ghg
      });
    }

    like = () => {
      this.setState({liked: true});
      this.props.client.mutate({
        mutation: LIKE_ARTICLE,
        variables: {
          id: this.props.article.id
        },

      }).then((res) => {
        // dhjh
      }).catch((err) => {
        // ghg
      });
    }

    unLike = () => {
      this.setState({liked: false});
      this.props.client.mutate({
        mutation: UNLIKE_ARTICLE,
        variables: {
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
                      frontClick={() => this.deleteArticle()}
                      style={{marginRight: 10}}
                    />
                    <Likebutton
                      frontIcon="down" 
                      text="Publish" 
                      frontClick={() => UIkit.modal('#modal-full').show()}
                    />
                  </div>
                </div>
                </div>
                <div
                  id="modal-full"
                  className="uk-modal-full"
                  data-uk-modal
                >
                  <div className="uk-modal-dialog">
                    <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close />
                    <div
                      className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"
                      uk-grid
                    >
                        <div className="uk-background-cover" />
                        <div className="uk-padding-large">
                            <h1>Headline</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur a.</p>
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
