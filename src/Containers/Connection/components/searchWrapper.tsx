import React from 'react';
import styled from 'styled-components';
import Link from 'Components/Link';
import { Transition, zIndex, Shadow, hexa } from 'Components/Globals';
import ViewSegment from 'Components/ThemedSection';
import { Button } from 'Components/Buttons';
import { Content, Tagline, Copy } from 'Containers/style';

const CommunitySearchWrapper = (props: any) => {
  const ThisContent = styled(Content)`
    flex-direction: column;
    width: 640px;
    align-content: center;
    align-self: center;
    margin-top: 40px;
    margin-bottom: 0;
    padding: 16px;

    @media (max-width: 640px) {
      margin-top: 80px;
      margin-bottom: 0;
      width: 100%;
    }
  `;

  const PrimaryCTA = styled(Button)`
    padding: 12px 16px;
    font-weight: 700;
    font-size: 14px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.bg.default};
    background-image: none;
    color: ${(props) => props.theme.brand.alt};
    transition: ${Transition.hover.off};
    z-index: ${zIndex.card};

    &:hover {
      background-color: ${(props) => props.theme.bg.default};
      color: ${(props) => props.theme.brand.default};
      box-shadow: ${Shadow.high} ${(props) => hexa(props.theme.bg.reverse, 0.5)};
      transition: ${Transition.hover.on};
    }
  `;

  const SecondaryContent = styled(ThisContent)`
    margin-top: 0;
    margin-bottom: 0;
  `;

  const ThisTagline = styled(Tagline)`
    margin-bottom: 0;
  `;

  const SecondaryTagline = styled(ThisTagline)`
    font-size: 20px;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 2px;
  `;

  const ThisCopy = styled(Copy)`
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 500;
    text-align: center;
    max-width: 640px;

    @media (max-width: 768px) {
      text-align: left;
    }
  `;

  const SecondaryCopy = styled(ThisCopy)`
    margin-bottom: 16px;
  `;

  return (
    <ViewSegment goop={3} background="constellations">
      <ThisContent>
        <ThisTagline>Search students you may know</ThisTagline>
        <ThisCopy>
          Search by typing their name or username
        </ThisCopy>
        {props.children}
        <SecondaryContent>
          <SecondaryTagline>Got a friend thats a student and is not on unizonn</SecondaryTagline>
        </SecondaryContent>
        <Link to={`/invite`}>
          <PrimaryCTA>Invite Friend</PrimaryCTA>
        </Link>
      </ThisContent>
    </ViewSegment>
  );
};

export default CommunitySearchWrapper;
