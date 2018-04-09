import * as React from 'react';
import styled from 'styled-components';
import { Spinner, FlexCol } from '../Globals';
import {
  LoadingScreenContainer,
  ShimmerList,
  ShimmerListLite,
  ShimmerInboxThread,
  ShimmerThread,
  ShimmerThreadDetail,
  ShimmerProfile,
  ShimmerProfileLite,
  ShimmerListItem,
  ShimmerDM,
  ShimmerBubble,
  ShimmerChat,
  ShimmerInboxComposer,
  ShimmerComposer,
  ShimmerBase,
  ShimmerLine,
  ShimmerSelect,
  Cover,
  LoadingOverlay,
  LoadingNavbarContainer,
  LogoLink,
  Logo,
  GridProfile,
  Meta,
  GridContent,
  LoadingCoverPhoto,
} from './style';

const LoadingContainer = styled.div`
  display: flex;
  flex: auto;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Loading = ({
  size,
  color,
}: {
  size?: number,
  color?: string,
}): any => (
  <LoadingContainer>
    <Spinner size={size} color={color} />
  </LoadingContainer>
);

export const LoadingComponent = () => {
    return <div className="uk-position-center">
                <div className="loader uk-margin-small">
                    <div className="bullet" />
                    <div className="bullet" />
                    <div className="bullet" />
                    <div className="bullet" />
                </div>
            </div>;
};

export default LoadingComponent;
