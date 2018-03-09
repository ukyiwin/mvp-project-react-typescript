import * as React from 'react';

type Props = {
  // tslint:disable-next-line:no-any
  refresh?: any;
};

export const ErrorComponent = (props: Props) => (
  <div className="uk-flex uk-flex-stretch uk-width-1-1">
  <div className="empty uk-text-center">
    <div className="empty-icon">
      <i className="icon icon-people" />
    </div>
    <p className="empty-title h5">There was an error loading content</p>
    <p className="empty-subtitle">Click the button to refresh.</p>
    <div className="empty-action">
      <button className="uk-button uk-button-primary" onClick={() => props.refresh}>Refresh</button>
    </div>
  </div>
  </div>
);

export const EmptyComponent = props => (
  <div className="empty uk-flex-stretch uk-align-center">
    <div className="empty-icon">
      <i className="icon icon-people" />
    </div>
    <p className="empty-title h5">You have no new article</p>
    <p className="empty-subtitle">Click the button to find topics or people to connect to.</p>
    <div className="empty-action">
      <button className="btn btn-primary">Connect</button>
    </div>
  </div>
);

export const LoadingComponent = props => (
  <div 
    className=" uk-flex-stretch uk-text-center uk-width-1-1"
    style={{ justifyContent: 'center', alignSelf: 'center' }}
  >
    <p>Loading</p>
  </div>
);