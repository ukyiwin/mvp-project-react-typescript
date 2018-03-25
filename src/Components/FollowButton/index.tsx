import * as React from 'react';

interface Props {
    liked: boolean;
}

export default class FollowButton extends React.Component<Props> {
    state = {
        liked: false
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            liked: this.props.liked
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

    render() {
      if (this.state.liked) {
        return (
            <button className="btn btn-primary" onClick={this.onUnlikeClick}>
                Connected
            </button>
        );
      } else {
          return (
              <button className="btn btn-default" onClick={this.onLikeClick}>
                  + Connect
              </button>
          );
      }
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
