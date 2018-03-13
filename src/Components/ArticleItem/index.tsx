import * as React from 'react';
import { Article } from 'CustomTypings/schema';
import Avatar from 'Components/Avatar';
import Likebutton from 'Components/LikeButton';
import PopoverLink from 'Components/PopoverLink';
import TimeAgo from 'react-timeago';
// import UIkit from 'uikit/src/js/uikit';
// import { Link } from 'react-router-dom';

type Props = {
  article: Article
};

// tslint:disable-next-line:no-any
class ArticleItem extends React.Component<Props> {

  componentDidMount() {
    // UIkit.notification('MyMessage', 'danger');
  }

  render() {
    const {article} = this.props;
    const {author} = article;
    return (
      <div 
        className="uk-card uk-card-small uk-card-default uk-width-1-1"
        style={{ borderRadius: 1, marginBottom: 5 }}
      >
        <div className="post-metadata uk-padding-remove-bottom uk-padding-small">
          <div className="uk-grid-small uk-flex" uk-grid={true} >
            <div className="uk-width-auto">
                <Avatar url={'https://getuikit.com/docs/images/avatar.jpg'} size={40} presence={false}  />
            </div>
            <div className="uk-width-auto post-info">
                <PopoverLink>{author.firstname} {author.lastname}</PopoverLink>
                <p className="uk-text-meta uk-margin-remove-top">
                  <time dateTime={article.createdAt}><TimeAgo className="timeago" date={article.createdAt} /></time>
                </p>
            </div>
          </div>
        </div>
        <div 
          className="uk-card-body uk-padding-remove-vertical"
          style={{paddingTop: 6, borderBottom: 1 }}
        >
          <h5 
            className="uk-text-medium uk-text-bold uk-text-break"
            style={{fontSize: 25}}
          >{article.title.truncString('...', 140)}
          </h5>
          <p style={{color: '#212121', fontSize: 19}}>
            {article.body.truncString('...', 140)}
          </p>
          <a className="uk-button-text read-more">Read More</a>
        </div>
        <div 
          className="post-stats clearfix uk-padding-small uk-padding-remove-horizontal" 
          style={{paddingTop: 1, paddingBottom: 1}}
        >
          <div className="pull-left uk-padding-small">
            <Likebutton liked={false} likeCount={2} />
          </div>

          <div className="pull-right uk-padding-small">
            0
          </div>

          <div className="response-count pull-right uk-padding-small">
            <a className="response-count">Comments </a>
          </div>
        </div>
      </div>
    );
  }
  
}

export default ArticleItem;

/*

          <div 
            data-uk-lightbox="animation: fade; video-autoplay: true;"
            className="uk-inline-clip uk-transition-toggle"
            style={{ borderRadius: 12, marginTop: 10 }}
          >
            <a 
              className="uk-inline" 
              href="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg"
            >
              <img 
                src="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg"
                className="img-responsive uk-transition-scale-up uk-transition-opaque" 
                alt="..." 
              />
            </a>
          </div>
*/