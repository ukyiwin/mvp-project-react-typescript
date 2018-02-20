import * as React from 'react';
// import { ContactList } from 'react-swagchat';
// import UIkit from 'uikit/src/js/uikit';
// import { Link } from 'react-router-dom';

type Props = {
  onChange?: () => void,
  value?: Date
};

// tslint:disable-next-line:no-any
class ChatList extends React.Component<Props> {

  componentDidMount() {
    // UIkit.notification('MyMessage', 'danger');
  }

  render() {
    return (
      <div 
        className="uk-card uk-card-small uk-card-default uk-width-1-1 uk-margin-top"
        style={{ borderRadius: 5 }}
      >hghggh
      </div>
    );
  }
  
}

export default ChatList;
