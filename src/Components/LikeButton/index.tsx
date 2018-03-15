import * as React from 'react';
import OverlayTriggerButton from 'Components/OverlayTriggerButton';

type Props = {
  liked: boolean,
  likeCount: number,
  likeableType?: string,
  likeableId?: string,
  disableOverlay?: false,
  overlayHeading?: string
};

export default class LikeButton extends React.Component<Props> {

  state = {
    liked: false,
    likeCount: 0
  };

  constructor(props: Props) {
    super(props);

    this.state = { 
      liked: this.props.liked,
      likeCount: this.props.likeCount
    };

    this.onUnlikeClick = this.onUnlikeClick.bind(this);
    this.onLikeClick = this.onLikeClick.bind(this);
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

  render () {
    return (
      <div className="like-button">
        <div className="like-button-wrapper">
          {this.renderLikeButton()}
        </div>
        {this.renderLikeCount()}
      </div>
    );
  }

  renderLikeButton() {
    if (this.state.liked) {
      return (
        <button className="unlike-button uk-text-center" onClick={this.onUnlikeClick}>
          <div className="uk-flex">
          <i className="fa fa-heart animated bounceIn" />
          <span className="uk-text-middle uk-text-bold">Unlike</span>
          </div>
        </button>
      );
    } else {
      return (
        <button className="like-button uk-text-center" onClick={this.onLikeClick}>
          <div className="uk-flex">
          <i className="fa fa-heart-o" />
          <span className="uk-text-middle uk-text-bold">Bravo</span>
          </div>
        </button>
      );
    }
  }

  renderLikeCount() {
    if (this.state.likeCount === 0 ) {
      return;
    }
    if (this.props.disableOverlay) {
      return <span className="like-count">{this.state.likeCount}</span>;
    }
    return (
      <span className="like-count" style={{ cursor: 'pointer' }}>
          <OverlayTriggerButton 
            text={this.state.likeCount.toString()} 
            overlayHeading={this.props.overlayHeading ? this.props.overlayHeading : ''}
          />
      </span>
    );
  }

  // tslint:disable-next-line:typedef
  onUnlikeClick(e) {
    // this.setState({ liked: data.liked, likeCount: data.count });
  }

  // tslint:disable-next-line:typedef
  onLikeClick(e) {
    // this.setState({ liked: data.liked, likeCount: data.count });
  }
}