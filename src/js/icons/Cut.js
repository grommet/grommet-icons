import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Cut = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Cut' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M23 4 8 16 23 4zm0 16L8 8l15 12zM5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
    </StyledIcon>
  );
});
