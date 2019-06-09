import React from 'react';
import NavItem from '../leafs/NavItem';
import routes from '../routes';


function Menu({ location }) {
  return (
    <div className="flx">
      {
        routes.map(({ path, displayName }) => (
          <NavItem
            key={`${path}-${displayName}`}
            path={path}
            name={displayName}
            isActive={path === location.pathname}
          />
        ))
      }
    </div>
  );
}

Menu.defaultProps = {
  location: {},
};

export default Menu;
