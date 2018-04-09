import React from 'react';
import compose from 'recompose/compose';
import styled from 'styled-components';
import { FlexCol } from '../Globals';

const StyledCard = styled(FlexCol)`
  background: ${({ theme }) => theme.bg.default};
  position: relative;
  width: 100%;
  max-width: 100%;
  background-clip: padding-box;
  overflow: visible;
  flex: none;

  + div,
  + span {
    margin-top: 16px;

    @media (max-width: 768px) {
      margin-top: 2px;
    }
  }

  @media (max-width: 768px) {
    border-radius: 0;
    box-shadow: none;
  }
`;

const CardPure = (props: any): any => (
  <StyledCard {...props}>{props.children}</StyledCard>
);

export const Card = compose()(CardPure);
export default Card;
