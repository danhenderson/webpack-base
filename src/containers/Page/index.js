import React from 'react';
import Header from 'containers/Header';
import Footer from 'containers/Footer';
import styles from './styles';

export default ({ children }) => (
  <div className={ styles }>
    <Header />
    { children }
    <Footer />
  </div>
);
