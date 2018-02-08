import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './index';

it('header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
