import React from 'react';
import Contact from './Contact.jsx';
import renderer from 'react-test-renderer';

test('Contact matches snapshot', () => {
  const component = renderer.create(
    <Contact />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
