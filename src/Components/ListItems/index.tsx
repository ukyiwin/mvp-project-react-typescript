import * as React from 'react';
import Link from 'Components/Link';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Icon from 'Components/Icons';
// import Badge from '../Badges';
import Avatar from '../Avatar/avatar';
import { convertTimestampToDate } from 'Utils/utils';
import Reputation from '../Reputation';
import {
  Wrapper,
  WrapperLi,
  Col,
  Row,
  Heading,
  Meta,
  Description,
  ActionContainer,
  BadgeContainer,
} from './style';
import { User } from 'CustomTypings/schema';

interface CommunityProps {
  user?: User;
  showDescription?: boolean;
  showMeta?: boolean;
  meta?: any;
  children?: any;
  reputation: number;
}

export class CommunityListItem extends React.Component<CommunityProps> {
  render() {
    const { user, showDescription, children, reputation } = this.props;

    return (
      <Wrapper>
        <Row>
          <Avatar
            user={user}
            radius={4}
            src={`${user.avatar ? user.avatar : ''}`}
            size={'32'}
            noLink
          />
          <Col style={{ marginLeft: '12px' }}>
            <Heading>{user.firstname ? user.firstname : ''} {user.lastname ? user.lastname : ''}</Heading>

            {/* greater than -1 because we want to pass the 0 to the component so it returns null */}
            {reputation > -1 && (
              <Meta>
                <Reputation size={'default'} reputation={reputation} />
              </Meta>
            )}
          </Col>
          <ActionContainer className={'action'}>{children}</ActionContainer>
        </Row>
        {showDescription && <Description>{user.bio ? user.bio : ''}</Description>}
      </Wrapper>
    );
  }
}

export const ChannelListItem = (props: any): any => {
  return (
    <Wrapper clickable={props.clickable}>
      <Row>
        <Col>
          <Heading>
            {props.contents.isPrivate ? (
              <Icon glyph={'channel-private'} size={32} />
            ) : (
              <Icon glyph={'channel'} size={32} />
            )}
            {props.contents.name}
            {props.contents.isArchived && ' (Archived)'}
          </Heading>
          <Meta>{props.meta && props.meta}</Meta>
        </Col>
        <ActionContainer className={'action'}>{props.children}</ActionContainer>
      </Row>
    </Wrapper>
  );
};

export const ThreadListItem = (props: any): any => {
  return (
    <Wrapper clickable={props.clickable}>
      <Row>
        <Col>
          <Heading>{props.contents.content.title}</Heading>
          <Meta>{props.meta}</Meta>
        </Col>
      </Row>
    </Wrapper>
  );
};

export const ChannelListItemLi = (props: any): any => {
  return (
    <WrapperLi clickable={props.clickable}>
      <Row>
        <Col>
          <Link to={`/${props.contents.community.slug}/${props.contents.slug}`}>
            <Heading>
              {props.contents.isPrivate ? (
                <Icon glyph={'channel-private'} size={32} />
              ) : (
                <Icon glyph={'channel'} size={32} />
              )}
              {props.contents.name}
            </Heading>
          </Link>
          <Meta>{props.meta}</Meta>
        </Col>
        <ActionContainer className={'action'}>{props.children}</ActionContainer>
      </Row>
    </WrapperLi>
  );
};

export const UserListItem = ({
  user,
  children,
  hideRep = false,
}: any): any => {
  const reputation = user.contextPermissions
    ? user.contextPermissions.reputation &&
      typeof user.contextPermissions.reputation === 'number'
    : user.reputation && typeof user.reputation === 'number'
      ? user.reputation
      : user.totalReputation && typeof user.totalReputation === 'number'
        ? user.totalReputation
        : '0';

  const role =
    user.contextPermissions && user.contextPermissions.isOwner
      ? 'Admin'
      : user.contextPermissions && user.contextPermissions.isModerator
        ? 'Moderator'
        : null;

  return (
    <Wrapper border>
      <Row>
        <Avatar
          radius={20}
          user={user}
          src={`${user.avatar}`}
          size={'40'}
          link={user.username ? `/n/${user.username}` : null}
        />
        <Col
          style={{
            marginLeft: '16px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Heading>
            {user.username ? (
              <Link to={`/n/${user.username}`}>{user.firstname}</Link>
            ) : (
              <span>{user.firstname}</span>
            )}
          </Heading>
          {!hideRep && (
            <Meta>
              {(user.totalReputation || user.contextPermissions) && (
                <Reputation reputation={reputation} />
              )}
            </Meta>
          )}
        </Col>
        <ActionContainer className={'action'}>{children}</ActionContainer>
      </Row>
    </Wrapper>
  );
};