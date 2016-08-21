import React from 'react'
import styles from './styles'

export default ({ level = 1, className = '', children }) => {
  let Tag = `h${level}`;
  return (
    <Tag className={`${styles[level]} ${className}`}>{children}</Tag>
  );
}
