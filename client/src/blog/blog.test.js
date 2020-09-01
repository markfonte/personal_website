import React from 'react';
import Blog from './blog.jsx';
import renderer from 'react-test-renderer';

test('Extra matches snapshot', () => {
  const component = renderer.create(
      <Blog/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
