import React from 'react';
import Home from './home.jsx';
import renderer from 'react-test-renderer';

test('Home matches snapshot', () => {
  const component = renderer.create(
      <Home/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
