import * as React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import AppViewWrapper from 'Components/AppViewWrapper';
import Column from 'Components/Column';
import { Loading } from 'Components/Loading';
import { UserEditForm } from 'Components/EditForm';
import EmailSettings from './components/emailSettings';
import NotificationSettings from './components/notificationSettings';
import { FlexCol } from 'Components/Globals';
import ViewError from 'Components/ErrorView/viewError';
import Titlebar from 'Components/Titlebar';
import { ME } from 'Graphql/Query';

class UserSettings extends React.Component<any> {
  componentDidMount() {
    // track('user', 'settings viewed', null);
  }

  render() {
    return(
      <Query query={ME}>
      {({ loading, error, data }) => {
        if (loading) {
          return <Loading />;
        }

        if (error) {
          return (
            <FlexCol style={{ flex: 'auto' }}>
              <Titlebar
                title={'User not found'}
                provideBack={true}
                backRoute={'/'}
                noComposer
              />
              <AppViewWrapper>
                <ViewError
                  heading={'We couldn’t find a user with this username.'}
                />
              </AppViewWrapper>
            </FlexCol>
          );
        }
        return (
          <FlexCol style={{ flex: 'auto' }}>
            <Titlebar
              title={data.me.firstname + ' ' + data.me.lastname}
              subtitle={'Settings'}
              provideBack={true}
              backRoute={`/${data.me.username}`}
              noComposer
            />
            <AppViewWrapper>
              <Column type="secondary">
                <UserEditForm user={data.me} />
                <EmailSettings smallOnly currentUser={data.me} />
              </Column>
              <Column type="primary">
                <EmailSettings largeOnly currentUser={data.me} />
                {'serviceWorker' in navigator &&
                  'PushManager' in window && <NotificationSettings largeOnly />}
              </Column>
            </AppViewWrapper>
          </FlexCol>
        );
      }}
      </Query>
    );
  }
}

export default compose(
)(UserSettings);
