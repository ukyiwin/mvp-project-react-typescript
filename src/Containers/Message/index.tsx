import * as React from 'react';
import { ChatList, MessageList, Input, Button } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import './style.css';

export default class Messages extends React.Component {
  state = {
    messages: [
    ],
    is_typing: false
  };

  render() {
    return (
      <div className="container" >
        <div className="app-wrapper" >
          <div className="uk-flex uk-height-1-1 uk-height-match">
            <div className="uk-width-1-3 uk-height-1-1">
              <ChatList
                className="chat-list"
                dataSource={[
                  {
                    avatar: 'https://facebook.github.io/react/img/logo.svg',
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  },
                  {
                    avatar: 'https://facebook.github.io/react/img/logo.svg',
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  },
                  {
                    avatar: 'https://facebook.github.io/react/img/logo.svg',
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  },
                  {
                    avatar: 'https://facebook.github.io/react/img/logo.svg',
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  },
                  {
                    avatar: 'https://facebook.github.io/react/img/logo.svg',
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  },
                  {
                    avatar: 'https://facebook.github.io/react/img/logo.svg',
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  },
                  {
                    avatar: 'https://facebook.github.io/react/img/logo.svg',
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  },
                  {
                    avatar: 'https://facebook.github.io/react/img/logo.svg',
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                  }
                ]}
              />
            </div>
            <div className="uk-width-2-3 uk-height-1-1">
              <div className="uk-padding-large">
                <MessageList
                  className="message-list"
                  lockable={true}
                  toBottomHeight={'100%'}
                  dataSource={[
                      {
                          position: 'right',
                          type: 'text',
                          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                          date: new Date(),
                      },
                    ]} 
                />
                <div className="">
                <Input
                  placeholder="Type here..."
                  multiline={true}
                  buttons={
                    <Button
                      color="white"
                      backgroundColor="black"
                      text="Send"
                    />}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}