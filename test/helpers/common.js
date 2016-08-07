'use strict';

require('./testdom')('<html><body></body></html>');

global.React = require('react');
global.TestUtils = require('react-addons-test-utils');
global.chai = require('chai');
global.should = chai.should();
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;

global.reactModulesToStub = [];
global.mockcomponent = function(str) {
  global.reactModulesToStub.push(str);
};
global.unmockcomponent = function(str) {
  global._.pull(global.reactModulesToStub, str);
};

global.renderIntoDocument = TestUtils.renderIntoDocument;
global.Simulate = TestUtils.Simulate;
global.scryByType = TestUtils.scryRenderedComponentsWithType;
global.findByType = TestUtils.findRenderedComponentWithType;
global.scryByClass = TestUtils.scryRenderedDOMComponentsWithClass;
global.findByClass = TestUtils.findRenderedDOMComponentWithClass;
global.scryByTag = TestUtils.scryRenderedDOMComponentsWithTag;
global.findByTag = TestUtils.findRenderedDOMComponentWithTag;
global.scryByProp = require('./scryRenderedDOMComponentsWithProp').scryRenderedDOMComponentsWithProp;
global.findByProp = require('./scryRenderedDOMComponentsWithProp').findRenderedDOMComponentWithProp;

global.shallowRender = (el) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(el);
  return renderer.getRenderOutput();
}
