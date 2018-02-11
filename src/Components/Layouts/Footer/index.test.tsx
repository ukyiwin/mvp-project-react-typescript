import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Footer from './index';

it('Footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});