// import configureMockStore from 'redux-mock-store';
/* eslint-disable */
import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

console.log('###    Running src/setupTest.js   ###');

jest.setTimeout(60000); // Give it a minute, just in case. (lighthouse)


configure({ adapter: new Adapter() });



/**
 * Mock window.URL.createObjectURL
global.URL = {
  createObjectURL: (...a) => {
    console.log('mocked `window.URL.createObjectURL` called with ');
    console.log(...a);
    // TODO, mock the return value
    // the compo using might need the ac tual return value
    // it is from inside react-map-gl, out of our contorl I think
  },
};
 */


/**
 * Make test rendere fn available globally when running test  –––––––––––––––
 */
global.shallow = shallow;
global.render = render;
global.mount = mount;
// global.shallowWithRouter = ({ children }) => shallow(
//   <Router>
//     {children}
//   </Router>
// );


/**
 * Mock fetch and friends –––––––––––––––
 */
const fetchPolifill = require('whatwg-fetch');
global.fetch = fetchPolifill.fetch;
global.Request = fetchPolifill.Request;
global.Headers = fetchPolifill.Headers;
global.Response = fetchPolifill.Respons;
