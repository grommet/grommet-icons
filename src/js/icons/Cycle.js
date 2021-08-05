import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Cycle = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Cycle' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M13 20c6-1 8-6 8-10m-7 6-2 4 4 3M0 9l4-3 3 4m2 10c-6-3-7-8-5-14m16 1C16 1 10 1 6 4.006M20 2v5h-5' />
    </StyledIcon>
  );
});
