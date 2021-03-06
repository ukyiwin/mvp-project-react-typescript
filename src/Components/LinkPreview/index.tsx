import React, { Component } from 'react';
import Icon from '../Icons';
import { FlexCol } from '../Globals';
import { truncate } from 'Utils/utils';
import {
  LinkPreviewContainer,
  LinkPreviewImage,
  LinkPreviewTextContainer,
  MetaTitle,
  MetaUrl,
  Close,
  LinkPreviewSkeleton,
  AnimatedBackground,
  CoverTop,
  CoverMiddle,
  CoverMiddleMiddle,
  CoverMiddleTopRight,
  CoverLeft,
  CoverMiddleBottomRight,
  CoverBottom,
  CoverMiddleMiddleBottomRight,
} from './style';

export class LinkPreview extends Component<any> {
  remove = (e) => {
    e.preventDefault();
    this.props.remove();
  }

  render() {
    const { data: { image, title, url, trueUrl }, editable, margin } = this.props;
    title = title ? truncate(title, 72) : '';
    if (!title) { return null; }
    if (!url && !trueUrl) { return null; }
    return (
      <LinkPreviewContainer
        size={this.props.size}
        padding={image}
        target="_blank"
        rel="noopener"
        href={url || trueUrl}
        margin={margin}
      >
        {editable && (
          <Close onClick={this.remove}>
            <Icon size={16} glyph="view-close" subtle color="warn.alt" />
          </Close>
        )}

        {image && <LinkPreviewImage image={image} />}

        <LinkPreviewTextContainer padding={image}>
          <FlexCol>{title && <MetaTitle>{title}</MetaTitle>}</FlexCol>

          {(url || trueUrl) && <MetaUrl>{url || trueUrl}</MetaUrl>}
        </LinkPreviewTextContainer>
      </LinkPreviewContainer>
    );
  }
}

export const LinkPreviewLoading = () => {
  return (
    <LinkPreviewSkeleton>
      <AnimatedBackground />
      <CoverLeft />
      <CoverTop />
      <CoverMiddle />
      <CoverMiddleMiddle />
      <CoverMiddleTopRight />
      <CoverMiddleBottomRight />
      <CoverMiddleMiddleBottomRight />
      <CoverBottom />
    </LinkPreviewSkeleton>
  );
};
