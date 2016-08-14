import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Page from 'containers/Page';
import * as homeActions from 'store/actions/home';
import Button from 'components/Button';

const Home = ({ title, updateTitle }) => (
  <Page>
    <h2>{ title }</h2>
    <Button
      onClick={ e => updateTitle('New Title') }
    >
      Click Me
    </Button>
  </Page>
);

const mapStateToProps = state => ({ ...state.home });
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(homeActions, dispatch), dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Home);
