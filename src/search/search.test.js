import React from 'react';
import ReactDOM from 'react-dom';
import Search from 'search'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search fetchSearch={q=>q}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});