import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SearchBar from './index';

it('Footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
});