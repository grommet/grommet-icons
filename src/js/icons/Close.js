import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Close = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Close' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m3 3 18 18M3 21 21 3' />
    </StyledIcon>
  );
});
