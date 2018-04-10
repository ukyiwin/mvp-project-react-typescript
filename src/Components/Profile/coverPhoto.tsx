import React from 'react';
import styled from 'styled-components';
import Link from 'Components/Link';
import { ProfileHeaderAction } from './style';
import { optimize } from 'Utils/images';

const PhotoContainer = styled.div`
  grid-area: cover;
  position: relative;
  width: 100%;
  flex: 0 0 ${(props: any) => (props.large ? '320px' : '96px')};
  background-color: ${({ theme }) => theme.bg.reverse};
  background-image: ${(props: any) =>
    props.coverURL
      ? `url("${optimize(props.coverURL, {
          w: props.large ? 1024 : 320,
          dpr: 2,
        })}")`
      : 'none'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${(props: any) => (props.large ? '0' : '0px 0px 0 0')};

  @media (max-width: 768px) {
    flex: 0 0 ${(props: any) => (props.large ? '160px' : '64px')};
    border-radius: 0;
  }
`;

const CoverAction = styled(ProfileHeaderAction)`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const CoverPhoto = (props: any) => {
  if (props.user) {
    return (
      <PhotoContainer coverURL={props.user.coverPhoto}>
        {props.currentUser && props.currentUser.id === props.user.id ? (
          <Link to={`../n/${props.user.username}/settings`}>
            <CoverAction
              glyph="settings"
              color="text.reverse"
              opacity="0.5"
              hoverColor="text.reverse"
              tipText={`Edit profile`}
              tipLocation={'left'}
            />
          </Link>
        ) : props.currentUser ? (
          <CoverAction
            glyph="message-fill"
            color="text.reverse"
            hoverColor="text.reverse"
            onClick={props.onClick}
            tipText={`Message ${props.user.firstname}`}
            tipLocation={'left'}
          />
        ) : null}
        {props.children}
      </PhotoContainer>
    );
  } else {
    return (
      <PhotoContainer large coverURL={props.src}>
        {props.children}
      </PhotoContainer>
    );
  }
};
