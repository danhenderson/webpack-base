import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from 'store/actions/home';
import Button from 'components/Button';

const Home = ({ title, updateTitle }) => (
  <div>
    <h1>{ title }</h1>
    <h2>Home Page</h2>
    <Button
      onClick={ e => updateTitle('New Title') }
    >
      Click Me
    </Button>
  </div>
);

const mapStateToProps = state => ({ ...state.home });
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(homeActions, dispatch), dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Home);
