import React, { Component } from 'react';
import Link from 'Components/Link';
import { withRouter } from 'react-router';
import Reputation from '../Reputation';
import Icon from '../Icons';
// import Badge from '../badges';
import { Button } from '../Buttons';
import addProtocolToString from 'Utils/normalizeUrl';
import { Card } from '../Card';
import AvatarImage from './image';
import {
  Container,
  CoverLink,
  CoverPhoto,
  CoverTitle,
  CoverSubtitle,
  CoverDescription,
  ExtLink,
  MessageButtonContainer,
} from '../Profile/style';
import { HoverWrapper } from './style';
import { User } from 'CustomTypings/schema';
import { compose } from 'react-apollo';

interface ProfileProps {
  user: User;
  source: string;
  currentUser: User;
  left: boolean;
  bottom: boolean;
  right: boolean;
}

class HoverProfile extends Component<ProfileProps> {

  render() {
    const { user, source, currentUser } = this.props;

    if (user) {
      return (
        <HoverWrapper
          top={this.props.top ? true : this.props.bottom ? false : true}
          bottom={this.props.bottom}
          right={this.props.right ? true : this.props.left ? false : true}
          left={this.props.left}
        >
          <Card
            style={{
              boxShadow: '0 4px 8px rgba(18, 22, 23, .25)',
              borderRadius: '16px',
            }}
          >
            <CoverPhoto url={user.avatar ? user.avatar : ''} />
            <CoverLink to={`/n/${user.username}`}>
              <AvatarImage
                src={source}
                size="64"
                style={{ boxShadow: '0 0 0 2px white', zIndex: '2' }}
              />
              <CoverTitle>{user.firstname + ' ' + user.lastname}</CoverTitle>
            </CoverLink>
            <CoverSubtitle center>
              @{user.username}
              <Reputation
                tipText={'Total rep across all communities'}
                size={'large'}
                reputation={
                  676
                }
              />
            </CoverSubtitle>

            {(user.firstname) && (
              <CoverDescription>
                {user.firstname && <p>{user.firstname}</p>}
                {user.firstname && (
                  <ExtLink>
                    <Icon glyph="link" size={24} />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={addProtocolToString(user.firstname)}
                    >
                      {user.firstname}
                    </a>
                  </ExtLink>
                )}
              </CoverDescription>
            )}

            {currentUser &&
              user &&
              currentUser.id !== user.id && (
                <MessageButtonContainer>
                  <Link
                    to={'/community/new'}
                    onClick={() => alert('ghg')}
                  >
                    <Button>Message</Button>
                  </Link>
                </MessageButtonContainer>
              )}
          </Card>
        </HoverWrapper>
      );
    }

    return null;
  }
}

export default compose(withRouter)(HoverProfile);
