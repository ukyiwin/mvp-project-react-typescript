import styled, { css } from 'styled-components';
import { zIndex } from '../Globals';
import Link from '../Link';
import { ProfileHeaderAction } from '../Profile/style';

export const HoverWrapper = styled.div`
  display: none;
  position: absolute;
  top: ${(props: any) => (props.bottom ? '100%' : 'auto')};
  bottom: ${(props: any) => (props.top ? '100%' : 'auto')};
  right: ${(props: any) => (props.left ? '0' : 'auto')};
  left: ${(props: any) => (props.right ? '0' : 'auto')};
  z-index: ${zIndex.tooltip};
  width: 256px;
  padding-bottom: 12px;

  &:hover {
    display: inline-block;
  }
`;

export const Status = styled.div`
  position: relative;
  display: inline-block;
  width: ${(props: any) => (props.size ? `${props.size}px` : '32px')};
  height: ${(props: any) => (props.size ? `${props.size}px` : '32px')};
  border-radius: ${(props: any) => (props.community ? '25%' : '100%')};
  border: none;
  background-color: ${({ theme }) => theme.bg.default};

  ${(props: any) =>
    props.mobileSize &&
    css`
      @media (max-width: 768px) {
        width: ${(props: any) => `${props.mobileSize}px`};
        height: ${(props: any) => `${props.mobileSize}px`};
      }
    `};

  &:after {
    content: '';
    position: absolute;
    display: ${(props: any) => (props.isOnline ? 'inline-block' : 'none')};
    width: ${(props: any) => (props.onlineSize === 'large' ? '8px' : '6px')};
    height: ${(props: any) => (props.onlineSize === 'large' ? '8px' : '6px')};
    background: ${(props: any) => props.theme.success.alt};
    border-radius: 100%;
    border: 2px solid ${(props: any) => props.theme.text.reverse};
    bottom: ${(props: any) =>
      props.onlineSize === 'large'
        ? '0'
        : props.onlineSize === 'small' ? '-1px' : '1px'};
    right: ${(props: any) =>
      props.onlineSize === 'large'
        ? '0'
        : props.onlineSize === 'small' ? '-6px' : '-3px'};
    z-index: ${zIndex.avatar};
  }

  &:hover {
    ${HoverWrapper} {
      display: inline-block;
    }
  }
`;

export const AvatarLink = styled(Link)`
  display: flex;
  flex: none;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  border-radius: 100%;
`;

export const AvatarNoLink = AvatarLink.withComponent('div');

export const CoverAction = styled(ProfileHeaderAction)`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: ${zIndex.tooltip + 1};
`;

export const Img = styled.img`
  display: inline-block;
  width: ${(props: any) => (props.size ? `${props.size}px` : '32px')};
  height: ${(props: any) => (props.size ? `${props.size}px` : '32px')};
  border-radius: ${(props: any) => (props.community ? '25%' : '100%')};
  object-fit: cover;

  ${(props: any) =>
    props.mobileSize &&
    css`
      @media (max-width: 768px) {
        width: ${(props: any) => `${props.mobileSize}px`};
        height: ${(props: any) => `${props.mobileSize}px`};
      }
    `};
`;

export const ImgPlaceholder = styled.div`
  display: inline-block;
  background-color: ${(props: any) => props.theme.bg.border};
  width: ${(props: any) => (props.size ? `${props.size}px` : '32px')};
  height: ${(props: any) => (props.size ? `${props.size}px` : '32px')};
  border-radius: ${(props: any) => (props.community ? '25%' : '100%')};
  object-fit: cover;

  ${(props: any) =>
    props.mobileSize &&
    css`
      @media (max-width: 768px) {
        width: ${(props) => `${props.mobileSize}px`};
        height: ${(props) => `${props.mobileSize}px`};
      }
    `};
`;
