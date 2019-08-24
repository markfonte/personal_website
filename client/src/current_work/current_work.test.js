import React from 'react';
import CurrentWork from './current_work.jsx';
import renderer from 'react-test-renderer';

test('CurrentWork matches snapshot', () => {
  const component = renderer.create(
      <CurrentWork/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
