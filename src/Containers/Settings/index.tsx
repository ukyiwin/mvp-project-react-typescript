import * as React from 'react';
import compose from 'recompose/compose';
import FacebookProvider, { Login } from 'react-facebook';
import { Query, Mutation } from 'react-apollo';
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
import { CheckboxContent, EmailListItem } from 'Containers/Settings/style';
import { Notice, InlineIcon } from 'Components/ListItems/style';
import Icon from 'Components/Icons';
import { Checkbox } from 'Components/FormElements';
import { ButtonFacebook } from 'Containers/style';
import Button from 'semantic-ui-react';
import { 
  UPDATE_TOP_ARTICLE_NOT,
  UPDATE_NEW_COMMENT_NOT,
  UPDATE_NEW_CONNECTION_NOT,
  UPDATE_NEW_COMMUNITY_NOT,
  UPDATE_NEW_MESSAGE_NOT,
  UPDATE_MENTION_ME_NOT } from 'Graphql/Mutation';

class UserSettings extends React.Component<any> {
  
  componentDidMount() {
    // track('user', 'settings viewed', null);
  }

  handleError = () => {
    // sdfdkfj
  }

  handleResponse = () => {
    // sdfdkfj
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
                  <EmailListItem key={9}>
                    <Mutation 
                      mutation={UPDATE_TOP_ARTICLE_NOT}
                      update={(cache, { data: { updateTopArticleNot } }) => {
                        const { me } = cache.readQuery({ query: ME });
                        cache.writeQuery({
                          query: ME,
                          data: { me: updateTopArticleNot }
                        });
                      }}
                    >
                    {(updateTopArticleNot, {loading, error}) => (
                      <Checkbox
                        checked={data.me.topWeeklyArticleNot}
                        id={2}
                        disbaled={loading}
                        onChange={(e) => {
                          updateTopArticleNot({
                            variables: {
                              value: !data.me.topWeeklyArticleNot
                            },
                            optimisticResponse: {
                              __typename: 'Mutation',
                              updateTopArticleNot: {
                                id: data.me.id,
                                __typename: 'User',
                                topWeeklyArticleNot: !data.me.topWeeklyArticleNot
                              }
                            }
                          }).then((res) => {
                            // fdfjk
                          });
                        }}
                        align={true}
                      >
                        <CheckboxContent>
                          <Notice>
                            <strong>Get top weekly articles</strong>{' '}
                            Send me weekly trending topics that matches my interest
                          </Notice>
                        </CheckboxContent>
                      </Checkbox>
                    )}
                    </Mutation>
                  </EmailListItem>
                {'serviceWorker' in navigator &&
                  'PushManager' in window && <NotificationSettings largeOnly />}
                  <EmailListItem key={0}>
                    <Mutation 
                      mutation={UPDATE_NEW_COMMENT_NOT}
                      update={(cache, { data: { newCommentNot } }) => {
                        const { me } = cache.readQuery({ query: ME });
                        cache.writeQuery({
                          query: ME,
                          data: { me: newCommentNot }
                        });
                      }}
                    >
                    {(newCommentNot, {loading, error}) => (
                      <Checkbox
                        checked={data.me.newCommentNot}
                        id={2}
                        disbaled={loading}
                        onChange={(e) => {
                          newCommentNot({
                            variables: {
                              value: !data.me.newCommentNot
                            },
                            optimisticResponse: {
                              __typename: 'Mutation',
                              newCommentNot: {
                                id: data.me.id,
                                __typename: 'User',
                                newCommentNot: !data.me.newCommentNot
                              }
                            }
                          }).then((res) => {
                            // fdfjk
                          });
                        }}
                        align={true}
                      >
                        <CheckboxContent>
                          <Notice>
                          Do you want to receive notifications for new comments
                          </Notice>
                        </CheckboxContent>
                      </Checkbox>
                    )}
                    </Mutation>
                  </EmailListItem>
                  <EmailListItem key={1}>
                    <Mutation 
                      mutation={UPDATE_NEW_COMMUNITY_NOT}
                      update={(cache, { data: { newCommunityNot } }) => {
                        const { me } = cache.readQuery({ query: ME });
                        cache.writeQuery({
                          query: ME,
                          data: { me: newCommunityNot }
                        });
                      }}
                    >
                    {(newCommunityNot, {loading, error}) => (
                      <Checkbox
                        checked={data.me.newCommunityNot}
                        id={2}
                        disbaled={loading}
                        onChange={(e) => {
                          newCommunityNot({
                            variables: {
                              value: !data.me.newCommunityNot
                            },
                            optimisticResponse: {
                              __typename: 'Mutation',
                              newCommunityNot: {
                                id: data.me.id,
                                __typename: 'User',
                                newCommunityNot: !data.me.newCommunityNot
                              }
                            }
                          }).then((res) => {
                            // fdfjk
                          });
                        }}
                        align={true}
                      >
                        <CheckboxContent>
                          <Notice>
                          Do you want to be notified on messages in community you are joined
                          </Notice>
                        </CheckboxContent>
                      </Checkbox>
                    )}
                    </Mutation>
                  </EmailListItem>
                  <EmailListItem key={2}>
                    <Mutation 
                      mutation={UPDATE_NEW_CONNECTION_NOT}
                      update={(cache, { data: { newConnectNot } }) => {
                        const { me } = cache.readQuery({ query: ME });
                        cache.writeQuery({
                          query: ME,
                          data: { me: newConnectNot }
                        });
                      }}
                    >
                    {(newConnectNot, {loading, error}) => (
                      <Checkbox
                        checked={data.me.newConnectNot}
                        id={2}
                        disbaled={loading}
                        onChange={(e) => {
                          newConnectNot({
                            variables: {
                              value: !data.me.newConnectNot
                            },
                            optimisticResponse: {
                              __typename: 'Mutation',
                              newConnectNot: {
                                id: data.me.id,
                                __typename: 'User',
                                newConnectNot: !data.me.newConnectNot
                              }
                            }
                          }).then((res) => {
                            // fdfjk
                          });
                        }}
                        align={true}
                      >
                        <CheckboxContent>
                          <Notice>
                          Do you want to be notified when you are being followed
                          </Notice>
                        </CheckboxContent>
                      </Checkbox>
                    )}
                    </Mutation>
                  </EmailListItem>
                  <EmailListItem key={3}>
                    <Mutation 
                      mutation={UPDATE_NEW_MESSAGE_NOT}
                      update={(cache, { data: { newMessageNot } }) => {
                        const { me } = cache.readQuery({ query: ME });
                        cache.writeQuery({
                          query: ME,
                          data: { me: newMessageNot }
                        });
                      }}
                    >
                    {(newMessageNot, {loading, error}) => (
                      <Checkbox
                        checked={data.me.newMessageNot}
                        id={2}
                        disbaled={loading}
                        onChange={(e) => {
                          newMessageNot({
                            variables: {
                              value: !data.me.newMessageNot
                            },
                            optimisticResponse: {
                              __typename: 'Mutation',
                              newMessageNot: {
                                id: data.me.id,
                                __typename: 'User',
                                newMessageNot: !data.me.newMessageNot
                              }
                            }
                          }).then((res) => {
                            // fdfjk
                          });
                        }}
                        align={true}
                      >
                        <CheckboxContent>
                          <Notice>
                          Do you want to be notified when you have a direct message
                          </Notice>
                        </CheckboxContent>
                      </Checkbox>
                    )}
                    </Mutation>
                  </EmailListItem>
                  <EmailListItem key={4}>
                    <Mutation 
                      mutation={UPDATE_MENTION_ME_NOT}
                      update={(cache, { data: { mentionMeNot } }) => {
                        const { me } = cache.readQuery({ query: ME });
                        cache.writeQuery({
                          query: ME,
                          data: { me: mentionMeNot }
                        });
                      }}
                    >
                    {(mentionMeNot, {loading, error}) => (
                      <Checkbox
                        checked={data.me.mentionMeNot}
                        id={2}
                        disbaled={loading}
                        onChange={(e) => {
                          mentionMeNot({
                            variables: {
                              value: !data.me.mentionMeNot
                            },
                            optimisticResponse: {
                              __typename: 'Mutation',
                              mentionMeNot: {
                                id: data.me.id,
                                __typename: 'User',
                                mentionMeNot: !data.me.mentionMeNot
                              }
                            }
                          }).then((res) => {
                            // fdfjk
                          });
                        }}
                        align={true}
                      >
                        <CheckboxContent>
                          <Notice>
                          Do you want to be when you are mentioned by someone
                          </Notice>
                        </CheckboxContent>
                      </Checkbox>
                    )}
                    </Mutation>
                  </EmailListItem>
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
