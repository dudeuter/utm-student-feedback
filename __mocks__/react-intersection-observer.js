import React from 'react';

// always return true to render the application in enzyme
function useInView() {
  return [React.createRef(), true];
}

// eslint-disable-next-line import/prefer-default-export
export { useInView };
