import Button from '../';

describe('Button', function() {
  let component;

  beforeEach(function() {
    component = shallowRender(<Button>Click Me</Button>);
  });

  it('should render the Button', function() {
    expect(component.props.children).to.equal('Click Me');
    expect(component.type).to.equal('button');
    expect(component.props.className).to.contain('btn');
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
