import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {shallow} from 'enzyme';
// import Enzyme from 'enzyme';
// import {createMuiTheme} from '@material-ui/core/styles';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({adapter: new Adapter()});

// const darkTheme = createMuiTheme({
//   palette: {
//     type: 'dark',
//     secondary: {
//       main: '#ffcb05', // blue
//     },
//   },
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('App renders correct state', () => {
//   const app = shallow(<App />);
//   expect(app.state().theme).to.equal(darkTheme);
// });
