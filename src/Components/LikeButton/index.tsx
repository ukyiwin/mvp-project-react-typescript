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
}

export default class LikeButton extends React.Component<Props> {
    state = {
        liked: false,
        likeCount: 0,
    };

    constructor(props: Props) {
        super(props);
    }

    componentWillMount() {
        /*const { likeableType, likeableId } = this.props;
    this.token = PubSub.subscribe('LikeButton:onClick', (msg, data) => {
      if (likeableType === data.type && likeableId === data.id) {
        this.setState({ liked: data.liked, likeCount: data.count });
      }
    });*/
    }

    componentWillUnmount() {
        // PubSub.unsubscribe(this.token);
    }

    render() {
      return (
        this.renderLikeButton()
      );
    }

    renderLikeButton() {
      if (this.props.link) {
        return (
          <Link to={this.props.link} className="response-count uk-flex uk-inline uk-margin-left uk-margin-right">
            <Icon glyph={this.props.frontIcon} size={this.props.size ? this.props.size : 24} />
            {this.props.text ? (<div className="uk-visible@s">{this.props.text + ' ' + this.props.likeCount}</div>) : ''}
          </Link>
        );
      } else {
      if (this.props.buttonType === 'two') {
        if (!this.props.liked) {
            return (
              <a className="response-count uk-flex uk-inline" onClick={() => this.props.frontClick()}>
                <Icon glyph={this.props.frontIcon} size={this.props.size ? this.props.size : 24} />
                {this.props.text ? (<div className="uk-visible@s">{this.props.text + ' ' 
                + (this.props.likeCount ? this.props.likeCount : '')}</div>) : ''}
              </a>
            );
        } else {
            return (
              <a className="response-count uk-flex uk-inline" onClick={() => this.props.backClick()}>
                <Icon glyph={this.props.backIcon} size={this.props.size ? this.props.size : 24} />
                {this.props.text ? (<div className="uk-visible@s">{this.props.text + ' ' 
                +  (this.props.likeCount ? this.props.likeCount : '')}</div>) : ''}
              </a>
            );
        }
      } else {
        return (
          <a className="response-count uk-flex uk-inline" onClick={() => this.props.frontClick()}>
            <Icon glyph={this.props.frontIcon} size={this.props.size ? this.props.size : 24} />
            {this.props.text ? (<div className="uk-visible@s">{this.props.text + ' ' 
            + (this.props.likeCount ? this.props.likeCount : '')}</div>) : ''}
          </a>
        );
      }

      }
        
    }
}
