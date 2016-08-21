import React from 'react';
import { Footer, Header } from 'containers';
import styles from './styles';

export default ({ children }) => (
  <div className={ styles }>
    <Header />
    { children }
    <Footer />
  </div>
);
