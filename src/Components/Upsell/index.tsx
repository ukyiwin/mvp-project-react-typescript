import * as React from 'react';
import {
  Title,
  MiniTitle,
  Subtitle,
  MiniSubtitle,
  Actions,
  NullCol,
  UpgradeError,
  Profile,
  Cost,
  LargeEmoji,
  UpsellIconContainer,
  SignupButton,
  SignupFooter,
  SigninLink,
} from './style';

interface NullStateProps {
  bg?: string;
  heading?: string;
  copy?: string;
  icon?: string;
  children?: any;
}
export const NullState = (props: NullStateProps) => (
  <NullCol bg={props.bg}>
    {props.icon && <Icon glyph={props.icon} size={64} />}
    {props.heading && <Title>{props.heading}</Title>}
    {props.copy && <Subtitle>{props.copy}</Subtitle>}
    {props.children}
  </NullCol>
);