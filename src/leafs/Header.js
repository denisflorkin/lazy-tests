import React from 'react';
import Menu from '../composites/Menu';

function Header(props) {
  return (
    <header
      className="flx-centered header"
      style={{ justifyContent: 'flex-start' }}
    >
      <Menu {...props} />
    </header>
  );
}

export default Header;
