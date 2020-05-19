import React from 'react';
import Extra from './extra.jsx';
import renderer from 'react-test-renderer';

test('Extra matches snapshot', () => {
  const component = renderer.create(
      <Extra/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
