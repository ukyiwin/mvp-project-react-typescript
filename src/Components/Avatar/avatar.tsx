import React, { Component } from 'react';
import { optimize } from 'Utils/images';
import HoverProfile from './hoverProfile';
import AvatarImage from './image';
import { Status, AvatarLink, AvatarNoLink } from './style';

const LinkHandler = (props) => {
  if (props.link && !props.noLink) {
    return <AvatarLink to={props.link}>{props.children}</AvatarLink>;
  } else {
    return <AvatarNoLink>{props.children}</AvatarNoLink>;
  }
};

interface AvatarProps {
  src: string;
  community?: any;
  user?: any;
  size?: string;
  mobileSize?: string;
  link?: string;
  noLink?: boolean;
  showProfile?: boolean;
}

interface State {
  isHovering: boolean;
}

export default class Avatar extends Component<AvatarProps, State> {
  state = { isHovering: false };
  hover = () =>
    this.setState(({ isHovering }) => ({ isHovering: !isHovering }))

  render() {
    const {
      src,
      user,
      size = '32',
      mobileSize,
      showProfile,
    } = this.props;
    const { isHovering } = this.state;

    const optimizedAvatar =
      src &&
      optimize(src, {
        w: size,
        dpr: '2',
        format: 'png',
      });
    const userFallback = 'Assets/img/default_avatar.svg';

    let source;

    // tslint:disable-next-line:prefer-conditional-expression
    source = [optimizedAvatar, userFallback];

    return (
      <Status
        size={size}
        mobileSize={mobileSize}
        {...this.props}
        onMouseEnter={this.hover}
        onMouseLeave={this.hover}
      >
        <LinkHandler {...this.props}>
          <AvatarImage
            src={optimizedAvatar}
            size={size}
            mobileSize={mobileSize}
          />
        </LinkHandler>
        {showProfile &&
          isHovering && <HoverProfile source={source} {...this.props} />}
      </Status>
    );
  }
}
