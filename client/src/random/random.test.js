import React from 'react';
import Random from './random.jsx';
import renderer from 'react-test-renderer';

test('Random matches snapshot', () => {
  const component = renderer.create(
      <Random/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
