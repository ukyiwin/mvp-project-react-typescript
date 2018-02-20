import * as React from 'react';
import './style.css';
import ChatList from 'Components/ChatList';

export default class Message extends React.Component {
  render() {
    return (
      <div className="uk-width-1-1">
        <div className="uk-width-1-3">
          <ChatList />
        </div>
        <div className="uk-width-2-3">
          <div className="uk-padding-large uk-padding-remove-vertical">
            jkjfkdjfkdjfkj
          </div>
        </div>
      </div>
    );
  }
}