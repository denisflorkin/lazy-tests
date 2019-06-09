import React from 'react';


const Placeholder = ({ style }) => (
  <div
    className="flx-centered placeholder"
    style={{
      width: '100%',
      height: '100%',
      ...style,
    }}
  />
);

export default Placeholder;
