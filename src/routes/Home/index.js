import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from 'store/actions/home';
import { Page } from 'containers';
import { Button, Heading } from 'components';

const Home = ({ title, updateTitle }) => (
  <Page>
    <Heading level={1}>{ title }</Heading>
    <Button onClick={ e => updateTitle('New Title') }>
      Click Me
    </Button>
  </Page>
);

const mapStateToProps = state => ({ ...state.home });
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(homeActions, dispatch), dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Home);
