import React from 'react';
import Footer from './footer.jsx';
import renderer from 'react-test-renderer';

test('Footer matches snapshot', () => {
  const component = renderer.create(
      <Footer/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
