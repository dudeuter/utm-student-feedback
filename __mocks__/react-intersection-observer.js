import React from 'react';

function useInView() {
  return [React.createRef(), true];
}

// eslint-disable-next-line import/prefer-default-export
export { useInView };
