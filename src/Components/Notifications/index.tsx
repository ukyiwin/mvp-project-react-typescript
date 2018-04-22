import * as React from 'react';
import { Content } from 'Containers/style';
import Icon from 'Components/Icons';
import Avatar from 'Components/Avatar/avatar';
import { Card } from 'Components/Card';
import { Notification } from 'CustomTypings/schema';

interface NotificationProps {
  notification: Notification;
}

export class NotificationItem extends React.Component<NotificationProps> {

  state = {
    kind: 0
  };

  componentDidMount() {
    const { notification } = this.props;
    const { kind } = this.state;
    if (notification.article) {
      this.setState({kind: 1});
    }

    if (notification.connect) {
      this.setState({kind: 2});
    }

    if (notification.message) {
      this.setState({kind: 3});
    }
  }

  render() {
    const { notification } = this.props;
    const { kind } = this.state;

    let verb;
    switch (kind) {
      case 1:
        switch (notification.type) {
          case 'Comment':
            verb = 'on your article';
            break;
          case 'Like':
            verb = 'your article';
            break;
          default:
            verb = 'on your article';
            break;
        }
        break;

      case 2:
        switch (notification.type) {
          case 'Connect':
            verb = 'and you are now connected';
            break;
          case 'Invitation':
            verb = 'invited you to';
            break;
          case 'General':
            verb = 'connection request handled';
            break;
          default:
            break;
        }
        break;

      case 3:
        switch (notification.type) {
          case 'Like':
            verb = 'on your message';
            break;
          case 'Message':
            verb = 'you a message';
            break;
          case 'General':
            verb = 'a message';
            break;
          default:
            break;
        }
        break;
      default:
        verb = 'none';
        break;
    }

    switch (kind) {
      case 1:
        return(
          <Card style={{backgroundColor: notification.seen ? '#fff' : 'azure'}}>
            <div className="uk-flex uk-flex-stretch uk-padding-small">
              <Avatar 
                user={notification.actor}
                src="http://www.groom.com/goop.png"
                size={40}
              />
              <div style={{marginLeft: 5}}>
                <div><strong>{notification.actor.firstname} {notification.actor.lastname}</strong> 
                  <b style={{fontSize: 13}}>{notification.verb}</b> 
                  {verb}
                </div>
                <text style={{fontSize: 13}}>{notification.article ? notification.article.title : ''}</text>
              </div>
            </div>
          </Card>
        );
        break;
      case 2:
        return(
          <Card style={{backgroundColor: notification.seen ? '#fff' : 'azure'}}>
            <div className="uk-flex uk-flex-stretch uk-padding-small">
              <Avatar 
                user={notification.actor}
                src="http://www.groom.com/goop.png"
                size={40}
              />
              <div style={{marginLeft: 5}}>
                <div><strong>{notification.actor.firstname} {notification.actor.lastname}</strong> 
                  <b style={{fontSize: 13}}>{notification.verb}</b> 
                  {verb}
                </div>
              </div>
            </div>
          </Card>
        );
        break;
      case 3:
        return(
          <Card style={{backgroundColor: notification.seen ? '#fff' : 'azure'}}>
            <div className="uk-flex uk-flex-stretch uk-padding-small">
              <Avatar 
                user={notification.actor}
                src="http://www.groom.com/goop.png"
                size={40}
              />
              <div style={{marginLeft: 5}}>
                <div><strong>{notification.actor.firstname} {notification.actor.lastname}</strong> 
                  <b style={{fontSize: 13}}>{notification.verb}</b> 
                  {verb}
                </div>
                <text style={{fontSize: 13}}>{notification.message ? notification.message.text.truncString('...', 20) : ''}</text>
              </div>
            </div>
          </Card>
        );
        break;
      default:
        return(
          <Card style={{backgroundColor: notification.seen ? '#fff' : 'azure'}}>
            <div className="uk-flex uk-flex-stretch uk-padding-small">
              <Avatar 
                user={notification.actor}
                src="http://www.groom.com/goop.png"
                size={40}
              />
              <div style={{marginLeft: 5}}>
                <div><strong>{notification.actor.firstname} {notification.actor.lastname}</strong> 
                  <b style={{fontSize: 13}}>{notification.verb}</b>
                </div>
              </div>
            </div>
          </Card>
        );
        break;
    }
  }

}

/*

      <NotificationCard isSeen={notification
        <CardLink
          to={{
            pathname: window.location.pathname,
            search: `?thread=${notification.context.id}`,
          }}
        />
        <CardContent>
          <SuccessContext>
            <Icon glyph="message-fill" />
            <ActorsRow actors={actors.asObjects} />
          </SuccessContext>
          <Content>
            <TextContent pointer={true}>
              {' '}
              {actors.asString} {event} {context.asString} {date}{' '}
            </TextContent>
            <AttachmentsWash>
              <HzRule>
                <hr />
                <Icon glyph="message" />
                <hr />
              </HzRule>
              {messages.map((group, i) => {
                const initialMessage = group[0];
                let author = actors.asObjects.filter(
                  user => user.id === initialMessage.senderId
                )[0];
                const me = currentUser ? author.id === currentUser.id : false;

                return (
                  <Author key={i}>
                    {!me && <AuthorAvatar user={author} />}

                    <MessageGroup me={me}>
                      <AuthorByline user={author} me={me} />
                      {group.map((message, i) => {
                        return (
                          <Message
                            key={i}
                            message={message}
                            link={`#${message.id}`}
                            me={me}
                            canModerate={me}
                            pending={message.id < 0}
                            currentUser={currentUser}
                            context={'notification'}
                          />
                        );
                      })}
                    </MessageGroup>
                  </Author>
                );
              })}
            </AttachmentsWash>
          </Content>
        </CardContent>
      </NotificationCard>*/