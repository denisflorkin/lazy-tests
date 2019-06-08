import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/**
 * more infos on assertions here
 * https://jestjs.io/docs/en/expect.html
 */

it('shallow renders without crashing', () => {
  const comp = shallow(<App />);
  expect(App).not.toBe(undefined);
  expect(comp).not.toBe(undefined);
  // expect('some better assumptions').toEqual('those currently poor assumptions');
});

it('matches snapshot', () => {
  const comp = shallow(<App />);
  expect(comp).toMatchSnapshot();
});
