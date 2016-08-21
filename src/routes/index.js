import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './Home';
import NotFound from './NotFound';

export default (
  <Route path="/">
    <IndexRoute component={ Home } />
    <Route path='*' component={ NotFound } />
  </Route>
)
