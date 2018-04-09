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

export const CommunitySearch = (props: Props) => {
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
    <Section goop={4} background="bright">
      <ThisContent>
        <ThisTagline>Find a conversation for you!</ThisTagline>
        <ThisCopy>
          Try searching for topics like theater or science!
        </ThisCopy>
        <Search />
      </ThisContent>
    </Section>
  );
};

export const Yours = (props: Props) => {
  const ThisContent = styled(Content)`
    margin: 60px 16px 16px;
    font-size: 18px;
    align-items: center;
    text-align: left;
  `;

  const ThisTagline = styled(Tagline)`
    text-align: center;
    align-self: center;
  `;

  const ThisSecondaryCTA = styled(SecondaryCTA)`
    margin-left: 16px;
    font-size: 16px;
    border: 2px solid ${(props) => props.theme.text.reverse};

    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 16px;
    }
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    font-size: 16px;
    color: ${(props) => props.theme.text.default};

    &:hover {
      color: ${(props) => props.theme.brand.alt};
      box-shadow: ${Shadow.high} #000;
    }
  `;

  const Actions = styled(Flexer)`
    margin-top: 32px;
    justify-content: center;

    > a {
      display: inline-block;
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  `;

  const Quotes = styled.div`
    display: flex;
    flex: auto;
    align-items: start;
    justify-content: center;
    padding: 40px 0;
    max-width: 100vw;
    flex-wrap: wrap;
    margin-left: -32px;

    @media (max-width: 768px) {
      display: none;
    }
  `;

  const Quote = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    width: 400px;
    min-width: 320px;
    flex: none;
    box-shadow: 0 8px 16px #000;
    color: ${(props) => props.theme.text.default};
    position: relative;
    padding: 24px;
    transition: ${Transition.hover.off};
    margin-top: 32px;
    margin-left: 32px;

    &:hover {
      box-shadow: 0 0px 32px ${(props) => props.theme.brand.alt};
      transition: ${Transition.hover.on};

      > div {
        color: ${(props) => props.theme.brand.alt};
        transition: ${Transition.hover.on};
      }
    }
  `;

  const Pullquote = styled.p`
    padding: 0;
    padding-left: 16px;
    line-height: 1.6;
    margin: 16px 8px 8px 8px;
    font-size: 16px;
    position: relative;
    z-index: 2;
  `;

  const Signature = styled(Link)`
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    margin-left: 8px;

    div {
      margin-right: 8px;
    }

    span {
      color: ${(props) => props.theme.text.alt};
      font-weight: 400;
      margin-left: 4px;
    }
  `;

  const Rule = styled(HorizontalRule)`
    color: ${(props) => props.theme.brand.border};
    transition: ${Transition.hover.off};

    hr {
      color: inherit;
      border-color: currentColor;
    }
  `;

  return (
    <Section goop={0} background={'reverse'}>
      <ThisContent>
        <FlexCol>
          <ThisTagline>What some Unizonners are saying.</ThisTagline>
          
          <Actions>
            <Link to="/login">
              <ThisPrimaryCTA icon="welcome">Join Unizonn</ThisPrimaryCTA>
            </Link>
            <Link to="/forum">
              <ThisSecondaryCTA icon="explore">
                Conversation
              </ThisSecondaryCTA>
            </Link>
          </Actions>
        </FlexCol>
      </ThisContent>
    </Section>
  );
};