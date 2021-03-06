import * as React from 'react';
import { Link } from 'react-router-dom';
import OverlayTriggerButton from 'Components/OverlayTriggerButton';
import Icon from 'Components/Icons';

interface Props {
    liked?: boolean;
    likeCount?: number | string;
    buttonType?: string;
    text?: string;
    frontIcon: string;
    link?: string;
    backIcon?: string;
    size?: number;
    backClick?: any;
    frontClick?: any;
    style?: object;
}

export default class LikeButton extends React.Component<Props> {

    render() {
      return (
        this.renderLikeButton()
      );
    }

    renderLikeButton() {
      const truthy = this.props.liked ? (this.props.liked === true ? true : false) : false;
      if (this.props.link) {
        return (
          <Link
            to={this.props.link}
            style={this.props.style}
            className="response-count uk-flex uk-inline uk-margin-left uk-margin-right"
          >
            <Icon glyph={this.props.frontIcon} size={this.props.size ? this.props.size : 24} />
            {this.props.text ? (<div className="uk-visible@s">{this.props.text + ' ' + this.props.likeCount}</div>) : ''}
          </Link>
        );
      } else {
      if (this.props.buttonType === 'two') {
        if (truthy) {
          return (
            <a 
              className="response-count uk-flex uk-inline uk-animation-toggle uk-animation-shake"
              onClick={() => this.props.backClick()}
              style={this.props.style}
            >
              <Icon glyph={this.props.backIcon} size={this.props.size ? this.props.size : 24} />
              {this.props.text ? (<div className="uk-visible@s">{this.props.text + ' ' 
              +  (this.props.likeCount ? this.props.likeCount : '')}</div>) : ''}
            </a>
          );
        } else {
          return (
            <a 
              className="response-count uk-flex uk-inline uk-animation-toggle uk-animation-shake"
              onClick={() => this.props.frontClick()}
              style={this.props.style}
            >
              <Icon glyph={this.props.frontIcon} size={this.props.size ? this.props.size : 24} />
              {this.props.text ? (<div className="uk-visible@s">{this.props.text + ' ' 
              + (this.props.likeCount ? this.props.likeCount : '')}</div>) : ''}
            </a>
          );
        }
      } else {
        return (
          <a
            className="response-count uk-flex uk-inline"
            onClick={() => this.props.frontClick()}
            style={this.props.style}
          >
            <Icon glyph={this.props.frontIcon} size={this.props.size ? this.props.size : 24} />
            {this.props.text ? (<div className="uk-visible@s">{this.props.text + ' ' 
            + (this.props.likeCount ? this.props.likeCount : '')}</div>) : ''}
          </a>
        );
      }

      }
        
    }
}
