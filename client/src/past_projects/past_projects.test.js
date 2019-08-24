import React from 'react';
import PastProjects from './past_projects.jsx';
import renderer from 'react-test-renderer';

test('PastProjects matches snapshot', () => {
  const component = renderer.create(
      <PastProjects/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
