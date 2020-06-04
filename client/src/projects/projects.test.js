import React from 'react';
import Projects from './projects.jsx';
import renderer from 'react-test-renderer';

test('Projects matches snapshot', () => {
  const component = renderer.create(
      <Projects/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
