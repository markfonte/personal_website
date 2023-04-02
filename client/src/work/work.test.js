import React from 'react';
import Work from './work.test.js';
import renderer from 'react-test-renderer';

test('Work matches snapshot', () => {
  const component = renderer.create(
      <Work/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
