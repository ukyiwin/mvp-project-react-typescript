import * as React from 'react';

export const ErrorComponent = props => (
  <span>
    Something went wrong, you can try to
    <button onClick={props.refetch}>refetch</button>
  </span>
);

export const EmptyComponent = props => (
  <div className="empty">
    <div className="empty-icon">
      <i className="icon icon-people" />
    </div>
    <p className="empty-title h5">You have no new messages</p>
    <p className="empty-subtitle">Click the button to start a conversation.</p>
    <div className="empty-action">
      <button className="btn btn-primary">Send a message</button>
    </div>
  </div>
);

export const LoadingComponent = props => (
  <span>
    Something went wrong, you can try to
    <button onClick={props.refetch}>refetch</button>
  </span>
);