import * as React from 'react';
import replace from 'string-replace-to-array';
import Card from '../Card';
import Link from 'Components/Link';
import { connect } from 'react-redux';
import addProtocolToString from 'Utils/normalizeUrl';
import Icon from '../Icons';
import Avatar from '../Avatar/avatar';
import { Button } from 'semantic-ui-react';
import {
  ProfileHeader,
  ProfileHeaderLink,
  ProfileHeaderMeta,
  ProfileHeaderAction,
  Title,
  FullTitle,
  FullProfile,
  Subtitle,
  FullDescription,
  ExtLink,
  ProfileCard,
  Container,
  CoverPhoto,
  CoverLink,
  CoverTitle,
  CoverDescription,
  ButtonContainer,
} from './style';
import { User, Channels } from 'CustomTypings/schema';

interface Props {
  onJoin?: any;
  joinedCommunity?: any;
  joinedFirstCommunity?: any;
  community?: Channels;
  profileSize?: string;
  currentUser?: User;
}

class CommunityWithData extends React.Component<Props> {
  onJoin = () => {
    this.props.joinedCommunity && this.props.joinedCommunity(1, false);
    this.props.onJoin && this.props.onJoin();
  }

  onLeave = () => {
    this.props.joinedCommunity && this.props.joinedCommunity(-1, false);
  }

  render() {
    const {
      community,
      profileSize,
      currentUser,
    } = this.props;
    const MARKDOWN_LINK = /(?:\[(.*?)\]\((.*?)\))/g;

    const renderDescriptionWithLinks = (text) => {
      return replace(text, MARKDOWN_LINK, (fullLink, text, url) => (
        <a href={url} target="_blank" rel="noopener nofollower" key={url}>
          {text}
        </a>
      ));
    };

    return(
      <Container style={{maxWidth: 400}}  className="ui">
        <CoverPhoto url={community ? community.avatar.url : ''} />
        <CoverLink to={`/${community ? community.slug : ''}`}>
          <Avatar
            src={community ? community.avatar.url : ''}
            channel={community ? community : null}
            size={'64'}
            style={{
              boxShadow: '0 0 0 2px #fff',
              flex: '0 0 64px',
              marginRight: '0',
            }}
          />
          <CoverTitle>{community ? community.title : ''}</CoverTitle>
        </CoverLink>

        <CoverDescription>{community ? community.description : ''}</CoverDescription>

        <Button.Group size="small">
              <Button positive>+ Connect</Button>
              <Button.Or />
              <Button information>Message</Button>
        </Button.Group>
      </Container>
    );
  }
}

export default CommunityWithData;
