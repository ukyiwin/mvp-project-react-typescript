import * as React from 'react';
import { Article } from 'CustomTypings/schema';
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
        className="uk-card uk-card-small uk-card-default uk-width-1-1 uk-margin-bottom"
        style={{ borderRadius: 5 }}
      >
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex" uk-grid={true} >
            <div className="uk-width-auto">
                <figure className="avatar avatar-xl">
                  <img 
                    width="40" 
                    height="40"
                    src="https://getuikit.com/docs/images/avatar.jpg"
                  />
                  <i className="avatar-presence online"/>
                </figure>
            </div>
            <div className="uk-width-auto">
                <h3 className="uk-card-title uk-margin-remove-bottom">{author.firstname} {author.lastname}</h3>
                <p className="uk-text-meta uk-margin-remove-top">
                  <time dateTime="2016-04-01T19:00">March 01, 2018</time>
                </p>
            </div>
          </div>
        </div>
        <div 
          className="uk-card-body uk-padding-remove-vertical uk-padding-top-small"
          style={{paddingTop: 10, borderBottom: 1 }}
        >
          <h5 
            className="uk-text-medium uk-text-bold uk-text-break"
            style={{fontSize: 23, marginBottom: 15, marginTop: 10}}
          >{article.title}
          </h5>
          <p style={{color: '#212121'}}>
            {article.body}
          </p>
        </div>
        <div className="uk-padding-small" style={{paddingTop: 1, paddingBottom: 1}}>
          <a href="#" className="uk-button uk-button-text uk-padding-small">Love</a>
          <a href="#" className="uk-button uk-button-text uk-padding-small">Comment</a>
          <a href="#" className="uk-button uk-button-text uk-padding-small uk-text-right">Share</a>
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