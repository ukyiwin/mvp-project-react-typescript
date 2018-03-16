import * as React from 'react';
import { Article } from 'CustomTypings/schema';
import Avatar from 'Components/Avatar';
import { Link } from 'react-router-dom';
import Likebutton from 'Components/LikeButton';
import PopoverLink from 'Components/PopoverLink';
import TimeAgo from 'react-timeago';
// import UIkit from 'uikit/src/js/uikit';
// import { Link } from 'react-router-dom';

type Props = {
  article: Article,
  small?: boolean
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
        className="uk-card uk-card-small uk-width-1-1"
        style={{ borderRadius: 1, marginBottom:  this.props.small ? 7 : 15, padding: 10, backgroundColor: '#fff' }}
      >
        { this.props.small ? null :
          <div className="post-metadata uk-padding-remove-bottom uk-padding-small">
            <div className="uk-grid-small uk-flex" uk-grid={true} >
              <div className="uk-width-auto">
                  <Avatar url={'https://getuikit.com/docs/images/avatar.jpg'} size={40} presence={false}  />
              </div>
              <div className="uk-width-auto post-info">
                  <PopoverLink link={article.id}>{author.firstname} {author.lastname}</PopoverLink>
                  <p className="uk-text-meta uk-margin-remove-top">
                    <time dateTime={article.createdAt}>
                      <TimeAgo className="timeago" date={article.createdAt} /> &#149; {article.body.lengthInMinutes()}
                    </time>
                  </p>
              </div>
            </div>
          </div>
        }
        <div 
          className="uk-card-body uk-padding-remove-vertical simple-link"
          style={{paddingTop:  this.props.small ? 0 : 6, borderBottom: 1 }}
        >
          <Link to={`/article/${article.id}`} className="simple-link">
            <h5 
              className="uk-text-medium uk-text-bold uk-text-break"
              style={{fontSize: this.props.small ? 17 : 23, fontFamily: 'Open Sans'}}
            >{this.props.small ? article.title.truncString('...', 25) : article.title.truncString('...', 140)}
            </h5>
          </Link>
          <p style={{color: '#212121', fontSize: this.props.small ? 14 : 17}}>
            {this.props.small ? article.body.truncString('...', 70) : article.body.truncString('...', 140)}
          </p>
        </div>
        <div 
          className="post-stats clearfix uk-padding-small uk-padding-remove-horizontal" 
          style={{paddingTop: 1, paddingBottom: 1}}
        >
          <div className="uk-flex pull-left uk-padding-small">
            <Likebutton liked={true} likeCount={2} />
            <a className="response-coun uk-margin-left uk-margin-right">
              <span uk-icon="icon:  comment; ratio: 1.0"/> <div className="uk-hidden@s">Comments</div> (0)
            </a>
            <a className="response-count">
              <span uk-icon="icon:  forward; ratio: 1.2"/> <div className="uk-hidden@s">Share</div></a>
          </div>

          <div className="uk-flex  response-count pull-right uk-padding-small">
            
            <div className="dropdown">
              <button  className="uk-button uk-button-text uk-margin-right" type="button">
                <span uk-icon="icon: more; ratio: 1.0"/>
              </button >
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
              <span uk-icon="icon: bookmark; ratio: 1.2"/>
            </button>
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