import styled from 'styled-components';
import { Tooltip, zIndex } from '../Globals';

export const ReputationWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: none;
  color: ${(props) => props.theme.text.alt};
  cursor: pointer;
  position: relative;
  z-index: ${zIndex.fullScreen};
  ${Tooltip};
  width: fit-content;
`;

export const ReputationLabel = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${(props) => props.theme.text.alt};
`;
