import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Revert = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Revert' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M8 3 3 8l5 5m4 7h3a6 6 0 1 0 0-12H4' />
    </StyledIcon>
  );
});
