import React from 'react';
import styles from './styles';

export default ({ children, onClick }) => (
  <button type="button" className={ styles } onClick={ onClick }>
    { children }
  </button>
);
