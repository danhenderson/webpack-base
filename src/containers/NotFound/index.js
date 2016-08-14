import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Page from 'containers/Page';
import * as homeActions from 'store/actions/home';
import Button from 'components/Button';

export default () => (
  <Page>
    <h1>Not Found</h1>
  </Page>
);
