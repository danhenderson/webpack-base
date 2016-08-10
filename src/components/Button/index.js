import React from 'react';

export default ({ children, onClick }) => (
  <button type="button" className="btn" onClick={ onClick }>
    { children }
  </button>
);
