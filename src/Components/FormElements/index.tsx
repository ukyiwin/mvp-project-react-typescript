import * as React from 'react';
import Avatar from '../Avatar/avatar';
import Icon from '../Icons';
import { FauxOutlineButton } from '../Buttons';

import {
  StyledLabel,
  StyledPrefixLabel,
  StyledInput,
  StyledTextArea,
  StyledUnderlineInput,
  StyledHiddenInput,
  StyledCheckboxWrapper,
  StyledError,
  StyledSuccess,
  PhotoInputLabel,
  StyledSelect,
  CoverInputLabel,
  InputOverlay,
  CoverImage,
} from './style';

interface InputProps {
  children?: any;
  inputType?: string;
  defaultValue?: string;
  value?: any;
  placeholder?: string;
  onChange?: any;
  autoFocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  dataCy?: string;
  user: any;
}

export const Input = (props: InputProps) => {
  return (
    <StyledLabel {...props}>
      {props.children}
      <StyledInput
        id={props.id}
        type={props.inputType}
        defaultValue={props.defaultValue}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        data-cy={props.dataCy}
      />
    </StyledLabel>
  );
};

export const Select = (props: InputProps) => {
  return (
      <StyledSelect
        {...props}
      />
  );
};

export const PhotoInput = (props: InputProps) => {
  return (
    <PhotoInputLabel user={props.user} size={props.size || 48}>
      <InputOverlay user={props.user}>
        <Icon glyph="photo" />
      </InputOverlay>
      <Avatar
        style={{ boxShadow: '0 0 0 2px white' }}
        size={props.size || 48}
        src={`${props.defaultValue}`}
        user={props.user}
      />
      <StyledHiddenInput
        type="file"
        id="file"
        name="file"
        accept={
          props.allowGif ? '.png, .jpg, .jpeg, .gif, .mp4' : '.png, .jpg, .jpeg'
        }
        multiple={false}
        onChange={props.onChange}
        data-cy={props.dataCy}
      />
    </PhotoInputLabel>
  );
};

export const CoverInput = (props: InputProps) => {
  return (
    <CoverInputLabel>
      <InputOverlay>
        <FauxOutlineButton
          color={'bg.default'}
          hoverColor={'bg.default'}
          icon={'photo'}
        >
          Add Cover Photo
        </FauxOutlineButton>
      </InputOverlay>
      <CoverImage
        src={`${props.defaultValue}${props.preview ? '' : '?w=320&dpr=2'}`}
        role="presentation"
      />
      <StyledHiddenInput
        type="file"
        id="file"
        name="file"
        accept={
          props.allowGif ? '.png, .jpg, .jpeg, .gif, .mp4' : '.png, .jpg, .jpeg'
        }
        multiple={false}
        onChange={props.onChange}
        data-cy={props.dataCy}
      />
    </CoverInputLabel>
  );
};

export const Checkbox = (props: InputProps) => {
  return (
    <StyledLabel>
      <StyledCheckboxWrapper
        disabled={props.disabled || false}
        align={props.align || 'center'}
        data-cy={`${props.dataCy}-${props.checked ? 'checked' : 'unchecked'}`}
      >
        {props.checked ? <Icon glyph="checkmark" /> : <Icon glyph="checkbox" />}
        <StyledHiddenInput
          type="checkbox"
          id={props.id}
          checked={props.checked}
          disabled={props.disabled || false}
          onChange={props.onChange}
          data-cy={props.dataCy}
        />
        {props.children}
      </StyledCheckboxWrapper>
    </StyledLabel>
  );
};

export const TextArea = (props: InputProps) => {
  return (
    <StyledLabel>
      {props.children}
      <StyledTextArea
        id={props.id}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        autoFocus={props.autoFocus}
        data-cy={props.dataCy}
      />
    </StyledLabel>
  );
};

export class UnderlineInput extends React.Component<any> {
  render() {
    return (
      <StyledPrefixLabel disabled={this.props.disabled}>
        {this.props.children}
        <StyledUnderlineInput
          type="text"
          id={this.props.id}
          placeholder={this.props.placeholder}
          value={this.props.value || this.props.defaultValue}
          onChange={this.props.onChange}
          autoFocus={this.props.autoFocus}
          disabled={this.props.disabled}
          data-cy={this.props.dataCy}
        />
      </StyledPrefixLabel>
    );
  }
}

export const Error = (props: any) => {
  return <StyledError data-cy={props.dataCy}>{props.children}</StyledError>;
};

export const Success = (props: any) => {
  return <StyledSuccess data-cy={props.dataCy}>{props.children}</StyledSuccess>;
};
