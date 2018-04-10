import * as React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Checkbox } from 'Components/FormElements';
import Icon from 'Components/Icons';
import {
  StyledCard,
  LargeListHeading,
  ListHeader,
  ListContainer,
  Notice,
  InlineIcon,
  Description,
} from 'Components/ListItems/style';
import { EmailListItem, CheckboxContent } from '../style';
import { User } from 'CustomTypings/schema';

const parseNotificationTypes = (notifications) => {
  const types = Object.keys(notifications.types).filter(
    (type) => type !== '__typename'
  );
  return types.map((type) => {
    if (!notifications.types[type]) { return {}; }
    switch (type) {
      case 'newMessageInThreads':
        return {
          type,
          emailValue: notifications.types[type].email,
          label:
            'Email me when people respond in the threads and private conversations where I\'m active - this includes direct messages.',
          display: 'flex-start',
        };
      case 'newDirectMessage':
        return {
          type,
          emailValue: notifications.types[type].email,
          label: 'Email me when I receive new direct messages.',
          display: 'center',
        };
      case 'newThreadCreated':
        return {
          type,
          emailValue: notifications.types[type].email,
          label:
            'Email me when a new thread is published in channels where I receive notifications.',
          display: 'flex-start',
        };
      case 'dailyDigest':
        return {
          type,
          emailValue: notifications.types[type].email,
          label:
            'Email me every day with the top conversations in my communities.',
          display: 'center',
        };
      case 'weeklyDigest':
        return {
          type,
          emailValue: notifications.types[type].email,
          label:
            'Email me once every week with the top conversations in my communities',
          display: 'center',
        };
      case 'newMention':
        return {
          type,
          emailValue: notifications.types[type].email,
          label: 'Email me if someone @mentions me on Spectrum',
          display: 'flex-start',
        };
      default:
      case 'null':
        return {};
    }
  });
};

interface Props {
  updateUserEmail: any;
  dispatch: any;
  toggleNotificationSettings: any;
  smallOnly: boolean;
  largeOnly: boolean;
  currentUser: User;
}

class EmailSettings extends React.Component<Props> {
  handleChange = (e) => {
    const notificationType = e.target.id;
    const deliveryMethod = 'email';
    const input = {
      deliveryMethod,
      notificationType,
    };

    this.props
      .toggleNotificationSettings(input)
      .then(() => {
        return this.props.dispatch(
          // addToastWithTimeout('success', 'Settings saved!')
        );
      })
      .catch((err) => {
        // this.props.dispatch(addToastWithTimeout('error', err.message));
      });
  }

  render() {
    const { currentUser } = this.props;
    if (currentUser.newProfileNot) {
      return (
        <StyledCard
          smallOnly={this.props.smallOnly}
          largeOnly={this.props.largeOnly}
        >
          <ListHeader>
            <LargeListHeading>Turn on email notifications</LargeListHeading>
          </ListHeader>
          <ListContainer>
            <Description>
              You can customize your email notifications to keep up to date on
              what’s important to you on Spectrum. Enter your email below and
              we’ll send you a confirmation link.
            </Description>
          </ListContainer>
        </StyledCard>
      );
    }

    return (
      <StyledCard
        smallOnly={this.props.smallOnly}
        largeOnly={this.props.largeOnly}
      >
        <ListHeader>
          <LargeListHeading>Email Preferences</LargeListHeading>
        </ListHeader>
        <ListContainer>
          <EmailListItem key={'1'}>
            <Checkbox
              checked={currentUser.newProfileNot}
              onChange={this.handleChange}
              id={'ffd'}
            >
              <CheckboxContent>
                <Notice>
                  <strong>Trying to mute a specific conversation?</strong>{' '}
                  You can turn; off email notifications for individual
                  threads by clicking on the notification icon{' '}
                  <InlineIcon>
                    <Icon glyph="notification" size="16" />
                  </InlineIcon>{' '}
                  at the top of a post.
                </Notice>
                )}

              </CheckboxContent>
            </Checkbox>
          </EmailListItem>
        </ListContainer>
      </StyledCard>
    );
  }
}

export default compose(
)(EmailSettings);
