/* tslint:disable */
import styled, { css } from 'styled-components';
import { Gradient, Shadow, Transition, hexa } from '../Globals';

const baseButton = css`
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  white-space: nowrap;
  word-break: keep-all;
  transition: ${Transition.hover.off};
  cursor: pointer;
  font-size: ${(props: any) => (props.large ? '18px' : '14px')};
  line-height: 1;
  position: relative;
  text-align: center;
  padding: ${(props: any) =>
    props.icon
      ? props.large ? '8px 12px' : '4px 8px'
      : props.large ? '16px 32px' : '12px 16px'};

  &:hover {
    transition: ${Transition.hover.on};
    box-shadow: ${(props: any) =>
      props.disabled
        ? 'none'
        : `${Shadow.high} ${hexa(props.theme.bg.reverse, 0.15)}`};
    opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  }

  /* if an icon and label are both present, add space around the label*/
  div + span,
  span + span {
    margin: 0 8px;
  }
`;

export const Label = styled.span`
  display: block;
  flex: 0 0 auto;
  line-height: inherit;
  color: inherit;
  ${(props: any) => (props.loading && !props.hasIcon ? 'opacity: 0;' : 'opacity: 1;')};
  align-self: center;
  margin: auto;
`;

export const StyledSolidButton = styled.button`
  ${baseButton} background-color: ${(props: any) =>
  props.disabled
    ? props.theme.bg.inactive
    // tslint:disable-next-line:no-eval
    : eval(`props.theme.${props.color ? props.color : `brand.alt`}`)};
  background-image: ${(props: any) =>
    props.disabled || props.gradientTheme === 'none'
      ? 'none'
      : props.gradientTheme
        ? Gradient(
            // tslint:disable-next-line:no-eval
            eval(`props.theme.${props.gradientTheme}.alt`),
            // tslint:disable-next-line:no-eval
            eval(`props.theme.${props.gradientTheme}.default`)
          )
        : Gradient(props.theme.brand.alt, props.theme.brand.default)};
  color: ${(props: any) => props.theme.text.reverse};

  &:hover {
    background-color: ${(props: any) =>
      props.disabled
        ? props.theme.bg.inactive
        // tslint:disable-next-line:no-eval
        : eval(
            `props.theme.${props.hoverColor ? props.hoverColor : 'brand.alt'}`
          )};
  }

  &:active {
    box-shadow: ${(props: any) =>
      props.disabled
        ? 'none'
        : `${Shadow.low} ${hexa(props.theme.bg.reverse, 0.15)}`};
  }
`;

export const StyledTextButton = styled(StyledSolidButton)`
  background: transparent;
  background-image: none;
  font-weight: 600;
  color: ${(props) =>
    props.disabled
      ? props.theme.bg.inactive
      // tslint:disable-next-line:no-eval
      : eval(`props.theme.${props.color ? props.color : 'text.alt'}`)};
  transition: color 0.1s ease-out, box-shadow 0.2s ease-out 0.1s, border-radius 0.2s ease-out, padding: 0.2s ease-out;
  ${(props: any) =>
    props.loading
      ? css`
          justify-content: center;
        `
      : css`
          justify-content: flex-start;
        `}

  &:hover {
    background-color: transparent;
    box-shadow: none;
    color: ${(props: any) =>
      props.disabled
        ? props.theme.bg.inactive
        // tslint:disable-next-line:no-eval
        : eval(
            `props.theme.${props.hoverColor ? props.hoverColor : 'brand.alt'}`
          )};
    transition: color 0.1s ease-in, box-shadow 0.2s ease-in 0.1s, padding 0.2s ease-in;
  }
`;

export const StyledOutlineButton = styled(StyledTextButton)`
  box-shadow: inset 0 0 0 1px
    ${(props: any) =>
      props.disabled
        ? props.theme.bg.inactive
        // tslint:disable-next-line:no-eval
        : eval(`props.theme.${props.color ? props.color : 'brand.default'}`)};
  color: ${(props: any) =>
    props.disabled
      ? props.theme.bg.inactive
      // tslint:disable-next-line:no-eval
      : eval(`props.theme.${props.color ? props.color : 'brand.default'}`)};
  transition: ${Transition.hover.on};

  &:hover {
    background-color: transparent;
    color: ${(props: any) =>
      props.disabled
        ? props.theme.bg.inactive
        // tslint:disable-next-line:no-eval
        : eval(
            `props.theme.${props.hoverColor ? props.hoverColor : 'brand.alt'}`
          )};
    box-shadow: inset 0 0 0 1px
      ${(props: any) =>
        props.disabled
          ? props.theme.bg.inactive
          // tslint:disable-next-line:no-eval
          : eval(
              `props.theme.${props.hoverColor ? props.hoverColor : 'brand.alt'}`
            )};
    transition: ${Transition.hover.on};
  }
`;

export const StyledFauxOutlineButton = styled.span`
  ${baseButton} box-shadow: inset 0 0 0 1px ${(props: any) =>
  props.disabled
    ? props.theme.bg.inactive
    // tslint:disable-next-line:no-eval
    : eval(`props.theme.${props.color ? props.color : 'brand.default'}`)};
  color: ${(props: any) =>
    props.disabled
      ? props.theme.bg.inactive
      // tslint:disable-next-line:no-eval
      : eval(`props.theme.${props.color ? props.color : 'brand.default'}`)};
  transition: ${Transition.hover.on};

  &:hover {
    background-color: transparent;
    color: ${(props: any) =>
      props.disabled
        ? props.theme.bg.inactive
        // tslint:disable-next-line:no-eval
        : eval(
            `props.theme.${props.hoverColor ? props.hoverColor : 'brand.alt'}`
          )};
    box-shadow: inset 0 0 0 1px
      ${(props: any) =>
        props.disabled
          ? props.theme.bg.inactive
          // tslint:disable-next-line:no-eval
          : eval(
              `props.theme.${props.hoverColor ? props.hoverColor : 'brand.alt'}`
            )};
    transition: ${Transition.hover.on};
  }
`;

export const StyledIconButton = styled.button`
  ${baseButton} padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  color: ${(props: any) =>
    props.disabled
      ? props.theme.bg.inactive
      : props.color
        // tslint:disable-next-line:no-eval
        ? eval(`props.theme.${props.color}`)
        : props.theme.text.alt};
  opacity: ${(props: any) => (props.opacity ? props.opacity : 1)};

  &:hover {
    color: ${(props: any) =>
      props.disabled
        ? props.theme.bg.inactive
        : props.hoverColor
          // tslint:disable-next-line:no-eval
          ? eval(`props.theme.${props.hoverColor}`)
          : props.color
            // tslint:disable-next-line:no-eval
            ? eval(`props.theme.${props.color}`)
            : props.theme.brand.alt};
    transform: ${(props: any) => (props.disabled ? 'none' : 'scale(1.05)')};
    box-shadow: none;
    opacity: 1;
  }
`;

export const SpinnerContainer = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
`;

export const StyledButtonRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  > button,
  > a {
    margin: 8px;
  }
`;
