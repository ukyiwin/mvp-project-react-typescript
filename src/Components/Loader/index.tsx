import * as React from 'react';

const Loader: React.StatelessComponent<undefined> = () =>
  // tslint:disable-next-line:jsx-wrap-multiline
  <div className="loader">
      <div className="loader__spinner" />
  </div>;

export default Loader;