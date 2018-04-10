import * as React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Checkbox } from 'Components/FormElements';
import WebPushManager from 'Utils/webPushManager';
import {
  StyledCard,
  LargeListHeading,
  ListHeader,
  ListContainer,
  Notice,
} from 'Components/ListItems/style';
import { EmailListItem } from '../style';

interface State {
  webPushBlocked: boolean;
  subscription?: any;
}

interface Props {
  subscribeToWebPush: any;
  dispatch: any;
  smallOnly?: boolean;
  largeOnly?: boolean;
}

class NotificationSettings extends React.Component<Props, State> {
  state = {
    webPushBlocked: false,
    subscription: null,
  };

  componentDidMount() {
    WebPushManager.getPermissionState().then((result) => {
      if (result === 'denied') {
        this.setState({
          webPushBlocked: true,
        });
      }
    });
    WebPushManager.getSubscription().then((subscription) => {
      this.setState({
        subscription: subscription || false,
      });
    });
  }

  subscribeToWebPush = () => {
    WebPushManager.subscribe()
      .then((subscription) => {
        this.setState({
          subscription,
          webPushBlocked: false,
        });
        return this.props.subscribeToWebPush(subscription);
      })
      .catch((err) => {
        // klk
      });
  }

  unsubscribeFromWebPush = () => {
    WebPushManager.unsubscribe()
      .then((result) => {
        if (result) {
          this.setState({
            subscription: false,
          });
        } else {
          // kkkk
        }
      })
      .catch(() => {
        // jjkjkj
      });
  }

  render() {
    const { webPushBlocked, subscription } = this.state;
    const onChange = !subscription
      ? this.subscribeToWebPush
      : this.unsubscribeFromWebPush;

    return (
      <StyledCard
        smallOnly={this.props.smallOnly}
        largeOnly={this.props.largeOnly}
      >
        <ListHeader>
          <LargeListHeading>Notification Preferences</LargeListHeading>
        </ListHeader>
        <ListContainer>
          <EmailListItem>
            {subscription !== null && (
              <Checkbox
                checked={!!subscription}
                disabled={webPushBlocked}
                onChange={onChange}
              >
                Enable browser push notifications
              </Checkbox>
            )}
            {webPushBlocked && (
              <Notice>
                <strong>
                  You have blocked browser push notifications on this device!
                </strong>{' '}
                Unblock them by following{' '}
                <a href="https://support.sendpulse.com/456261-How-to-Unblock-Web-Push-Notifications">
                  these steps
                </a>.
              </Notice>
            )}
          </EmailListItem>
        </ListContainer>
      </StyledCard>
    );
  }
}

export default compose()(NotificationSettings);
