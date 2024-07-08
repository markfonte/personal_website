import React from 'react';
import Blog from './Blog.jsx';
import renderer from 'react-test-renderer';

test('Blog matches snapshot', () => {
  const component = renderer.create(
    <Blog />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
