import App from '../App';

describe('App', function() {
  let component;

  beforeEach(function() {
    component = shallowRender(<App />);
  });

  it('should render the App header', function() {
    expect(component.props.children).to.contain('Webpack Base Example');
    expect(component.type).to.equal('h1');
  });
});

/*
describe('App', function() {
  let component;

  beforeEach(function() {
    component = renderIntoDocument(<App />);
  });

  it('should render the App header', function() {
    var header = findByTag(component, 'h1');

    expect(header.getDOMNode().textContent).to.contain('Webpack Base Example');
  });
});
*/
