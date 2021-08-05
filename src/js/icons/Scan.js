import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Scan = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Scan' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M20 10V3H4v7m-3 2h22H1zm3 1v3-3zm16 3v-3 3zM7 21H4v-3m16 0v3h-3m-8 0h6-6z' />
    </StyledIcon>
  );
});
