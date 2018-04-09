import * as React from 'react';
import styled from 'styled-components';
import Link from 'Components/Link';
import Icon from 'Components/Icons';
import {
  Shadow,
  Gradient,
  FlexCol,
  Transition,
  HorizontalRule,
} from 'Components/Globals';
import Search from 'Components/Search';
import Section from 'Components/ThemedSection';
import { Conversation, Discover } from 'Components/Illustrations';
import {
  Tagline,
  Copy,
  Bullets,
  Bullet,
  BulletHeading,
  BulletTitle,
  BulletCopy,
  Flexer,
  PrimaryCTA,
  SecondaryCTA,
  Content,
} from 'Containers/style';
import Avatar from 'Components/Avatar';

type Props = object;

export const HeaderSearch = (props: Props) => {
  const ThisContent = styled(Content)`
    flex-direction: column;
    width: 640px;
    align-content: center;
    align-self: center;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 16px;

    @media (max-width: 640px) {
      margin-top: 80px;
      margin-bottom: 0;
      width: 100%;
    }
  `;

  const ThisTagline = styled(Tagline)`
    margin-bottom: 16px;
  `;

  const ThisCopy = styled(Copy)`
    font-size: 18px;
    margin-bottom: 32px;
    font-weight: 500;
    text-align: center;
    max-width: 640px;

    @media (max-width: 768px) {
      text-align: left;
    }
  `;

  return (
    <Search />
  );
};

export default HeaderSearch;