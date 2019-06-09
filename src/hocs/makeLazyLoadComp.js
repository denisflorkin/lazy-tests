import React from 'react';

export const makeLazyLoadComp = (importCallBack) => {
  const PageComponent = React.lazy(importCallBack);

  return props => (
    <React.Suspense fallback={() => 'LOADING'}>
      <PageComponent {...props} />
    </React.Suspense>
  );
};

export default makeLazyLoadComp;
