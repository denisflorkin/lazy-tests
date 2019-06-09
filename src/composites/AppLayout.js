import React from 'react';

const AppLayout = ({
  header,
  main,
  footer,
}) => (
  <div className="layout_appLayoutParent">
    <div>{header}</div>
    <div className="layout_appLayoutMain">{main}</div>
    <div>{footer}</div>
  </div>
);


export default AppLayout;
