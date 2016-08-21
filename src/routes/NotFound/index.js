import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Page } from 'containers';
import { Heading } from 'components';

export default () => (
  <Page>
    <Heading level={1}>Not Found</Heading>
  </Page>
);
